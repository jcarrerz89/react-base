import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import React, {useContext} from "react";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import DialogActions from "@mui/material/DialogActions";
import {FormGroup} from "@mui/material";

interface ISignInModal {
    open: boolean,
    onDismiss: () => void
}

const SignInModal: React.FC<ISignInModal> = ({open, onDismiss}) => {

    return (
        <Dialog fullWidth open={open} onClose={onDismiss}>
            <form>
                <FormGroup>
                    <DialogTitle>Sign In</DialogTitle>
                    <DialogContent>
                        <Grid container rowSpacing={4} paddingTop={1}>
                            <Grid item sm={12}>
                                <TextField autoFocus
                                           id="user"
                                           label="Email or Username"
                                           type="text"
                                           fullWidth></TextField>
                            </Grid>
                            <Grid item sm={12}>
                                <TextField id="user"
                                           label="Password"
                                           type="password"
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



