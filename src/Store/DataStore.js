// @flow
import { observable } from 'mobx';
import axios from 'axios';
import config from '../Config/config';

class DataStore {
  @observable events: Array<{}> = [];
  @observable page: number = 1;
  loadEvents(location: ?string = null) {
    let url = `${config.search_url}?token=${config.token_api}&page=${this.page}`;
    if (location) {
      url = `${url}&location.address=${location}`;
    }
    axios.get(url).then(response => {
      const data = response.data;
      if (!data.events) {
        return false;
      }
      return data.events.map(elem => this.events.push(elem));
    });
  }
}

const store = new DataStore();

export default store;
