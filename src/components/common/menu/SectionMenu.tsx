import React, {ReactNode, useState} from 'react';
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {Menu} from "@mui/material";

interface ISectionMenu {
    children: ReactNode
}

const SectionMenu: React.FC<ISectionMenu> = ({children}) => {

    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const items = Array.isArray(children) ? children : [children];

    return <>
        <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? 'long-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            style={{float: "right"}}
            onClick={(event) => {
                setOpen(true);
                setAnchorEl(event.currentTarget);
            }}>
            <MoreVertIcon/>
        </IconButton>

        <Menu
            id="long-menu"
            MenuListProps={{
                'aria-labelledby': 'small-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={() => {
                setOpen(false);
            }}>

            {items.map((item) => {
                return (item);
            })}
        </Menu>
    </>
}

export default SectionMenu;