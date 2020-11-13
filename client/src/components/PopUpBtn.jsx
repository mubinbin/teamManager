import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteBtn from './DeleteBtn';

export default function AlertDialog(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
        <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
            Delete
        </Button>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">You are deleting {props.name}!</DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
                Are you sure?
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <button onClick={handleClose} className="btn btn-info btn-sm" autoFocus>
                Cancel
            </button>
            <DeleteBtn id={props.id} callBack={props.callBack}>
                Delete
            </DeleteBtn>
            </DialogActions>
        </Dialog>
        </div>
    );
};