// Dependencies
import { FunctionComponent, useContext, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Container, Typography } from '@mui/material';
// Interfaces
import { TRiver } from '../types/TRiver';
import { AppContext } from '../contexts/ConditionsContext';
import { time } from 'console';
// Components

const Rivers: FunctionComponent = () => {
    const { rivers, setRivers } = useContext(AppContext);

    const fetchAllRivers = () => {
        axios.get('http://localhost:5050/rivers').then(async (res: AxiosResponse) => {
            // Sort Original Data
            const sortedData = res.data.sort((a: any, b: any) => {
                return a.station_id - 0 - (b.station_id - 0);
            });
            // Fetch CFS with Sorted Data
            const sortedCFS: any[] = await fetchCFS(formatStationIDs(sortedData));
            // Assign CFS value to Sorted Data
            for (let i = 0; i < sortedData.length; i++) {
                sortedData[i].cfs = sortedCFS[i].values[0].value[0].value;
            }
            // Set the State
            // setRivers(sortedData);
            console.log('Sorted Data: ', sortedData);
        });
    };

    const formatStationIDs = (data: AxiosResponse<any>[]) => {
        const stationIDArray: string[] = [];
        data.forEach((river: any) => {
            stationIDArray.push(river.station_id + ',');
        });
        const stationIDString = stationIDArray.join('').slice(0, -1);
        return stationIDString;
    };

    const fetchCFS = (stationIds: string) => {
        const CFS: Promise<AxiosResponse<any>[]> = axios
            .get(
                `https://waterservices.usgs.gov/nwis/iv/?format=json&sites=${stationIds}&parameterCd=00060&siteStatus=all`
            )
            .then((res: AxiosResponse) => {
                return res.data.value.timeSeries;
            });
        return CFS;
    };

    useEffect(() => {}, []);

    return (
        <Container id="rivers-container">
            <Typography variant="h2">Rivers</Typography>
            <div className="river-row river-labels">
                <p className="river-column" id="river-name-column">
                    River
                </p>
                <p className="river-column" id="river-cfs-column">
                    CFS
                </p>
                <p className="river-column" id="river-report-column">
                    River Report
                </p>
                <p className="river-column" id="river-flies-column">
                    Flies
                </p>
            </div>
            <hr />
            {rivers &&
                rivers.map((river: any) => {
                    return (
                        <div className="river-row-container" key={river._id}>
                            <div className="river-row">
                                <p className="river-column" id="river-name-column">
                                    {river.river_name}
                                </p>
                                <p className="river-column" id="river-cfs-column">
                                    {river.cfs}
                                </p>
                                <p className="river-column" id="river-report-column">
                                    {river.river_report}
                                </p>
                                <p className="river-column" id="river-flies-column">
                                    {river.flies}
                                </p>
                            </div>
                        </div>
                    );
                })}
        </Container>
    );
};

export default Rivers;
