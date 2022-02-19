import React from 'react';
import {ToDo} from './components/ToDo/ToDo';

export const App = () => {

  const state1 =  [
    {'title': 'List1Item1', 'checked': false},
    {'title': 'List1Item2', 'checked': false},
    {'title': 'List1Item3', 'checked': true},
  ];

  const state2 =  [
    {'title': 'List2Item1', 'checked': true},
    {'title': 'List2Item2', 'checked': false},
    {'title': 'List2Item3', 'checked': false},
  ];

  return (
    <div>
      <ToDo title="ToDo1" state={state1}/>
      <ToDo title="ToDo2" state={state2}/>
    </div>
  );
}