// export const useLanguage = () => {
//   const { locale: i18nLocale } = useI18n();
//   const getLanguage = () => {
//     if (import.meta.client) {
//       return localStorage.getItem("locale") || "en";
//     }
//   };

//   const locale = useState("locale", () => getLanguage());
//   const setLanguage = (newLocale: string) => {
//     locale.value = newLocale;
//     if (import.meta.client) {
//       localStorage.setItem("locale", newLocale);
//     }
//     i18nLocale.value = newLocale as typeof i18nLocale.value;
//   };

//   return { locale, setLanguage, getLanguage };
// };
export const useLanguage = () => {
  const { locale: i18nLocale } = useI18n();
  const cookie = useCookie("locale");

  const locale = useState("locale", () => cookie.value || "en");

  const setLanguage = (newLocale: string) => {
    locale.value = newLocale;
    cookie.value = newLocale; // sets cookie for both SSR and client
    i18nLocale.value = newLocale as typeof i18nLocale.value;
  };

  return { locale, setLanguage };
};
