// Dependencies
import { FunctionComponent, useState } from 'react'
import axios from 'axios'
import { Button, Box, Accordion, AccordionSummary, TextField, AccordionDetails } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
// Interfaces
import River from '../interfaces/River'

const useStyles = makeStyles({
    fullWidth: {
        width: '100%',
    }, 
    summary: {
        fontFamily: 'roboto',
        fontSize: '1.2em',
    }, 
    button: {
        margin: '1em 0',
    }, 
    deleteButton: {
        margin: '.5em 0',
    }
})

interface Props {
    riverId: number,
    thisRiver: River,
    fetchAllRivers: () => void,
}

const EditRiverForm: FunctionComponent<Props> = ({ thisRiver, riverId, fetchAllRivers }) => {

    // Import component styling
    const ui = useStyles()

    // States
    const [editRiver, setEditRiver] = useState<River>(thisRiver)

    // Methods
    const handleChange = (event: any) => {
        setEditRiver({
            ...editRiver,
            [event.target.name]: event.target.value,
        })
    }

    const catchEmptyInputs = () => {
        let k: keyof typeof editRiver
        for (k in editRiver) {
            if (editRiver[k] === '') {
                setEditRiver({
                    ...editRiver,
                    [k]: thisRiver[k],
                })
            }
        }
    }

    const updateRiver = async (event: any) => {
        event.preventDefault()
        catchEmptyInputs()
        axios.put('http://localhost:3001/rivers/' + event.target.id, editRiver)
            .then((res) => {
                // console.log(editRiver)
                fetchAllRivers()
            })
        event.target.reset() 
    }

    const deleteRiver = (event: any) => {
        axios.delete('http://localhost:3001/rivers/' + event.target.id)
        .then(() => {
            fetchAllRivers()
        })
    }

    return (
        <Accordion className="river-edit-container">
            <AccordionSummary
                className={ui.summary}
                expandIcon={<ExpandMoreIcon/>}>
                {thisRiver.riverName}
            </AccordionSummary>
            <AccordionDetails>
                <form className={ui.fullWidth} id={riverId.toString()} onSubmit={updateRiver}>
                    <Box display="flex" flexDirection="column">
                        <TextField id="edit-river-name" name="river_name" label="River Name" fullWidth onChange={handleChange}/>

                        <TextField id="edit-river-report" name="river_report" label="Report" fullWidth onChange={handleChange}/>

                        <TextField id="edit-river-flies" name="flies" label="Flies" fullWidth onChange={handleChange}/>

                        <Button className={ui.button} variant="contained" type="submit" fullWidth>Update River</Button>

                        <Button className={ui.deleteButton} variant="contained" color="primary" id={riverId.toString()} fullWidth onClick={deleteRiver}>Delete River</Button>
                    </Box>
                </form>
            </AccordionDetails>
        </Accordion>
    )
}

export default EditRiverForm