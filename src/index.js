import $ from 'jquery';
import api from './api';
import 'normalize.css';
import './index.css';

import shoppingList from './shopping-list';

fetch('https://thinkful-list-api.herokuapp.com/ei-student/items')
  .then(res => res.json())
  .then(data => console.log(data));

const main = function () {
  api.getItems()
    .then(res => res.json())
    .then(res => console.log(res));
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
