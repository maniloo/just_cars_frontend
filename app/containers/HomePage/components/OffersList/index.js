import React from 'react'
import styled from 'styled-components';
import OffersListElement from './OffersListElement';
import { connect } from 'react-redux';
import { getFilteredOffers } from '../../selectors'

class OffersList extends React.Component {
  render() {
    return (
      <OffersListWrapper>
        {this.props.offers.map((offer) => (
          <OffersListElement offer={offer} />
        ))}
      </OffersListWrapper>
    )
  }
}

const mapStatesToProps = ({ offersState: { offers, filterParams} }) => ({
  offers: getFilteredOffers(offers, filterParams),
})

export default connect(mapStatesToProps, null)(OffersList);

const OffersListWrapper = styled.div`
  width: calc(30% - 30px);
  margin: 15px;
  height: calc(100% - 30px);
  overflow-y: scroll;
  overflow-x: hidden;
`;
