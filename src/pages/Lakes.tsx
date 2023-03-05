// Dependencies
import { FunctionComponent, useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
// Interfaces
import Lake from '../types/Lake';
// Components
import AddRiver from '../components/rivers/AddRiver';
import { sortAndDeduplicateDiagnostics } from 'typescript';

const Lakes: FunctionComponent = () => {
    const [lakes, setLakes] = useState<Lake[]>([]);

    const fetchAllLakes = () => {
        axios.get('http://localhost:3001/lakes').then(async (res) => {});
    };

    const fetchCFS = (stationIds: string) => {
        const CFS: Promise<AxiosResponse<any>[]> = axios
            .get(
                `https://waterservices.usgs.gov/nwis/iv/?format=json&sites=${stationIds}&parameterCd=00060&siteStatus=all`
            )
            .then((res) => {
                return res.data.value.timeSeries;
            });
        return CFS;
    };

    useEffect(() => {
        fetchAllLakes();
    }, []);

    return (
        <div id="lakes-container">
            <h2>Lakes</h2>
        </div>
    );
};

export default Lakes;
