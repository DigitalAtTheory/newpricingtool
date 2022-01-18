import { getHeaders, getPrices } from ".";

export const getNewProducts = (
  products,
  dnetWholesale,
  dnetVolume,
  msrpWholesale,
  msrpVolume
) => {
  let newProducts = products;
  if (dnetWholesale || dnetVolume) {
    getHeaders(dnetWholesale, dnetVolume);
    newProducts = getPrices(dnetWholesale, dnetVolume, "dnet", products);
  } else if (msrpWholesale || msrpVolume) {
    getHeaders(msrpWholesale, msrpVolume);
    newProducts = getPrices(msrpWholesale, msrpVolume, "msrp", products);
  }
  return newProducts;
};
