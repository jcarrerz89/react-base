import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import DialogActions from "@mui/material/DialogActions";

const SignIn: React.FC = () => {

    const [open, setModalState] = React.useState(false);
    const [formState, setFormState] = React.useState({
        user: '',
        password: ''
    });
    return (
        <>
            <Button variant="outlined" className="pull-right" onClick={() => {
                setModalState(true);
            }}>Sign In
            </Button>

            <form onSubmit={(event) => {

            }}>
                <Dialog open={open} onClose={() => {
                    setModalState(true);
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
                                <Button variant="contained" onClick={() => {
                                    setModalState(false);
                                }}>Sign in</Button>
                            </Grid>
                        </Grid>
                    </DialogActions>
                </Dialog>
            </form>
        </>
)
}

export default SignIn;