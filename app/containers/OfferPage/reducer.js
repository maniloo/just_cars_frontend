export const fetchedOffer = (
  state = {
    offer: {},
    isFetching: false,
  },
  action,
) => {
  switch (action.type) {
    case 'OFFER_FETCHED':
      return { ...state, offer: action.offer, isFetching: false };
    case 'FETCH_STARTED':
      return { ...state, isFetching: true };
    default:
      return state;
  }
};

export default fetchedOffer;
