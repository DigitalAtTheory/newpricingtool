export const getPrices = (wholesale, volume, category, products) => {
  if (wholesale && volume) {
    return products.map((product) => {
      const wholesalePrice = getPrice(product[category], wholesale, category);
      const volDiscountPrice = getPrice(product[category], volume, category);
      return {
        ...product,
        wholesalePrice,
        volDiscountPrice,
      };
    });
  } else if (wholesale) {
    return products.map((product) => {
      const wholesalePrice = getPrice(product[category], wholesale, category);
      return {
        ...product,
        wholesalePrice,
      };
    });
  } else if (volume) {
    return products.map((product) => {
      const volDiscountPrice = getPrice(product[category], volume, category);
      return {
        ...product,
        volDiscountPrice,
      };
    });
  }
};

function getPrice(price, input, cat) {
  const percent = input / 100;

  if (percent !== 0 && !isNaN(percent)) {
    const newPercent = price * percent;
    const roundedPercent = newPercent.toFixed(2);
    const getFinalPrice = (x) => {
      if (x === "dnet") {
        return (Number(price) + Number(roundedPercent)).toFixed(2);
      } else if (x === "msrp") {
        return (Number(price) - Number(roundedPercent)).toFixed(2);
      }
    };

    const finalPrice = getFinalPrice(cat);
    return finalPrice;
  }
}
