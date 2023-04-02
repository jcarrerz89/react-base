import React, {useContext} from 'react';
import {LinearProgress} from "@mui/material";
import {LinearProgressBarContext} from "../../../context/LinearProgressBarContextProvider";

const LinearProgressBar = () => {

    const linearProgressContext = useContext(LinearProgressBarContext);

    return (
        <>
            {linearProgressContext.display ? <LinearProgress/> : <></>}
        </>
    );
}

export default LinearProgressBar;