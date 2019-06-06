import { BACKEND_URL } from 'consts'

export const fetchStarted = () => ({
  type: 'FETCH_STARTED',
});

export const offerFetched = offer => ({
  type: 'OFFER_FETCHED',
  offer,
});

export const fetchOffer = (offerId) => dispatch => {
  dispatch(fetchStarted());
  fetch(`${BACKEND_URL}/advertisements/${offerId}`)
    .then(res => res.json())
    .then(json => dispatch(offerFetched(json)));
};
