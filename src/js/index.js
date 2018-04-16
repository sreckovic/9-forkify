import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements } from './views/base';

// Global state of the app
const state = {};

const controlSearch = async () => {
  // Get query from the view
  const query = searchView.getInput();

  if (query) {
    // Create new search object and add it to state
    state.search = new Search(query);

    // Prepare UI for resultes

    // Search for recipes
    await state.search.getResults();

    // Render results on UI
    console.log(state.search.result);
    searchView.renderResults(state.search.result);
  }
};

elements.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});
