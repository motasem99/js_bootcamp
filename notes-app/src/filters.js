const filters = {
  search: '',
  sortBy: 'byEdited',
};

const getFilters = () => filters;

const setFilter = (updates) => {
  if (typeof updates.searchText === 'string') {
    filters.searchText = updates.searchText;
  }
  if (typeof updates.sortBy === 'string') {
    filters.sortBy = updates.sortBy;
  }
};

export { getFilters, setFilter };
