import React from 'react';
import { withRouter } from "react-router";
import { ElementWrapper, Name, Price } from './styledComponents'

class OffersListElement extends React.Component {
  redirectToOfferPage = () => {
    const { history, offer } = this.props;
    history.push(`/offer/${offer.id}`);
  }

  render() {
    const { title, price } = this.props.offer;
    return (
      <ElementWrapper onClick={this.redirectToOfferPage}>
        <Name> {title} </Name>
        <Price><span>CENA:</span> {price} <span>(PLN)</span></Price>
      </ElementWrapper>
    );
  }
}

export default withRouter(OffersListElement);
