// Dependencies
import { FunctionComponent, useEffect, useState } from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import axios, { AxiosResponse } from 'axios';
// Interfaces
import { TLake } from '../types/TLake';
import { Card, CardContent, CardHeader, Container, ImageList, ImageListItem } from '@mui/material';
import Footer from '../components/navigation/Footer';
// Components

const Lakes: FunctionComponent = () => {
    const [lakes, setLakes] = useState<TLake[]>([]);

    const fetchAllLakes = () => {
        axios.get('http://localhost:3001/lakes').then(async (res) => {});
    };

    useEffect(() => {
        // fetchAllLakes();
    }, []);

    return (
        <Container id="lakes-container" maxWidth="xl">
            <Card>
                <CardHeader title="Lakes" />
                <CardContent>
                    <ImageList sx={{ width: 617, height: 463 }} cols={1}>
                        <ImageListItem>
                            <img
                                src={`https://www.usbr.gov/pn/hydromet/bur.png`}
                                alt="Major Storage Reservoirs in the Upper Snake River Basin"
                                loading="lazy"
                            />
                        </ImageListItem>
                    </ImageList>
                    <p>More Coming Soon...</p>
                </CardContent>
            </Card>
            <Footer />
        </Container>
    );
};

export default withAuthenticationRequired(Lakes);
