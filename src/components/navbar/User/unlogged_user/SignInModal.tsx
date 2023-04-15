import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import React, {useContext} from "react";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import DialogActions from "@mui/material/DialogActions";
import {LOGIN} from "../../../../server/gql/user.gql";
import {useMutation} from '@apollo/client';
import {setCookie} from 'typescript-cookie';
import Characters from '../../../../enum/char';
import {UserContext, UserType} from '../../../../context/UserContextProvider';
import {FormGroup} from "@mui/material";

interface ISignInModal {
    open: boolean,
    onDismiss: () => void
}

const SignInModal: React.FC<ISignInModal> = ({open, onDismiss}) => {

    const userContext = useContext(UserContext);
    const [formState, setFormState] = React.useState({
        user: String(Characters.EMPTY),
        password: String(Characters.EMPTY)
    });

    const [login] = useMutation(LOGIN, {
        onCompleted: (data) => {
            userContext.setAuth(data.login);
        }
    });

    return (
        <Dialog fullWidth open={open} onClose={onDismiss}>
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
                <FormGroup>
                    <DialogTitle>Sign In</DialogTitle>
                    <DialogContent>
                        <Grid container rowSpacing={4} paddingTop={1}>
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
                        <Button type="reset" onClick={onDismiss}>Cancel</Button>
                        <Button
                            type="submit"
                            variant="contained"
                        >
                            Sign in
                        </Button>
                    </DialogActions>
                </FormGroup>
            </form>
        </Dialog>
    );
}

export default SignInModal;



