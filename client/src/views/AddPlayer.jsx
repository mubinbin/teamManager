import React, {useState} from 'react';
import PlayerForm from '../components/PlayerForm';
import {navigate} from '@reach/router';
import axios from "axios";


const initialState = {
    name: '',
    position: '',
    playStatus: [{game1: ""}, {game2:""}, {game3:""}]
};

const AddPlayer = props => {

    const [error, setError] = useState({})

    const createNewPlayer = player => {
        axios.post('http://localhost:8000/api/players/new', player)
        .then(res => {
            if(res.data.error){
                setError(res.data.error.errors);
            }else{
                navigate('/');
            }
        })
        .catch(err => console.log("Error: " + err));
    };


    return(
        <>
        <PlayerForm callBackOnSubmit={createNewPlayer} initialState={initialState} error={error} btn="Add Player"/>
        </>
    );
};

export default AddPlayer;