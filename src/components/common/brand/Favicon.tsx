import {Avatar} from "@mui/material";
import React from "react";
import Icon from "@assets/images/favicon.webp";

const Favicon = () => {
    return<Avatar
        alt="property-cover-picture"
        style={{ width: '4rem', height: '4rem' }}
        src={Icon}
    />
}

export default Favicon