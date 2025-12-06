// export const useLanguage = () => {

//   const { locale: i18nLocale } = useI18n();
//   const cookie = useCookie("locale");

//   const locale = useState("locale", () => cookie.value || "en");

//   const setLanguage = (newLocale: string) => {
//     locale.value = newLocale;
//     cookie.value = newLocale; // sets cookie for both SSR and client
//     i18nLocale.value = newLocale as typeof i18nLocale.value;
//   };

//   return { locale, setLanguage };
// };

export const useLanguage = () => {
  const { locale: i18nLocale } = useI18n();
  const config = useRuntimeConfig();

  const isProd = config.public.env === "production";
  // or use process.env.NODE_ENV if you prefer

  const cookie = useCookie("locale", {
    sameSite: "lax",
    secure: isProd, // ⬅ secure only in prod
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
  });

  const locale = useState("locale", () => cookie.value || "en");

  const setLanguage = (newLocale: string) => {
    locale.value = newLocale;
    cookie.value = newLocale;
    i18nLocale.value = newLocale as typeof i18nLocale.value;
  };

  return { locale, setLanguage };
};
