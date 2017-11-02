import React from 'react';
import moment from 'moment';
import { observer, inject } from 'mobx-react';

@inject('dataStore')
@observer
export class Main extends React.Component {
  componentDidMount() {
    this.props.dataStore.loadEvents('annecy');
  }
  render() {
    function createMarkup(html) {
      return { __html: html };
    }
    return (
      <ul>
        {this.props.dataStore.events.map(event => (
          <li key={event.id}>
            <h3>{event.name.text}</h3>
            <b>{moment(event.start.local).format('DD MM YYYY, H:mm:ss')}</b>
            <p dangerouslySetInnerHTML={createMarkup(event.description.html)} />
          </li>
        ))}
      </ul>
    );
  }
}

export default Main;
