const countPrice = (price) => {
  let integerPrice = price;
  let fractionalNum = "";
  if (/\./.test(price)) {
    const dotPosition = price.search(/\./);
    integerPrice = price.slice(0, dotPosition);
    fractionalNum = price.slice(dotPosition, price.length);
  }
  const separates = Math.floor(integerPrice.length / 3);
  let currentSeparate = 0;
  let finalStr = "";

  if (separates === 0) {
    return price + " руб.";
  }

  while (currentSeparate <= separates) {
    if (currentSeparate === separates) {
      finalStr = integerPrice
        .slice(0, integerPrice.length - currentSeparate * 3)
        .concat(finalStr);
    } else {
      finalStr =
        " " +
        integerPrice
          .slice(
            -1 * (currentSeparate + 1) * 3,
            integerPrice.length - currentSeparate * 3
          )
          .concat(finalStr);
    }
    currentSeparate += 1;
  }

  return finalStr + fractionalNum + " руб.";
};

export default countPrice;
