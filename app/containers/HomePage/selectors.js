export const getFilteredOffers = (offers, filterParams) => {
  let { priceFrom, priceTo, title } = filterParams

  priceFrom = parseInt(priceFrom);
  priceTo = parseInt(priceTo);
  title = title.toLowerCase();

  return offers.filter(offer => {
    const { title: offerTitle, price } = offer;

    const arg1 = title == "" || offerTitle.toLowerCase().includes(title);
    const arg2 = isNaN(priceFrom) || price >= priceFrom;
    const arg3 = isNaN(priceTo) || price <= priceTo;

    return (
      arg1 && arg2 && arg3
    );
  });
}
