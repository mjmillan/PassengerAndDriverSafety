import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { get_schools } from '../api/Api.js';

// Icons and dialog
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircle from '@material-ui/icons/AddCircle';
import Edit from '@material-ui/icons/Edit';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

// Add form
import AddSchoolForm from './AddSchoolForm.js';

const styles = {
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
};

class SchoolsAdmin extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            data: [], 
            isLoaded: false,
            entityID: -1,
            title: "Add School",
        }
    }

    componentDidMount() {
        get_schools().then(data => {
            this.setState({ data: data, isLoaded: true })
        });
    }
    handleOpen = (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        if(id){
            this.setState({ open: true, entityID:  id, title:"Edit School"});
        }else{
            this.setState({ open: true, title: "Add School"});
        }
    };

    handleClose = () => {
        this.setState({ open: false, entityID: -1 });
    };

    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.root}>
                <IconButton className={classes.button} onClick={this.handleOpen} aria-label="Delete" color="primary">
                    <AddCircle />
                </IconButton>
                <Table className={classes.table}>
                  <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="center">Address</TableCell>
                            <TableCell align="center">Options</TableCell> 
                             </TableRow>
                    </TableHead>
                    <TableBody>
                {this.state.isLoaded && this.state.data.map(n => {
                            return (
                                <TableRow key={n.id}>
                                    <TableCell component="th" scope="row">{n.name}</TableCell>
                                    <TableCell align="center">{n.address} {n.city} {n.state} {n.zipcode}</TableCell>
                                    <TableCell>
                                        <IconButton data-id={n.id} onClick={e => this.handleOpen(e)} aria-label="Edit" color="primary">
                                            <Edit data-id={n.id} />
                                        </IconButton>
                                        <IconButton aria-label="Delete" color="primary">
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            );
                })}
                    </TableBody>
                </Table>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                    >
                    <DialogTitle id="form-dialog-title">{this.state.title}</DialogTitle>
                    <DialogContent>
                        <AddSchoolForm entityID={this.state.entityID}/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                        Cancel
                        </Button>
                    </DialogActions>
                </Dialog>
            </Paper>
    
        )
    }
}

SchoolsAdmin.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SchoolsAdmin);