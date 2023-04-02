import FlightIcon from '@mui/icons-material/Flight';
import {FC} from "react";

const IconLink:FC<{link: string}> = (props: {link: string}) => {
    return <a href={props.link}>
        <FlightIcon data-testid="FlightIcon"></FlightIcon>
    </a>
}

export default IconLink
