import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import PopUpBtn from './PopUpBtn';

const columns = [
    { id: 'name', label: 'Play Name', minWidth: 100 },
    { id: 'poistion', label: 'Prefferred Position', minWidth: 170 },
    { id: 'actions', label: 'Actions', minWidth: 170 },
];

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});

export default function StickyHeadTable(props) {
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    

    return (
        <Paper className={classes.root}>
        <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
            <TableHead>
                <TableRow>
                {columns.map((column) => (
                    <TableCell
                    key={column.id}
                    style={{ minWidth: column.minWidth }}
                    >
                    {column.label}
                    </TableCell>
                ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {props.data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((player) => {
                return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={player._id}>
                        <TableCell>{player.name}</TableCell>
                        <TableCell>{player.position}</TableCell>
                        <TableCell key={player.name}>
                            {
                                props.fromList &&
                                <PopUpBtn name={player.name} id={player._id} callBack={()=>props.callBack(player._id)}/>
                            }
                            {
                                !props.fromList && (
                                    <>
                                    <button className={player.playStatus[props.gameId-1] === "playing"? "btn btn-sm btn-success": "btn btn-sm btn-outline-dark"} value="playing" onClick={e=>props.findAndUpdateStatus(player._id, e.target.value)}>Playing</button> &nbsp;
                                    <button className={player.playStatus[props.gameId-1] === "notplaying"? "btn btn-sm btn-danger": "btn btn-sm btn-outline-dark"} value="notplaying" onClick={e=>props.findAndUpdateStatus(player._id, e.target.value)}>Not Playing</button> &nbsp; 
                                    <button className={player.playStatus[props.gameId-1] === "undecided"? "btn btn-sm btn-warning": "btn btn-sm btn-outline-dark"} value="undecided" onClick={e=>props.findAndUpdateStatus(player._id, e.target.value)}>Undecided</button>
                                    </>
                                )
                            }
                            
                        </TableCell>
                    </TableRow>
                );
                })}
            </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={props.data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        </Paper>
    );
}