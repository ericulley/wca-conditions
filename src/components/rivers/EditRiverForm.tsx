// Dependencies
import { FunctionComponent, useContext, useState } from 'react';
import axios from 'axios';
import {
    Button,
    Box,
    Accordion,
    AccordionSummary,
    TextField,
    AccordionDetails,
    Input,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// Interfaces
import { TRiver } from '../../types/TRiver';
import { AppContext } from '../../contexts/app-context';

interface Props {
    riverToEdit: TRiver;
}

const EditRiverForm: FunctionComponent<Props> = ({ riverToEdit }) => {
    const { rivers, getRivers, setRivers } = useContext(AppContext);

    // States
    const [editRiver, setEditRiver] = useState<TRiver>(riverToEdit);

    // Methods
    const handleChange = (event: any) => {
        setEditRiver({
            ...editRiver,
            [event.target.name]: event.target.value,
        });
    };

    const updateRiverInPlace = async (event: any) => {
        axios
            .put('http://localhost:5050/rivers/' + riverToEdit._id!.toString(), editRiver)
            .then((res) => {
                getRivers();
            });
    };

    const updateRiverAndArchive = async (event: any) => {
        event.preventDefault();
        axios
            .put('http://localhost:5050/rivers/' + riverToEdit._id!.toString(), editRiver)
            .then((res) => {
                getRivers();
            });
    };

    const deleteRiver = (event: any) => {
        axios.delete('http://localhost:5050/rivers/' + event.target.id).then(() => {
            getRivers();
        });
    };

    return (
        <Accordion className="river-edit-container">
            <AccordionSummary className="" expandIcon={<ExpandMoreIcon />}>
                {riverToEdit.name}
            </AccordionSummary>
            <AccordionDetails>
                <form className="" id={riverToEdit._id!.toString()}>
                    <Box display="flex" flexDirection="column">
                        <TextField
                            id="edit-river-name"
                            name="name"
                            label="River Name"
                            defaultValue={riverToEdit.name}
                            fullWidth
                            onChange={handleChange}
                        />
                        <TextField
                            id="edit-river-hatches"
                            name="hatches"
                            label="Hatches"
                            defaultValue={riverToEdit.hatches}
                            fullWidth
                            onChange={handleChange}
                        />
                        <TextField
                            id="edit-river-report"
                            name="report"
                            label="Report"
                            defaultValue={riverToEdit.report}
                            fullWidth
                            onChange={handleChange}
                        />
                        <Input
                            id="edit-river-date-input"
                            type="date"
                            required
                            name="date"
                            defaultValue={riverToEdit.date}
                            onChange={handleChange}
                        />
                        <Button
                            className=""
                            variant="contained"
                            fullWidth
                            onClick={updateRiverAndArchive}
                        >
                            Archive & Update
                        </Button>
                        <Button
                            className=""
                            variant="contained"
                            fullWidth
                            onClick={updateRiverInPlace}
                        >
                            Update River
                        </Button>
                        <Button
                            className=""
                            variant="contained"
                            color="primary"
                            id={riverToEdit._id!.toString()}
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
