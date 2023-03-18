import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { GET_PROPERTIES_BY_USER } from "../../../server/Queries/property.queries";
import { useQuery } from "@apollo/client";
import PropertyItem from "./PropertyItem";
import CreateProperty from "./CreateProperty";
import { Container, Grid } from "@mui/material";

export default function CollapsibleTable() {
    const { data, loading, error } = useQuery(GET_PROPERTIES_BY_USER, {});

    if (loading) {
        return <label>loading...</label>;
    }

    if (error) {
        return <label>Error :(</label>;
    }

    return (
        <>
            <Grid container rowGap={2} padding={2}>
                {data.getPropertiesByUser.map((property: any) => (
                    <PropertyItem property={property} />
                ))}
            </Grid>
            <CreateProperty />
        </>
    );
}
