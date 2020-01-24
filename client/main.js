import { Session } from 'meteor/session';
import { Tracker } from 'meteor/tracker';
import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';

import { PlayerCollection } from '../Player';
import App from '../import/components/App';

import './main.html';

Meteor.startup(()=> {
  console.log('DOM est pret');
  Tracker.autorun(() => {
    console.log('autorun called');
    let players = PlayerCollection.find().fetch();
    Meteor.subscribe('allPlayers', function() {
      players = PlayerCollection.find().fetch();
      console.log('Players ready !');
      ReactDOM.render(<App players={players} />, document.getElementById('root'));
    });
  });
});



Session.set('projet', 'Angular');
Session.set('number', 1);


