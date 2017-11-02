import { observable } from 'mobx';

class DataStore {
  @observable test = 'lol';
  @observable events;
}

const store = new DataStore();

export default store;
