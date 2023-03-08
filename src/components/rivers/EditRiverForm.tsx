// Dependencies
import { FunctionComponent, useState } from 'react';
import axios from 'axios';
import {
    Button,
    Box,
    Accordion,
    AccordionSummary,
    TextField,
    AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// Interfaces
import River from '../../types/TRiver';

interface Props {
    riverId: number;
    thisRiver: River;
    fetchAllRivers: () => void;
}

const EditRiverForm: FunctionComponent<Props> = ({ thisRiver, riverId, fetchAllRivers }) => {
    // States
    const [editRiver, setEditRiver] = useState<River>(thisRiver);

    // Methods
    const handleChange = (event: any) => {
        setEditRiver({
            ...editRiver,
            [event.target.name]: event.target.value,
        });
    };

    const catchEmptyInputs = () => {
        let k: keyof typeof editRiver;
        for (k in editRiver) {
            if (editRiver[k] === '') {
                setEditRiver({
                    ...editRiver,
                    [k]: thisRiver[k],
                });
            }
        }
    };

    const updateRiver = async (event: any) => {
        event.preventDefault();
        catchEmptyInputs();
        axios.put('http://localhost:3001/rivers/' + event.target.id, editRiver).then((res) => {
            // console.log(editRiver)
            fetchAllRivers();
        });
        event.target.reset();
    };

    const deleteRiver = (event: any) => {
        axios.delete('http://localhost:3001/rivers/' + event.target.id).then(() => {
            fetchAllRivers();
        });
    };

    return (
        <Accordion className="river-edit-container">
            <AccordionSummary className="" expandIcon={<ExpandMoreIcon />}>
                {thisRiver.riverName}
            </AccordionSummary>
            <AccordionDetails>
                <form className="" id={riverId.toString()} onSubmit={updateRiver}>
                    <Box display="flex" flexDirection="column">
                        <TextField
                            id="edit-river-name"
                            name="river_name"
                            label="River Name"
                            fullWidth
                            onChange={handleChange}
                        />

                        <TextField
                            id="edit-river-report"
                            name="river_report"
                            label="Report"
                            fullWidth
                            onChange={handleChange}
                        />

                        <TextField
                            id="edit-river-flies"
                            name="flies"
                            label="Flies"
                            fullWidth
                            onChange={handleChange}
                        />

                        <Button className="" variant="contained" type="submit" fullWidth>
                            Update River
                        </Button>

                        <Button
                            className=""
                            variant="contained"
                            color="primary"
                            id={riverId.toString()}
                            fullWidth
                            onClick={deleteRiver}
                        >
                            Delete River
                        </Button>
                    </Box>
                </form>
            </AccordionDetails>
        </Accordion>
    );
};

export default EditRiverForm;
