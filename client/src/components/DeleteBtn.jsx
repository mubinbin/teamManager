import React from "react";
import axios from "axios";

export default props =>{

    const onClickHandler = e => {
        e.preventDefault();
        axios.delete("http://localhost:8000/api/players/"+props.id)
        .then(res => {
            console.log(res);
            props.callBack();
        })
        .catch(err => console.log("Error: " + err));
    };

    return(

        <button className="btn btn-danger btn-sm" onClick={onClickHandler}>Delete</button>
    );
};