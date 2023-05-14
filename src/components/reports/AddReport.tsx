import {
    FunctionComponent as FC,
    useState,
    ChangeEvent,
    ChangeEventHandler,
    FormEvent,
    FormEventHandler,
} from 'react';
import axios from 'axios';
import { Card, CardHeader, CardContent, TextField, Button, Input } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { after } from 'node:test';
import { TGeneralReport } from '../../types/TGeneralReport';
import dateformat from 'dateformat';

// interface Props {
//     fetchGenReports: () => void;
// }

const AddReport: FC = () => {
    const [genReport, setGenReport] = useState<TGeneralReport>({
        report: null,
        date: null,
        createdAt: null,
        updatedAt: undefined,
    });

    const handleInputChange: ChangeEventHandler = (event: ChangeEvent) => {
        let target = event.target as HTMLInputElement;
        if (target.name === 'gen-report')
            setGenReport({
                ...genReport,
                report: target.value,
            });
        if (target.name === 'gen-report-date')
            setGenReport({
                ...genReport,
                date: target.value,
            });
    };

    const submitGenReport: FormEventHandler = async (event: FormEvent) => {
        let target = event.target as HTMLFormElement;
        event.preventDefault();
        try {
            const report = genReport;
            report.createdAt = Date.now();
            report.date = report.date ? report.date : dateformat(Date.now(), 'isoDate');
            console.log('Report State Pre-Post: ', report);
            await axios({
                method: 'post',
                url: 'http://localhost:5050/general/reports',
                data: report,
            });
            target.reset();
        } catch (error: any) {
            console.log(error.message);
        }
    };

    return (
        <Card>
            <CardHeader title="Add New Report" avatar={<AddIcon />} />
            <CardContent>
                <form id="new-report-form" autoComplete="off" onSubmit={submitGenReport}>
                    <TextField
                        id="gen-report-input"
                        variant="outlined"
                        label="Report"
                        fullWidth
                        multiline
                        rows={4}
                        name="gen-report"
                        onChange={handleInputChange}
                    />
                    <Input
                        id="gen-report-date-input"
                        type="date"
                        required
                        name="gen-report-date"
                        value={dateformat(new Date(), 'isoDate')}
                        onChange={handleInputChange}
                    />
                    <Button className="" variant="contained" fullWidth type="submit">
                        <AddIcon />
                        ADD
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
};

export default AddReport;
