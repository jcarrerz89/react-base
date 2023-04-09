import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { SIGN_UP } from '../../../../server/gql/user.gql';
import { useMutation } from '@apollo/client';
import { Alert } from "@mui/material";
import Grid from "@mui/material/Grid";

const SignUp: React.FC = () => {
    const [open, setOpen] = React.useState(false);
    const [formState, setFormState] = React.useState({
        username: '',
        email: '',
        password: ''
    });

    const [signUp, { data, loading, error }] = useMutation(SIGN_UP);

    if (loading) return (<label>'Submitting...'</label>);
    if (error) return (<label>`Submission error! ${error.message}`</label>);
    if (data) return (
        <Alert severity="success">
            This is a success alert — <strong>check it out!</strong>
        </Alert>
    )

    return (
        <div>
            <Button
                variant="outlined"
                className="pull-right"
                sx={{ my: 2, color: 'white', display: 'block' }}
                onClick={() => {
                    setOpen(true)
                }}>
                Sign up
            </Button>
            <Dialog open={open} onClose={() => {
                setOpen(false)
            }}>
                <form
                    onSubmit={(event) => {
                        event.preventDefault();

                        signUp({
                            variables: {
                                username: formState.username,
                                email: formState.email,
                                password: formState.password
                            }
                        })
                    }}>
                    <DialogTitle>
                        Sign up
                    </DialogTitle>
                    <DialogContent>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    autoFocus
                                    // variant="standard"
                                    id="username"
                                    label="Username"
                                    type="text"
                                    value={formState.username}
                                    fullWidth
                                    onChange={(e) =>
                                        setFormState({
                                            ...formState,
                                            username: e.target.value
                                        })
                                    }></TextField>
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    autoFocus
                                    // variant="standard"
                                    id="email"
                                    label="Email Address"
                                    type="email"
                                    fullWidth
                                    value={formState.email}
                                    onChange={(e) => setFormState({
                                        ...formState,
                                        email: e.target.value
                                    })}></TextField>
                            </Grid>

                            <Grid item xs={12}>
                                <TextField autoFocus
                                    id="user"
                                    label="Password"
                                    type="password"
                                    value={formState.password}
                                    onChange={e => {
                                        setFormState({
                                            ...formState,
                                            password: e.target.value
                                        })
                                    }}
                                    fullWidth></TextField>
                                <br />
                            </Grid>

                            <Grid item xs={8}>
                                <label>Already have an account? Sign in</label>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="text" onClick={() => {
                            setOpen(false)
                        }}>Cancel</Button>
                        <Button variant="contained" type="submit">Sign up</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
}

export default SignUp