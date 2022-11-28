export const useBooleanValue = () => {
  const getContentByBoolean = (obj, options, group) => {
    const array = Object.entries(obj);
    const booleanValues = array.filter(
      ([key, value]) =>
        typeof value === "boolean" && value === true && key.includes(group)
    );

    const contents = [];
    const arrayBoolean = booleanValues.map((value) => value[0]);

    arrayBoolean.map((value) => {
      const [option] = options.filter((item) => item.slug === value);
      contents.push({ slug: value, content: option?.content });
    });

    return contents;
  };

  const getBooleans = (obj) => {
    const array = Object.entries(obj);
    return Object.fromEntries(
      array.filter(
        ([key, value]) => typeof value === "boolean" && value === true
      )
    );
  };

  return {
    getContentByBoolean,
    getBooleans,
  };
};
