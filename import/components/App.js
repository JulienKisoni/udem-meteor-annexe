import React from 'react';
import { Meteor } from 'meteor/meteor';

import AddPlayer from './AddPlayer';

const App = (props) => {
    const handleDelete = _id => {
        Meteor.call('remove-player', _id, (err, res) => {
            if(err) {
                console.log('error', err);
            } else {
                console.log('success', res);
            }
        });
    }
    const handleUpdate = (_id, age) => {
        Meteor.call('update-player', _id, age, (err, res) => {
            if(err) {
                console.log('error', err);
            } else {
                console.log('success', res);
            }
        });
    }

    const renderPlayers = () => {
        return props.players.map(({_id, nom, age}) => {
            return (
                <li key={_id}>
                    <div>{nom} / {age}
                        <button onClick={()=>handleDelete(_id)}>
                            Supprimer
                        </button>
                        <button onClick={()=>handleUpdate(_id, age)}>
                            Modifier
                        </button>
                    </div>
                </li>
            )
        });
    }
    return (
        <div>
            Composant App
            <AddPlayer />
            <ul>
                {renderPlayers()}
            </ul>
        </div>
    )
}

export default App;