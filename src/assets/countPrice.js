const countPrice = (price) => {
  const separates = Math.floor(price.length / 3);
  let currentSeparate = 0;
  let finalStr = "";

  if (separates === 0) {
    return price + " руб.";
  }

  while (currentSeparate <= separates) {
    if (currentSeparate === separates) {
      finalStr = price
        .slice(0, price.length - currentSeparate * 3)
        .concat(finalStr);
    } else {
      finalStr =
        " " +
        price
          .slice(
            -1 * (currentSeparate + 1) * 3,
            price.length - currentSeparate * 3
          )
          .concat(finalStr);
    }
    currentSeparate += 1;
  }

  return finalStr + " руб.";
};

export default countPrice;
