import { useCN } from "@/shared/lib/useCN/useCN";
import { LanguageSwitcher } from "@/features/languageSwitcher";

import "../styles.pcss";

export const Header = () => {
  const { getCN } = useCN("header");

  return (
    <header className={getCN()}>
      <div className={getCN("left")}>
        <a href="/" className={getCN("logo")}>
          TED Summary
        </a>
      </div>

      <div className={getCN("right")}>
        <LanguageSwitcher />
      </div>
    </header>
  );
};