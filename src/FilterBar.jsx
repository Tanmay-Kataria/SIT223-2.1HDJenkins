const FilterBar = ({ filterTitle, setFilterTitle, filterTag, setFilterTag, filterDate, setFilterDate }) => {
    return (
      <div className="flex flex-wrap justify-between p-4 bg-gray-50 mb-4 shadow-md rounded-lg">
        <input
          type="text"
          value={filterTitle}
          onChange={(e) => setFilterTitle(e.target.value)}
          placeholder="Filter by title"
          className="p-2 mb-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          value={filterTag}
          onChange={(e) => setFilterTag(e.target.value)}
          placeholder="Filter by tag"
          className="p-2 mb-2 border border-gray-300 rounded"
        />
        <input
          type="date"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
          className="p-2 mb-2 border border-gray-300 rounded"
        />
      </div>
    );
  };
  
  export default FilterBar;
  