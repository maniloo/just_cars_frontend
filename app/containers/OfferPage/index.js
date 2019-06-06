import React from 'react';
import { connect } from 'react-redux';
import HeaderSection from 'components/HeaderSection';
import PageWrapper from 'components/PageWrapper';
import { fetchOffer } from './actions';
import {
  BackToOffersButton,
  CarImage,
  MainSection,
} from './components/styledComponents';

class HomePage extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchOffer(id);
  }

  render() {
    const {
      offer: { title, description, price, image_path },
      } = this.props

    return (
      <PageWrapper>
        <HeaderSection />
        <MainSection>
          <BackToOffersButton onClick={() => this.props.history.push('/')}>
            Wróć do listy ofert
          </BackToOffersButton>
          <h1> {title} </h1>

          <div> {description} </div>

          <CarImage>
            <img src={image_path} />
          </CarImage>
          <div><strong> Cena: </strong> {price} <strong>(PLN) </strong></div>
        </MainSection>
      </PageWrapper>
    );
  }
}

const mapDispatchToProps = { fetchOffer };
const mapStateToProps = ({ offerState: { offer } }) => ({
  offer,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
