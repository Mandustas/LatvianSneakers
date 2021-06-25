import React from 'react'
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

function handleClick(event: { preventDefault: () => void; }) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

function ShopBreadcrumbs() {
    return (
        <>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
                <Link color="inherit" href="/" onClick={handleClick}>
                    Home
                </Link>
                <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
                    NIKE
                </Link>
                <Typography color="textPrimary">Air Force 1</Typography>
            </Breadcrumbs>
        </>
    )
}

export default ShopBreadcrumbs
