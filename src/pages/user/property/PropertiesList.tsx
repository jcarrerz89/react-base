import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { GET_PROPERTIES_BY_USER } from '../../../server/Queries/property.queries';
import { useQuery } from '@apollo/client';
import { ConstructionOutlined } from '@mui/icons-material';

function Row(property: any ) {
    const [open, setOpen] = React.useState(false);

    console.log(property);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {property.property.alias}
                </TableCell>
                <TableCell align="right">
                    <DeleteForeverIcon />
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={2}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Table size="small" aria-label="purchases">
                                <TableBody>
                                    <TableRow>
                                        <TableCell component="th" scope="row">{property.property.country}</TableCell>
                                        <TableCell>{property.property.district}</TableCell>
                                        <TableCell>{property.property.city}</TableCell>
                                        <TableCell>{property.property.suburb}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

export default function CollapsibleTable() {

    const { data, loading, error } = useQuery(GET_PROPERTIES_BY_USER, {});

    if (loading) {
        return <label>loading...</label>
    }

    if (error) {
        return <label>Error :(</label>
    }

    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableBody>
                    {data.getPropertiesByUser.map((property: any) => (
                        <Row key={property.id} property={{...property}} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
