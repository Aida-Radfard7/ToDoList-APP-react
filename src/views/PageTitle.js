import React from 'react';
import {Helmet} from "react-helmet";

export const PageTitle = ({title}) => {
    return (
        <Helmet>
            <title>{title}</title>
        </Helmet>
    )
}
