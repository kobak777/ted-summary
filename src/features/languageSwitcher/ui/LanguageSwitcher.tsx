import { useCN } from "@/shared/lib/useCN/useCN";

export const LanguageSwitcher = () => {
  const { getCN } = useCN("languageSwitcher");

  return (
    <div className={getCN()}>
      <button className={getCN("btn")}>RU</button>
      <button className={getCN("btn")}>EN</button>
    </div>
  );
};