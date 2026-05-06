import { useState } from "react";
import { useCN } from "@/shared/lib/useCN/useCN";
import { Button } from "@/shared/ui/button";
import "../styles.pcss";
const languages = ["RU", "EN"];

export const LanguageSwitcher = () => {
  const { getCN } = useCN("languageSwitcher");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("RU");

  const handleSelect = (lang: string) => {
    setActive(lang);
    setOpen(false);
  };

  return (
    <div className={getCN()}>
      <Button
        className={getCN("btn")}
        onClick={() => setOpen((prev) => !prev)}
      >
        {active}
      </Button>

      {open && (
        <div className={getCN("dropdown")}>
          {languages
            .filter((l) => l !== active)
            .map((lang) => (
              <Button
                key={lang}
                className={getCN("option")}
                onClick={() => handleSelect(lang)}
              >
                {lang}
              </Button>
            ))}
        </div>
      )}
    </div>
  );
};
