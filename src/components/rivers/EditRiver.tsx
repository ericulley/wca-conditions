// Dependencies
import { FunctionComponent, useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Card, CardHeader, Typography, CardContent } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

// Interfaces
import { TRiver } from '../../types/TRiver';

// Components
import EditRiverForm from './EditRiverForm';

const EditRiver: FunctionComponent = () => {
    // States
    const [allRivers, setAllRivers] = useState<TRiver[]>([]);

    // Methods
    const fetchAllRivers = () => {
        axios.get(`http://localhost:5050/rivers`).then((res) => {
            // Map response data to River interface
            let riverArray: TRiver[] = [];
            res.data.forEach((data: any) => {
                let river: TRiver = {
                    _id: data._id,
                    name: data.name,
                    stationId: data.stationId,
                    hatches: data.hatches,
                    report: data.report,
                    createdAt: data.createdAt,
                    updatedAt: data.updatedAt,
                };
                riverArray.push(river);
            });
            setAllRivers(riverArray);
        });
    };

    useEffect(() => {
        fetchAllRivers();
    }, []);

    return (
        <Card>
            <CardHeader title="Edit River" avatar={<EditIcon />} />
            <CardContent>
                {allRivers.map((river: TRiver) => {
                    return (
                        <Box key={river._id} display="flex" flexDirection="column">
                            <EditRiverForm riverToEdit={river} fetchAllRivers={fetchAllRivers} />
                        </Box>
                    );
                })}
            </CardContent>
        </Card>
    );
};

export default EditRiver;
