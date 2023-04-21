import React, {useState} from 'react';
import {IRoomType} from "../../../types/IRoomType";
import {Dialog, DialogTitle, FormGroup} from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import {useMutation} from "@apollo/client";
import {SAVE_ANNOUNCEMENT} from "../../../server/gql/announcement.gql";
import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import {DatePicker} from "@mui/x-date-pickers";
import Characters from "../../../enum/char";
import dayjs from "dayjs";

interface ICreateAnnouncementModal {
    open: boolean,
    room: IRoomType,
    onDismiss: () => void
}

const CreateAnnouncementModal: React.FC<ICreateAnnouncementModal> = ({open, room, onDismiss}) => {
    const [announcementData, setAnnouncementData] = useState({
        availableAt: dayjs(new Date()),
        description: String(Characters.EMPTY),
        roomId: room.id
    });
    const [saveAnnouncement] = useMutation(SAVE_ANNOUNCEMENT, {
        onCompleted: (data) => {
            onDismiss();
        },
        onError: (error) => {
            console.log(error);
        }
    });

    return (
        <Dialog open={open} fullWidth onClose={onDismiss}>
            <form onSubmit={(e) => {
                e.preventDefault();

                saveAnnouncement({
                    variables: {
                        announcement: announcementData
                    }
                });
            }}>
                <FormGroup>
                    <DialogTitle>Announce a room</DialogTitle>
                    <DialogContent>
                        <Grid container rowGap={3} paddingTop={2}>
                            <Grid item>
                                <DatePicker
                                    label={"Available at"}
                                    value={announcementData.availableAt}
                                    defaultValue={dayjs(new Date())}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Text Area"
                                    fullWidth
                                    multiline
                                    rows={4}
                                    defaultValue="Description"
                                    value={announcementData.description}
                                    onChange={(e) => {
                                        setAnnouncementData({
                                            ...announcementData,
                                            description: e.target.value
                                        });
                                    }}
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button variant={"text"} onClick={onDismiss}>
                            Cancel
                        </Button>
                        <Button variant={"contained"} color={"secondary"} type="submit">
                            Announce
                        </Button>
                    </DialogActions>
                </FormGroup>
            </form>
        </Dialog>
    );
}

export default CreateAnnouncementModal;