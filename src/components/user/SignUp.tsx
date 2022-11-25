import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {SIGN_UP} from '../../server/Mutations/user.mutations';
import { gql, useMutation } from '@apollo/client';
import {FC} from 'react';


const SignUp: FC = () => {

    const [open, setOpen] = React.useState(false);

    let input: any;
    const [addTodo, { data, loading, error }] = useMutation(SIGN_UP);

    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button variant="outlined" className="pull-right" onClick={handleClickOpen}>
                Sign up
            </Button>
            <Dialog open={open} onClose={handleClose}>

                <form
                    onSubmit={e => {
                        e.preventDefault();
                        addTodo({ variables: { type: input.value } });
                        input.value = '';
                    }}
                >
                    <DialogTitle>
                        Sign up
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Email address
                        </DialogContentText>
                        <TextField
                            ref={node => {
                                input = node;
                            }}
                            autoFocus
                            margin="dense"
                            id="email"
                            label="Email Address"
                            type="email"
                            fullWidth
                            variant="standard"></TextField>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type="submit">Sign up</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    );
}

export default SignUp