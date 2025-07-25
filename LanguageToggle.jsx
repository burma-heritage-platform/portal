import { useTranslation } from 'react-i18next';
const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const toggleLanguage = () => i18n.changeLanguage(i18n.language === 'en' ? 'mm' : 'en');
  return <button onClick={toggleLanguage}>Toggle Language</button>;
};
export default LanguageToggle;