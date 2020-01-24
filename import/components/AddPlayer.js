import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';

const AddPlayer = (props) => {
    const [nom, setNom] = useState('');
    const [age, setAge] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        Meteor.call('add-player', nom, age, (err, res) => {
            if(err) {
                console.log('error', err);
            } else {
                console.log('res', res);
            }
        });
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
                placeholder="nom"
                value={nom}
                onChange={(e)=> setNom(e.target.value)}
            />
            <input 
                placeholder="age"
                value={age}
                onChange={(e)=> setAge(e.target.value)}
            />
            <button value="submit">Créer Joueur</button>
        </form>
    )
}

export default AddPlayer;