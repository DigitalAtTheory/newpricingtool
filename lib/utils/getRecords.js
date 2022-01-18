export const getRecords = (products) => {
  const records = products.map((product) => {
    if (product.wholesalePrice && product.volDiscountPrice) {
      return [
        { text: product.productName },
        { text: product.mbusa },
        { text: product.em },
        {
          text: `$${product.wholesalePrice}`,
          alignment: "right",
        },
        {
          text: `$${product.volDiscountPrice}`,
          alignment: "right",
        },
      ];
    } else if (product.wholesalePrice) {
      return [
        { text: product.productName },
        { text: product.mbusa },
        { text: product.em },
        {
          text: `$${product.wholesalePrice}`,
          alignment: "right",
        },
      ];
    } else if (product.volDiscountPrice) {
      return [
        { text: product.productName },
        { text: product.mbusa },
        { text: product.em },
        {
          text: `$${product.volDiscountPrice}`,
          alignment: "right",
        },
      ];
    } else {
      return [
        { text: product.productName },
        { text: product.mbusa },
        { text: product.em },
      ];
    }
  });

  return records;
};
