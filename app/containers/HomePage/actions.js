import { BACKEND_URL } from 'consts'

export const fetchStarted = () => ({
  type: 'FETCH_STARTED',
});

export const offersFetched = offers => ({
  type: 'OFFERS_FETCHED',
  offers,
});

export const filterOffers = (value, inputName) => ({
  type: 'FITER_OFFERS',
  value,
  inputName,
})

export const initFilters = (urlParams) => ({
  type: 'INIT_FILTERS',
  urlParams,
});

export const fetchOffers = () => dispatch => {
  dispatch(fetchStarted());
  fetch(`${BACKEND_URL}/advertisements`)
    .then(res => res.json())
    .then(json => dispatch(offersFetched(json.advertisements)));
};
