export const fetchedOffers = (
  state = {
    offers: [],
    isFetching: false,
    filterParams: {
      "priceFrom": "",
      "priceTo": "",
      "title": "",
    },
  },
  action,
) => {
  switch (action.type) {
    case 'OFFERS_FETCHED':
      return { ...state, offers: action.offers, isFetching: false };
    case 'FETCH_STARTED':
      return { ...state, isFetching: true };
    case 'FITER_OFFERS':
      return { ...state, filterParams: {...state.filterParams, [action.inputName]: action.value}};
    case 'INIT_FILTERS':
      return {
        ...state,
        filterParams: { ...state.filterParams, ...action.urlParams },
      };
    default:
      return state;
  }
};

export default fetchedOffers;
