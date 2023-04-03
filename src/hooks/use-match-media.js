import { useState, useLayoutEffect } from "react";

const queries = [
  "(max-width: 766px)",
  "(max-width:1100px)",
  "(min-width:1101px)",
];

export const useMatchMedia = () => {
  const mediaQueryLists = queries.map((query) => matchMedia(query));

  const getMatches = () => mediaQueryLists.map((item) => item.matches);

  const [matches, setMatches] = useState(getMatches);

  useLayoutEffect(() => {
    const cbHandler = () => setMatches(getMatches);

    mediaQueryLists.map((mql) => mql.addEventListener("change", cbHandler));

    return () =>
      mediaQueryLists.map((mql) =>
        mql.removeEventListener("change", cbHandler)
      );
  });

  return ["isMobile", "isTablet", "isDesktop"].reduce(
    (acc, current, index) => ({ ...acc, [current]: matches[index] }),
    {}
  );
};
