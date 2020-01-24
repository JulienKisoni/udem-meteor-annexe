import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const PlayerCollection = new Mongo.Collection('Players');
if(Meteor.isServer) {
    Meteor.publish('allPlayers', function() {
        return PlayerCollection.find();
    });
    Meteor.methods({
        'add-player': function(nom, age) {
            return PlayerCollection.insert({
                nom,
                age
            });
        },
        'remove-player': function(_id) {
            return PlayerCollection.remove({_id});
        },
        'update-player': function(_id, age) {
            return PlayerCollection.update({
                _id
            }, {
                $set: { age: age + 1}
            })
        }
    });
    // PlayerCollection.allow({
    //     insert: function() {
    //         return true;
    //     }
    // });
}

Player = PlayerCollection;

