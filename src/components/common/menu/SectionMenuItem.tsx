import React from "react";
import {IconButton, MenuItem, Tooltip} from "@mui/material";

interface ISectionMenuItem {
    icon: any,
    label: string,
    description: string,
    callback: React.EffectCallback
}

const SectionMenuItem:React.FC<ISectionMenuItem> = ({icon, label, description, callback}) => {
    return (
        <MenuItem key={label}>
            <Tooltip title={description} onClick={callback}>
                <IconButton sx={{my: 2, color: "Black", display: "block"}}>
                    {icon} {label}
                </IconButton>
            </Tooltip>
        </MenuItem>
    );
}

export default SectionMenuItem;