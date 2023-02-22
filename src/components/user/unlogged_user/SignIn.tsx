import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import React, { useContext } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import DialogActions from "@mui/material/DialogActions";
import {LOGIN} from "../../../server/Mutations/user.mutations";
import { useMutation } from '@apollo/client';
import { setCookie } from 'typescript-cookie';
import Characters from '../../../enum/char';
// import { BluetoothAudio, ForkRight, ReduceCapacity, WatchOutlined, WhatsApp, YoutubeSearchedFor } from '@mui/icons-material';
// import { setEmitFlags } from 'typescript';
import { UserContext, UserType } from 'src/context/UserContextProvider';

const SignIn: React.FC = () => {

    const userContext = useContext(UserContext);
    const [open, setModalState] = React.useState(false);
    const [formState, setFormState] = React.useState({
        user: String(Characters.EMPTY),
        password: String(Characters.EMPTY)
    });

    const [login, {data, loading, error}] = useMutation(LOGIN, {
        onCompleted: (data) => {
            console.log(data);
            setCookie('jwt-auth-token', data.login.access_token);
            const user: UserType = {
                id: data?.login.user.id,
                username: data.login.user.username,
                email: data.login.user.email,
            }
            userContext.setUser(user);
        }
    });

    return (
        <div>
            <Button variant="outlined" className="pull-right" onClick={() => {
                setModalState(true);
            }}>Sign In
            </Button>

            <Dialog open={open} onClose={() => {
                setModalState(true);
            }}>
                <form onSubmit={(event) => {
                    event.preventDefault();

                    login({
                        variables: {
                            request: {
                                username: formState.user,
                                password: formState.password
                            }
                        }
                    });
                }}>
                    <DialogTitle>Sign In</DialogTitle>
                    <DialogContent>
                        <br/>
                        <Grid container direction="row" justifyContent={"flex-start"} alignItems="flex-start"
                            rowSpacing={4}>
                            <Grid item lg={12}>
                                <TextField autoFocus
                                        id="user"
                                        label="Email or Username"
                                        type="text"
                                        value={formState.user}
                                        onChange={e => {
                                            setFormState({
                                                ...formState,
                                                user: e.target.value
                                            })
                                        }}
                                        fullWidth></TextField>
                            </Grid>
                            <Grid item lg={12}>
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
                            </Grid>
                        </Grid>
                    </DialogContent>

                    <DialogActions>
                        <Grid container direction="row" justifyContent={"right"}
                            rowSpacing={6}>
                            <Grid item lg={3}>
                                <Button variant="text" onClick={() => {
                                    setModalState(false);
                                }}>Cancel</Button>
                            </Grid>
                            <Grid item lg={3}>
                                <Button variant="contained" type="submit">Sign in</Button>
                            </Grid>
                        </Grid>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
}

export default SignIn;



