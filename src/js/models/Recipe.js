import { params } from '../../../config';
import axios from 'axios';

export default class Recipe {
  constructor(id) {
    this.id = id;
  }

  async getRecipe() {
    try {
      const res = await axios(
        `${params.proxy}http://food2fork.com/api/get?key=${params.key}&rId=${
          this.id
        }`
      );
      this.title = res.data.recipe.title;
      this.author = res.data.recipe.publisher;
      this.img = res.data.recipe.img_url;
      this.url = res.data.recipe.source_url;
      this.ingredients = res.data.recipe.ingredients;
    } catch (err) {
      console.log(err);
    }
  }

  calcTime() {
    // const numIng = this.ingredients.length;
    const periods = Math.ceil(this.ingredients.length / 3);
    this.time = periods * 15;
  }

  calcServings() {
    this.servings = 4;
  }
}
