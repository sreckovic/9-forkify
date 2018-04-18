import { params } from '../../../config';
import axios from 'axios';

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    const proxy = params.proxy;
    const key = params.key;
    try {
      const res = await axios(
        `${proxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`
      );
      this.result = res.data.recipes;
      // console.log(this.result);
    } catch (err) {
      console.log(err);
    }
  }
}
