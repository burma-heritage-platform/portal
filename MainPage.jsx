import { useState } from 'react';
import HeritageMap from './HeritageMap';
import HeritageCard from './HeritageCard';
import HeritageFilter from './HeritageFilter';

const heritageData = [
  {
    id: 1,
    name_en: 'Shwedagon Pagoda',
    name_mm: 'ရွှေတိဂုံဘုရား',
    type_en: 'Pagoda',
    type_mm: 'ဘုရား',
    region_en: 'Yangon',
    region_mm: 'ရန်ကုန်',
    lat: 16.7983,
    lng: 96.1496,
  },
  // Add more...
];

export default function MainPage() {
  const [language, setLanguage] = useState('en');
  const [filters, setFilters] = useState({ type: '' });

  const filteredData = heritageData.filter(site =>
    filters.type ? site.type_en.toLowerCase() === filters.type : true
  );

  return (
    <div className="p-4 max-w-5xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          {language === 'en' ? 'Burma Heritage Portal' : 'မြန်မာ့ယဉ်ကျေးမှုအမွေအနှစ်ပေါ်တယ်'}
        </h1>
        <button
          onClick={() => setLanguage(lang => (lang === 'en' ? 'mm' : 'en'))}
          className="text-sm px-3 py-1 rounded bg-gray-100 border"
        >
          {language === 'en' ? 'မြန်မာ' : 'English'}
        </button>
      </div>

      <HeritageFilter filters={filters} setFilters={setFilters} language={language} />
      <HeritageMap sites={filteredData} language={language} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredData.map(site => (
          <HeritageCard key={site.id} site={site} language={language} />
        ))}
      </div>
    </div>
  );
}
