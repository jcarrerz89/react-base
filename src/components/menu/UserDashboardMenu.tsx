import React from 'react';
import {styled, Theme, CSSObject} from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import EmailIcon from '@mui/icons-material/Email';
import NightShelterIcon from '@mui/icons-material/NightShelter';
import PersonIcon from '@mui/icons-material/Person';
import ExtensionIcon from '@mui/icons-material/Extension';

const drawerWidth = 240;
const openedMixin = (theme: Theme): CSSObject => ({
    position: 'relative',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    position: 'relative',
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

interface IUserDashboardMenu {
    onSwitch: (view: string) => void
}

const UserDashboardMenu: React.FC<IUserDashboardMenu> = ({onSwitch}) => {
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (

        <Drawer variant="permanent" open={open}>
            <DrawerHeader>
                <IconButton onClick={open ? handleDrawerClose : handleDrawerOpen}>
                    {open ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                </IconButton>
            </DrawerHeader>
            <Divider/>
            <List>
                <ListItem key={'activity'} disablePadding sx={{display: 'block'}}>
                    <ListItemButton onClick={() => onSwitch('activity')}
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                    }}>
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}>
                            <EmailIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Activity" sx={{opacity: open ? 1 : 0}}/>
                    </ListItemButton>
                </ListItem>
                <ListItem key={'profile'} disablePadding sx={{display: 'block'}}>
                    <ListItemButton onClick={() => onSwitch('profile')}
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                    }}>
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}>
                            <PersonIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Profile" sx={{opacity: open ? 1 : 0}}/>
                    </ListItemButton>
                </ListItem>
                <ListItem key={'property'} disablePadding sx={{display: 'block'}}>
                    <ListItemButton onClick={() => onSwitch('property')}
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                    }}>
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}>
                            <NightShelterIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Property" sx={{opacity: open ? 1 : 0}}/>
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider/>
            <List>
                <ListItem key="Extension" disablePadding sx={{display: 'block'}}>
                    <ListItemButton onClick={() => onSwitch('settings')}
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                    }}>
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}>
                            <ExtensionIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Settings" sx={{opacity: open ? 1 : 0}}/>
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
    );
}

export default UserDashboardMenu;