const HeritageFilter = ({ filters, setFilters, language }) => {
  return (
    <div className="mb-4 flex gap-4 flex-wrap">
      <select
        className="border p-2 rounded"
        value={filters.type}
        onChange={e => setFilters(prev => ({ ...prev, type: e.target.value }))}
      >
        <option value="">{language === 'en' ? 'All Types' : 'အမျိုးအစားအားလုံး'}</option>
        <option value="pagoda">{language === 'en' ? 'Pagoda' : 'ဘုရား'}</option>
        <option value="temple">{language === 'en' ? 'Temple' : 'ကျောင်း'}</option>
        <option value="monastery">{language === 'en' ? 'Monastery' : 'ဆေးကျောင်း'}</option>
      </select>
    </div>
  );
};

export default HeritageFilter;
