import {FC} from "react";
import SvgIcon from "@mui/material/SvgIcon";

interface IICon {
    icon: typeof SvgIcon,
    label?: string
}

const Icon:FC<IICon> = (props) => {
    return <>
        {props.icon} {props.label}
    </>
}

export default Icon