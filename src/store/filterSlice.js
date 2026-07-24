import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    category: 'all',
    brand: 'all',
    priceMin: 0,
    priceMax: 2000,
    rating: 0,
    sortBy: 'default',
    searchQuery: '',
    viewMode: 'grid', // 'grid' | 'list'
  },
  reducers: {
    setCategory(state, action)   { state.category = action.payload; },
    setBrand(state, action)       { state.brand = action.payload; },
    setPriceRange(state, action)  {
      state.priceMin = action.payload.min;
      state.priceMax = action.payload.max;
    },
    setRating(state, action)      { state.rating = action.payload; },
    setSortBy(state, action)      { state.sortBy = action.payload; },
    setSearchQuery(state, action) { state.searchQuery = action.payload; },
    setViewMode(state, action)    { state.viewMode = action.payload; },
    resetFilters(state) {
      state.category = 'all';
      state.brand = 'all';
      state.priceMin = 0;
      state.priceMax = 2000;
      state.rating = 0;
      state.sortBy = 'default';
      state.searchQuery = '';
    },
  },
});

export const {
  setCategory, setBrand, setPriceRange, setRating,
  setSortBy, setSearchQuery, setViewMode, resetFilters,
} = filterSlice.actions;
export default filterSlice.reducer;
