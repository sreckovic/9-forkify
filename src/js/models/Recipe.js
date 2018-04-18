import { params } from '../../../config';
import axios from 'axios';

export default class Recipe {
  constructor(id) {
    this.id = id;
  }

  async getRecipe() {
    try {
      const res = await axios(
        `${proxy}http://food2fork.com/api/get?key=${params.key}&rId=${this.id}`
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }
}
