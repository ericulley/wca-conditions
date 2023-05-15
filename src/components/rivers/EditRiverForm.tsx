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
import { TRiver } from '../../types/TRiver';

interface Props {
    riverToEdit: TRiver;
    fetchAllRivers: () => void;
}

const EditRiverForm: FunctionComponent<Props> = ({ riverToEdit, fetchAllRivers }) => {
    // States
    const [editRiver, setEditRiver] = useState<TRiver>(riverToEdit);

    // Methods
    const handleChange = (event: any) => {
        setEditRiver({
            ...editRiver,
            [event.target.name]: event.target.value,
        });
    };

    // const catchEmptyInputs = () => {
    //     let k: keyof typeof editRiver;
    //     for (k in editRiver) {
    //         if (editRiver[k] === '') {
    //             setEditRiver({
    //                 ...editRiver,
    //                 [k]: riverToEdit[k],
    //             });
    //         }
    //     }
    // };

    const updateRiver = async (event: any) => {
        event.preventDefault();
        // catchEmptyInputs();
        axios.put('http://localhost:5050/rivers/' + event.target.id, editRiver).then((res) => {
            // console.log(editRiver)
            fetchAllRivers();
        });
        event.target.reset();
    };

    const deleteRiver = (event: any) => {
        axios.delete('http://localhost:5050/rivers/' + event.target.id).then(() => {
            fetchAllRivers();
        });
    };

    return (
        <Accordion className="river-edit-container">
            <AccordionSummary className="" expandIcon={<ExpandMoreIcon />}>
                {riverToEdit.name}
            </AccordionSummary>
            <AccordionDetails>
                <form className="" id={riverToEdit._id!.toString()} onSubmit={updateRiver}>
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
                            id="edit-river-report"
                            name="report"
                            label="Report"
                            defaultValue={riverToEdit.report}
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

                        <Button className="" variant="contained" type="submit" fullWidth>
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
