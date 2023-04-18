import React from "react";
import {MenuItem, Tooltip, Typography} from "@mui/material";
import Button from "@mui/material/Button";

interface ISectionMenuItem {
    icon: any,
    label: string,
    description: string,
    callback: React.EffectCallback
}

const SectionMenuItem:React.FC<ISectionMenuItem> = ({icon, label, description, callback}) => {
    return (
        <MenuItem key={label} dense>
            <Tooltip title={description} onClick={callback}>
                <Button variant="text" color="primary" startIcon={icon}>
                    <Typography variant="button">{label}</Typography>
                </Button>
            </Tooltip>
        </MenuItem>
    );
}

export default SectionMenuItem;