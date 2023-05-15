import { FunctionComponent, useState } from 'react';
import axios from 'axios';
import { TRiver } from '../../types/TRiver';
import { Button, TextField, Card, CardHeader, CardContent, Input } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import dateformat from 'dateformat';

const AddRiver: FunctionComponent = () => {
    /*
     * States
     */
    const [newRiver, setNewRiver] = useState<TRiver>({
        name: null,
        date: null,
        stationId: null,
        hatches: null,
        report: null,
        createdAt: null,
        updatedAt: undefined,
    });

    /*
     * Methods
     */
    const handleInputChange = async (event: any) => {
        setNewRiver({
            ...newRiver,
            [event.target.name]: event.target.value,
        });
    };

    const submitRiver = (event: any) => {
        event.preventDefault();
        console.log('New River Submission: ', newRiver);
        axios.post('http://localhost:5050/rivers', newRiver).then((res) => {
            console.log('RESP: ', res.data);
        });
        event.target.reset();
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
