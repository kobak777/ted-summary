import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useCN } from "@/shared/lib/useCN/useCN";
import { Button } from "@/shared/ui/button";
import "../styles.pcss";

const languages = [
  { code: "ru", labelKey: "language.ru" },
  { code: "en", labelKey: "language.en" },
];

export const LanguageSwitcher = () => {
  const { getCN } = useCN("languageSwitcher");
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);

  const currentLangLabel = t(`language.${i18n.language}`);

  const handleSelect = async (langCode: string) => {
    await i18n.changeLanguage(langCode);
    localStorage.setItem("i18nextLng", langCode);
    setOpen(false);
  };

  return (
    <div className={getCN()}>
      <Button
        className={getCN("btn", {}, ["button"])}
        onClick={() => setOpen((prev) => !prev)}
      >
        {currentLangLabel}
      </Button>

      {open && (
        <div className={getCN("dropdown")}>
          {languages
            .filter((l) => l.code !== i18n.language)
            .map((lang) => (
              <Button
                key={lang.code}
                className={getCN("option")}
                onClick={() => handleSelect(lang.code)}
              >
                {t(lang.labelKey)}
              </Button>
            ))}
        </div>
      )}
    </div>
  );
};
