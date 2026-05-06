type Mods = Record<string, boolean | string | undefined>;

export const useCN = (baseClass = "") => {
  const getCN = (
    elem?: string,
    mods: Mods = {},
    utilClasses: string[] = []
  ) => {
    const base = baseClass;

    const block = elem ? `${base}__${elem}` : base;

    const modClasses = Object.entries(mods)
      .filter(([, value]) => Boolean(value))
      .map(([key]) => `${base}--${key}`);

    return [block, ...modClasses, ...utilClasses]
      .filter(Boolean)
      .join(" ");
  };

  return { getCN };
};