import * as React from "react";
import { GET_PROPERTIES_BY_USER } from "../../../server/Queries/property.queries";
import { useQuery } from "@apollo/client";
import PropertyItem from "./PropertyItem";
import CreateProperty from "./CreateProperty";
import { Grid } from "@mui/material";
import {useState} from "react";
import {IPropertyType} from "../types/IPropertyType";

const PropertiesList = () => {

    const aux: IPropertyType[] = [];
    const [properties, setProperties] = useState(aux);

    const { data, loading, error } = useQuery(GET_PROPERTIES_BY_USER, {
        onCompleted: (data) => {
            setProperties(data?.getPropertiesByUser);
        }
    });

    const onCreateProperty = (property: IPropertyType) => {
        setProperties(properties?.concat(property));
    }

    if (loading) {
        return <label>loading...</label>;
    }

    if (error) {
        return <label>Error :(</label>;
    }

    return (
        <>
            <Grid container rowGap={2} padding={2}>
                {properties.map((property: any) => (
                    <PropertyItem property={property} key={property.id}/>
                ))}
            </Grid>
            <CreateProperty onCreateProperty={onCreateProperty}/>
        </>
    );
}

export default PropertiesList;
