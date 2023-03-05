import { FunctionComponent, useState } from 'react';
import axios from 'axios';
import { Card, CardHeader, CardContent, TextField, Button, Input } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

interface Props {
    fetchFishingReport: () => void;
    postId: number;
}

const EditReport: FunctionComponent<Props> = ({ fetchFishingReport, postId }) => {
    const [editReport, setEditReport] = useState({
        editReport: '',
    });

    const handleChange = (event: any) => {
        setEditReport({
            editReport: event.target.value,
        });
    };

    const updateGenReport = (event: any) => {
        event.preventDefault();
        console.log(event.target.id);
        axios.put('http://localhost:3001/reports/' + event.target.id, editReport).then((res) => {
            fetchFishingReport();
        });
        event.target.reset();
    };

    return (
        <Card>
            <CardHeader title="Edit Current Report" avatar={<AddIcon />} />
            <CardContent>
                <form id={postId + ''} onSubmit={updateGenReport}>
                    <TextField
                        id="edit-gen-report-input"
                        variant="outlined"
                        label="Current Report"
                        fullWidth
                        multiline
                        rows={4}
                        name="edit-gen-report"
                        onChange={handleChange}
                    />
                    <Button className="" variant="contained" fullWidth type="submit">
                        <AddIcon />
                        Update
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
};

export default EditReport;
