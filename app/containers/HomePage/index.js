/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import HeaderSection from 'components/HeaderSection';
import PageWrapper from 'components/PageWrapper';
import { OffersList, OffersGallery } from './components';
import { Filters, TitleFilter, OffersSection} from './components/styledComponents'
import { fetchOffers, filterOffers, initFilters } from './actions';

class HomePage extends React.Component {
  componentDidMount() {
    const { fetchOffers, location, initFilters } = this.props;
    fetchOffers();
    const params = queryString.parse(location.search);
    initFilters(params);
  }

  handleChangeFilterParam = (e, paramName) => {
    const { filterOffers, location, history } = this.props;
    filterOffers(e.currentTarget.value, paramName);
    const params = queryString.parse(location.search);

    params[paramName] = e.currentTarget.value;
    const searchString = queryString.stringify(params);
    history.push({ search: searchString });
  };

  render() {
    return (
      <PageWrapper>
        <HeaderSection>
          <Filters>
            <div>
              Cena:{' '}
              <input
                type="text"
                placeholder="Cena od:"
                value={this.props.priceFrom}
                onChange={e => this.handleChangeFilterParam(e, 'priceFrom')}
              />{' '}
              &nbsp;
              <input
                type="text"
                placeholder="Cena do:"
                value={this.props.priceTo}
                onChange={e => this.handleChangeFilterParam(e, 'priceTo')}
              />
            </div>
            <TitleFilter>
              Tytuł:{' '}
              <input
                type="text"
                placeholder="Tytuł"
                value={this.props.title}
                onChange={e => this.handleChangeFilterParam(e, 'title')}
              />
            </TitleFilter>
          </Filters>
        </HeaderSection>
        <OffersSection>
          <OffersGallery />
          <OffersList offers={this.props.offers} />
        </OffersSection>
      </PageWrapper>
    );
  }
}

const mapDispatchToProps = { fetchOffers, filterOffers, initFilters };
const mapStateToProps = ({ offersState: { filterParams } }) => ({
  priceFrom: filterParams.priceFrom,
  priceTo: filterParams.priceTo,
  title: filterParams.title,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
