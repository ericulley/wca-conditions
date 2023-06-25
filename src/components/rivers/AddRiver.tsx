import { FunctionComponent, useContext, useState } from 'react';
import axios from 'axios';
import { TRiver, ZRiver } from '../../types/TRiver';
import { Button, TextField, Card, CardHeader, CardContent, Input } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import dateformat from 'dateformat';
import { AppContext } from '../../contexts/ConditionsContext';
import { ZodError } from 'zod';

const AddRiver: FunctionComponent = () => {
    /*
     * States
     */
    const [newRiver, setNewRiver] = useState<TRiver>({
        name: null,
        date: dateformat(new Date(), 'isoDate'),
        stationId: null,
        hatches: null,
        report: null,
        createdAt: null,
        updatedAt: undefined,
    });

    /*
     * Contexts
     */
    const { getRivers } = useContext(AppContext);

    /*
     * Methods
     */
    const handleInputChange = async (event: any) => {
        setNewRiver({
            ...newRiver,
            [event.target.name]: event.target.value,
        });
    };

    const submitRiver = async (event: any) => {
        try {
            event.preventDefault();
            ZRiver.parse(newRiver);
            await axios.post('http://localhost:5050/rivers', newRiver);
            getRivers && getRivers();
            event.target.reset();
        } catch (error) {
            if (error instanceof ZodError) {
                console.error('Zod Error', error.issues);
            } else {
                console.error('Submit River Error', error);
            }
        }
    };

    /*
     * Render Component
     */
    return (
        <Card>
            <CardHeader title="Add New River" avatar={<AddIcon />} />
            <CardContent>
                <form className="form" id="new-river-form" onSubmit={submitRiver}>
                    <TextField
                        id="river-name-input"
                        label="Name / Location"
                        required
                        fullWidth
                        name="name"
                        onChange={handleInputChange}
                    />

                    <TextField
                        id="station-id-input"
                        label="Station ID"
                        type="number"
                        required
                        fullWidth
                        name="stationId"
                        onChange={handleInputChange}
                    />

                    <TextField
                        id="hatches-input"
                        label="Hatches"
                        name="hatches"
                        fullWidth
                        onChange={handleInputChange}
                    />

                    <TextField
                        id="river-report-input"
                        label="Report"
                        fullWidth
                        multiline
                        name="report"
                        onChange={handleInputChange}
                    />

                    <Input
                        id="gen-report-date-input"
                        type="date"
                        required
                        name="date"
                        defaultValue={dateformat(new Date(), 'isoDate')}
                        onChange={handleInputChange}
                    />

                    <Button className="" variant="contained" fullWidth type="submit">
                        ADD
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
};

export default AddRiver;
