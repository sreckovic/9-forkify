import Search from './models/Search';
import Recipe from './models/Recipe';
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base';

// Global state of the app
const state = {};

// Search Controler
const controlSearch = async () => {
  // Get query from the view
  const query = searchView.getInput();

  if (query) {
    // Create new search object and add it to state
    state.search = new Search(query);

    // Prepare UI for results
    searchView.clearInput();
    searchView.clearResults();
    renderLoader(elements.searchRes);

    // Search for recipes
    await state.search.getResults();

    // Render results on UI
    clearLoader();
    searchView.renderResults(state.search.result);
  }
};

// Search event listener
elements.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});

elements.searchResPages.addEventListener('click', e => {
  e.preventDefault();
  const btn = e.target.closest('.btn-inline');
  if (btn) {
    const goToPage = parseInt(btn.dataset.goto, 10);
    searchView.clearResults();
    searchView.renderResults(state.search.result, goToPage);
  }
});

// Recipe Controler
const controlRecipe = async () => {
  // Get id from URL
  const id = window.location.hash.replace('#', '');

  if (id) {
    // Prepare UI for changes
    // Create new recipe object
    state.recipe = new Recipe(id);
    // Get recipe data
    await state.recipe.getRecipe();
    // Calculate servings and time
    state.recipe.calcTime();
    state.recipe.calcServings();
    // Render recipe
    console.log(state.recipe);
  }
};

// window.addEventListener('hashchange', controlRecipe);
// window.addEventListener('load', controlRecipe);

['hashchange', 'load'].forEach(event =>
  window.addEventListener(event, controlRecipe)
);
