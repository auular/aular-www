export const useSlug = () => {
  const getSeparator = (index) => {
    return index === 0 ? "" : "-";
  };

  const buildSlugByName = (name) => {
    return name
      .toLowerCase()
      .split(" ")
      ?.reduce(
        (acc, value, index) => acc + `${getSeparator(index)}` + value,
        ""
      );
  };

  return { buildSlugByName };
};
