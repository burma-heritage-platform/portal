import React from 'react';
import { useTranslation } from 'react-i18next';
import Home from './pages/Home';
import HeritageList from './components/HeritageList';

function App() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">{t('welcome')}</h1>
      
      {/* Home page component */}
      <Home />

      {/* Heritage List Map + Card + Filter */}
      <HeritageList />
    </div>
  );
}

export default App;
