
const translations = {
  en: { title: "Burma Heritage Portal" },
  mm: { title: "မြန်မာအမွေအနှစ်ပေါ်တယ်" }
};
document.getElementById('languageSwitcher').addEventListener('change', (e) => {
  const lang = e.target.value;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = translations[lang][key] || key;
  });
});
