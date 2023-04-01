import * as React from "react";
import {GET_PROPERTIES_BY_USER} from "../../../server/Queries/property.queries";
import {useQuery} from "@apollo/client";
import PropertyItem from "./PropertyItem";
import CreatePropertyModal from "./CreatePropertyModal";
import {Grid} from "@mui/material";
import {useState} from "react";
import {IPropertyType} from "../types/IPropertyType";

const PropertiesList = () => {

    const aux: IPropertyType[] = [];
    const [properties, setProperties] = useState(aux);

    const {data, loading, error} = useQuery(GET_PROPERTIES_BY_USER, {
        onCompleted: (data) => {
            const properties = data?.getPropertiesByUser.map((item: any) => {
                const property: IPropertyType = {
                    id: item.id,
                    alias: item.alias,
                    country: item.country,
                    district: item.district,
                    city: item.city,
                    suburb: item.suburb,
                    street: item.street,
                    number: item.number,
                    flat: item.flat,
                    coverPicture: item.coverPicture,
                    pictures: item.pictures,
                    rooms: item.rooms,
                    createdAt: item.createdAt,
                    updatedAt: item.updatedAt,
                    deletedAt: item.deletedAt,
                }

                return property;
            });

            setProperties(properties);
        }
    });

    const onCreateProperty = (property: IPropertyType) => {
        setProperties(properties?.concat(property));
    }
    const onDeleteProperty = (propertyId: number) => {
        setProperties(properties.filter((property: IPropertyType) => property.id !== propertyId));
    }

    if (loading) {
        return <label>loading...</label>;
    }

    if (error) {
        return <label>Error :(</label>;
    }

    return (
        <>
            {properties.filter((property: IPropertyType) => !property.deletedAt).map((property: any) => (
                <PropertyItem property={property} key={property.id} onDeleteProperty={onDeleteProperty}/>
            ))}
            <CreatePropertyModal onSaveProperty={onCreateProperty}/>
        </>
    );
}

export default PropertiesList;
