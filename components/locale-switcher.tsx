"use client";
import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";

import ReactFlagsSelect from "react-flags-select";

// Map locale codes to country codes
const localeToCountry: Record<string, string> = {
  ar: "AE",
  en: "US",
  fr: "FR",
  es: "ES",
  de: "DE",
  ru: "RU",
  pt: "PT",
  it: "IT",
  "zh-hans": "CN",
  ja: "JP",
  hi: "IN",
};

// Map country codes to locale codes
const countryToLocale: Record<string, string> = {
  AE: "ar",
  US: "en",
  FR: "fr",
  ES: "es",
  DE: "de",
  RU: "ru",
  PT: "pt",
  IT: "it",
  CN: "zh-hans",
  JP: "ja",
  IN: "hi",
};

const LocaleSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  // Get the current country code based on locale
  const selectedCountry = localeToCountry[locale] || "AE";

  const handleChange = (countryCode: string) => {
    const newLocale = countryToLocale[countryCode] || "ar";
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <ReactFlagsSelect
      selectButtonClassName="!text-white"
      searchPlaceholder="Search for a language"
      selected={selectedCountry}
      selectedSize={20}
      optionsSize={20}
      onSelect={(code) => handleChange(code)}
      countries={["AE", "US", "FR", "ES", "DE", "RU", "PT", "IT", "CN", "JP", "IN"]}
      customLabels={{
        AE: "العربية",
        US: "English",
        FR: "Français",
        ES: "Español",
        DE: "Deutsch",
        RU: "Русский",
        PT: "Português",
        IT: "Italiano",
        CN: "简体中文",
        JP: "日本語",
        IN: "हिन्दी",
      }}
      showSelectedLabel={true}
      showOptionLabel={true}
    />
  );
};

export default LocaleSwitcher;
