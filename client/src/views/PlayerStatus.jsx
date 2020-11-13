import React, {useState, useEffect} from 'react';
import StickyHeadTable from '../components/StickyHeadTable';
import {Link} from "@reach/router";
import axios from "axios";

const PlayerStatus = props => {

    const [players, setPlayers] = useState([]);
    const [oneplayer, setOneplayer] = useState({})
    const [loaded, setLoaded] = useState(false);

    const fromList = false;

    useEffect(()=>{
        axios.get("http://localhost:8000/api/players")
        .then(res => {
            setPlayers(res.data);
            setLoaded(true);
        })
        .catch(err => console.log(err));
        
    },[loaded]);

    const findAndUpdateStatus = (id, status) => {
        axios.get("http://localhost:8000/api/players/"+id)
        .then(res=>{
            // res.data.playStatus[props.id-1] = status;
            res.data.playStatus = [...res.data.playStatus.slice(0, props.id-1), status, ...res.data.playStatus.slice(props.id+1)];
            console.log(res.data)
            axios.put("http://localhost:8000/api/players/"+id, res.data)
            .then(res => {
                setOneplayer(res.data);
                setLoaded(!loaded)
            })
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err));
        console.log(oneplayer)
    }


    return(
        <>
        <Link to={'/status/game/'+1}>Game 1</Link> |
        <Link to={'/status/game/'+2}> Game 2</Link> |
        <Link to={'/status/game/'+3}> Game 3</Link>
        <h1>Player Status - Game {props.id}</h1>

        <StickyHeadTable findAndUpdateStatus={findAndUpdateStatus}  gameId={props.id} fromList={fromList} data={players} oneplayer={oneplayer}/>
        </>
    );

};

export default PlayerStatus;