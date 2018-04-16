import Search from './models/Search';

// Global state of the app
const state = {};

const controlSearch = async () => {
  // Get query from the view
  const query = 'pizza';

  if (query) {
    // Create new search object and add it to state
    state.search = new Search(query);

    // Prepare UI for resultes

    // Search for recipes
    await state.search.getResults();

    // Render results on UI
    console.log(state.search.result);
  }
};

document.querySelector('.search').addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});
