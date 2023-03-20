import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import React, {useContext} from "react";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import DialogActions from "@mui/material/DialogActions";
import {LOGIN} from "../../../../server/Mutations/user.mutations";
import {useMutation} from '@apollo/client';
import {setCookie} from 'typescript-cookie';
import Characters from '../../../../enum/char';
import {UserContext, UserType} from '../../../../context/UserContextProvider';

const SignIn: React.FC = () => {

    const userContext = useContext(UserContext);
    const [open, setOpen] = React.useState(false);
    const [formState, setFormState] = React.useState({
        user: String(Characters.EMPTY),
        password: String(Characters.EMPTY)
    });

    const [login, {data, loading, error}] = useMutation(LOGIN, {
        onCompleted: (data) => {
            setCookie('jwt-auth-token', data.login.access_token);
            const user: UserType = {
                id: data?.login.user.id,
                username: data.login.user.username,
                email: data.login.user.email,
            }
            userContext.setUser(user);
        }
    });

    const onClose = () => {
        setOpen(false);
    }
    const onOpen = () => {
        setOpen(true);
    }

    return (
        <>
            <Button
                className="pull-right"
                sx={{my: 2, color: 'white', display: 'block'}}
                onClick={() => {
                    onOpen();
                }}>Sign In
            </Button>

            <Dialog open={open} onClose={() => {
                onOpen();
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
                        <Grid container rowSpacing={4}>
                            <Grid item sm={12}>
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
                            <Grid item sm={12}>
                                <TextField id="user"
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
                        <Grid
                            xs={12}
                            item
                            container
                            justifyContent={"space-between"}
                        >
                            <Grid xs={2} item>
                                <Button type="reset" onClick={() => {
                                    onClose();
                                }}>Cancel</Button>
                            </Grid>
                            <Grid xs={2} item>
                                <Button
                                    type="submit"
                                    variant="contained"
                                >
                                    Sign in
                                </Button>
                            </Grid>
                        </Grid>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    );
}

export default SignIn;



