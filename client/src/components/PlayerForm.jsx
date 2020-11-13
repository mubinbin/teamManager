import React, {useState} from 'react';
import {
    Paper,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button
} from '@material-ui/core';

const styles = {
    paper: {
        width: "20rem", padding: "1rem", margin: "auto",
    },
    input: {
        marginBottom: "1rem"
    },
    button: {
        width: "100%"
    }
}

const PlayerForm = props =>{

    const [player, setPlayer] = useState(props.initialState);

    const onChangeHandler = e =>{
        setPlayer({
            ...player,
            [e.target.name]: e.target.value
        });
    };

    // name frontend validator
    const nameValidator = e => {
        if(e.length < 2){
            return false;
        }
        return true;
    };

    const onSubmitHandler = e => {
        e.preventDefault();
        props.callBackOnSubmit(player);
    };

    return(
        <Paper elevation={3} style={styles.paper}>
        <form onSubmit={onSubmitHandler}>
        {   
            props.error.name && <p style={{color: "red"}}>{props.error.name.message}</p> 
        }
        {
            !nameValidator(player.name) && <p style={{color: "red"}}>Name is required and has to be at least 2 characters</p>
        }
            <FormControl variant="outlined" style={styles.input}>
                <InputLabel htmlFor="name">Name: </InputLabel>
                <OutlinedInput required type="text" label="Name" name="name" value={player.name} onChange={onChangeHandler}/>
            </FormControl>
            <FormControl variant="outlined" style={styles.input}>
                <InputLabel htmlFor="position">Preferred Position: </InputLabel>
                <OutlinedInput type="text" label="Preferred Position" name="position" value={player.position} onChange={onChangeHandler}/>
            </FormControl>
            {
                nameValidator(player.name)? 
                <Button type="submit" variant="contained" color="primary">
                {props.btn}
                </Button>
                :
                <Button variant="contained" color="secondary">
                {props.btn}
                </Button>
            }
        </form>
        </Paper>
        
    );
};

export default PlayerForm;