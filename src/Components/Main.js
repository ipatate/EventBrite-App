import React from 'react';
import { observer, inject } from 'mobx-react';

@inject('dataStore')
@observer
export class Main extends React.Component {
  render() {
    return <div>{this.props.dataStore.test}</div>;
  }
}

export default Main;
