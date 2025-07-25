import React from 'react';
import { useTranslation } from 'react-i18next';
import Home from './pages/Home';

function App() {
  const { t } = useTranslation();
  return <div><h1>{t('welcome')}</h1><Home /></div>;
}

export default App;