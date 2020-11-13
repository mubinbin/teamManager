import React, {useState, useEffect} from 'react';
import axios from 'axios';
import StickyHeadTable from '../components/StickyHeadTable';

const PlayerList = props => {

    const [players, setPlayers] = useState([]);
    const fromList = true;

    // get all
    useEffect(()=>{
        axios.get("http://localhost:8000/api/players")
        .then(res => {
            setPlayers(res.data);
        })
        .catch(err => console.log("Error: " + err));
        return () => setPlayers([]);
    },[]);

    // delete
    const removeDom = id => {
        setPlayers(players.filter(player => player._id !== id));
    }

    return(
        <>
        <StickyHeadTable fromList={fromList} data={players} callBack={removeDom}/>
        </>
    );

};

export default PlayerList;