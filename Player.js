import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const PlayerCollection = new Mongo.Collection('Players');
if(Meteor.isServer) {
    Meteor.publish('allPlayers', function() {
        return PlayerCollection.find();
    });
    Meteor.methods({
        'add-player': function() {
            return PlayerCollection.insert({
                nom: 'Marc',
                age: '19'
            });
        }
    });
    // PlayerCollection.allow({
    //     insert: function() {
    //         return true;
    //     }
    // });
}

Player = PlayerCollection;

