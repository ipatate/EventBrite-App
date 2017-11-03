// @flow
import { observable } from 'mobx';
import axios from 'axios';
import config from '../Config/config';

class DataStore {
  @observable events = [];
  @observable page = 1;
  loadEvents(location = null) {
    let url = `${config.search_url}?token=${config.token_api}&page=${this.page}`;
    if (location) {
      url = `${url}&location.address=${location}`;
    }
    return axios
      .get(url)
      .then(response => {
        const data = response.data;
        if (!data.events) {
          return [];
        }
        return data.events.map(elem => this.events.push(elem));
      })
      .catch(e => {
        console.log(e); // eslint-disable-line
        return [];
      });
  }
}

const store: Store = new DataStore();

export default store;
