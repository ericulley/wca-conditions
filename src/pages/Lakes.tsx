// Dependencies
import { FunctionComponent, useContext, useEffect, useState } from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import axios, { AxiosResponse } from 'axios';
// Interfaces
import {
    Card,
    CardContent,
    CardHeader,
    Container,
    Grid,
    ImageList,
    ImageListItem,
} from '@mui/material';
import Footer from '../components/navigation/Footer';
import TPage from '../types/TPage';
import AppContext from '../contexts/app-context';
// Components

const Lakes: FunctionComponent = () => {
    const { setPage } = useContext(AppContext);

    useEffect(() => {
        setPage(TPage.Lakes);
    }, []);

    return (
        <Container id="lakes-container" maxWidth="xl">
            <Card>
                <CardHeader title="Lakes" />
                <ImageList cols={1} rowHeight={'auto'}>
                    <ImageListItem sx={{ width: '50%', margin: '0 auto' }}>
                        <img
                            src={`https://www.usbr.gov/pn/hydromet/bur.png`}
                            alt="Major Storage Reservoirs in the Upper Snake River Basin"
                            loading="lazy"
                        />
                    </ImageListItem>
                </ImageList>
                {/* <CardContent> */}
                {/* <Grid container> */}
                {/* <Grid item sm={12} color="primary"> */}
                {/* </Grid> */}
                {/* </Grid> */}
                {/* </CardContent> */}
            </Card>
            <Footer />
        </Container>
    );
};

export default withAuthenticationRequired(Lakes);
