const HeritageCard = ({ site, language }) => (
  <div className="bg-white shadow-md rounded-xl p-4 border border-gray-200">
    <h3 className="text-lg font-semibold">
      {language === 'en' ? site.name_en : site.name_mm}
    </h3>
    <p className="text-sm text-gray-600">
      {language === 'en' ? site.type_en : site.type_mm}
    </p>
    <p className="mt-2 text-xs text-gray-500">
      {language === 'en' ? site.region_en : site.region_mm}
    </p>
  </div>
);

export default HeritageCard;
