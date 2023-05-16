import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {SIGN_UP} from '@server/gql/user.gql';
import {useMutation} from '@apollo/client';
import {Alert} from "@mui/material";
import Grid from "@mui/material/Grid";
import {useContext} from "react";
import {UserContext} from "@context/UserContextProvider";

interface ISignUpModal {
    open: boolean,
    onDismiss: () => void
}

const SignUpModal: React.FC<ISignUpModal> = ({open, onDismiss}) => {
    const userContext = useContext(UserContext);
    const [formState, setFormState] = React.useState({
        username: '',
        email: '',
        password: ''
    });

    const [signup, {data, loading, error}] = useMutation(SIGN_UP, {
        onCompleted: (data) => {
            console.log(data);
            userContext.setAuth(data.signUp);
        }, onError: (error) => {
            console.error(error);
        }
    });

    if (loading) return (<label>'Submitting...'</label>);
    if (error) return (<label>`Submission error! ${error.message}`</label>);
    if (data) return (
        <Alert severity="success">
            This is a success alert — <strong>check it out!</strong>
        </Alert>
    )

    return (
        <Dialog open={open} onClose={onDismiss}>
            <form
                onSubmit={(event) => {
                    event.preventDefault();

                    signup({
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
                    <Grid container paddingTop={1} rowGap={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoFocus
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
                                } />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                autoFocus
                                id="email"
                                label="Email Address"
                                type="email"
                                fullWidth
                                value={formState.email}
                                onChange={(e) => setFormState({
                                    ...formState,
                                    email: e.target.value
                                })} />
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
                                       fullWidth />
                        </Grid>

                        <Grid item xs={8}>
                            {/*TO DO */}
                            {/*<label>Already have an account? Sign in</label>*/}
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button variant="text" onClick={onDismiss}>Cancel</Button>
                    <Button variant="contained" type="submit">Sign up</Button>
                </DialogActions>
            </form>
        </Dialog>
    );
}

export default SignUpModal