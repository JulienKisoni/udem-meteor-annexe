import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session';
import { Tracker } from 'meteor/tracker';
import { Meteor } from 'meteor/meteor';

import { PlayerCollection } from '../Player';

import './main.html';

Meteor.subscribe('allPlayers');

Session.set('projet', 'Angular');
Session.set('number', 1);

Tracker.autorun(() => {
  console.log('Numbre est = ', Session.get('number'));
});

Template.monBody.helpers({
  nom: 'Jacques',
  age: 54,
  projet: Session.get('projet'),
  nombre: Session.get('number')
});

Template.monBody.events({
  'click': function() {
    // console.log('click réussi sur monBody');
  },
  'click .btn-alert': function() {
    alert('Click Réussi sur Alert');
  },
  'click .btn-session': function() {
    Session.set('number', Session.get('number') + 1);
  },
  'click .btn-player': function() {
    Meteor.call('add-player', (err, res)=> {
      if(err) {
        console.log('error', err);
      } else {
        console.log('resultat', res);
      }
    });
  }
});
