import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'recompose';
import { OffersGalleryElement } from './components';
import { ImagesRow, ImageWrapper, CenterSection, OffersGalleryWrapper } from './styledComponents';

class OffersGallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = { selectedOfferIndex: 0 };
  }

  redirectToOfferPage = () => {
    const { history, offers } = this.props;
    const { selectedOfferIndex } = this.state;
    const { id } = offers[selectedOfferIndex];
    history.push(`/offer/${id}`);
  };

  showNextOffer = () => {
    if (this.state.selectedOfferIndex == this.props.offers.length - 1) return;

    this.setState(({ selectedOfferIndex }) => ({
      selectedOfferIndex: selectedOfferIndex + 1,
    }));
  };

  showPreviusOffer = () => {
    if (this.state.selectedOfferIndex == 0) return;

    this.setState(({ selectedOfferIndex }) => ({
      selectedOfferIndex: selectedOfferIndex - 1,
    }));
  };

  render() {
    const { selectedOfferIndex } = this.state;
    const { offers } = this.props;
    const selectedOffer = offers.length ? offers[selectedOfferIndex] : {};

    return (
      <OffersGalleryWrapper>
        <div onClick={this.showPreviusOffer}>{'<< prev'}</div>
        <CenterSection>
          <OffersGalleryElement
            offer={selectedOffer}
            onClick={this.redirectToOfferPage}
          />
          <ImagesRow>
            {offers.map((offer, index) => (
              <ImageWrapper
                onClick={() => this.setState({ selectedOfferIndex: index })}
                active={index == selectedOfferIndex}
              >
                <img src={offer.image_path} />
              </ImageWrapper>
            ))}
          </ImagesRow>
        </CenterSection>
        <div onClick={this.showNextOffer}>{'next >>'}</div>
      </OffersGalleryWrapper>
    );
  }
}

const mapStatesToProps = ({ offersState }) => ({
  offers: offersState.offers,
  isFetching: offersState.isFetching,
});

export default compose(
  withRouter,
  connect(
    mapStatesToProps,
    null,
  ),
)(OffersGallery);
