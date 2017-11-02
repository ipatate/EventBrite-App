// @flow
import { observable } from 'mobx';

class DataStore {
  @observable test: string = 'lol';
  @observable events: Array<{}>;
}

const store = new DataStore();

export default store;
