// @flow
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import ListElement from './ListElement';
@inject('dataStore')
@observer
export class List extends Component<{
  dataStore: Store
}> {
  componentDidMount() {
    this.props.dataStore.loadEvents('annecy');
  }
  render() {
    return (
      <ul className="list-group">
        {this.props.dataStore.events.map(event => <ListElement key={event.id} event={event} />)}
      </ul>
    );
  }
}

export default List;
