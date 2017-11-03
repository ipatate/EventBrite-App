// @flow
import React from 'react';
import { format } from 'date-fns';

const ListElement = (props: { event: EventElement }) => (
  <li className="list-group-item">
    <h3>{props.event.name.text}</h3>
    <b>{format(new Date(props.event.start.local), 'DD/MM/YYYY H:mm:ss')}</b>
    <p>{props.event.description.text.substr(0, 300)}...</p>
  </li>
);

export default ListElement;
