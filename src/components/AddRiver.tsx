import { FunctionComponent, useState } from 'react'
import axios from 'axios'
import River from '../interfaces/River'
import { Button, TextField, Card, CardHeader, CardContent, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add'

const useStyles = makeStyles({
    buttonMargin: {
        margin: '1em 0',
    },
    'MuiCardHeader-root': {
        padding: '8px',
    }
})

const AddRiver: FunctionComponent = () => {
    
    // Importing component styles
    const ui = useStyles()

    // States
    const [newRiver, setNewRiver] = useState<River>({
        riverName: '',
        stationId: 0,
        hatches: '',
        flies: '',
        riverReport: ''
    })

    const [reqError, setReqError] = useState({
        riverName: false,
        stationId: false,
    })

    // Methods
    const handleInputChange = (event: any) => {
        if (event.target.name === "riverName") setReqError({
            ...reqError,
            riverName:true,
        }) 
        if (event.target.name === "stationId") setReqError({
            ...reqError,
            stationId:true,
        }) 
        setNewRiver({
            ...newRiver,
            [event.target.name]: event.target.value,
        })
    }

    const submitRiver = (event: any) => {
        event.preventDefault()
        axios.post('http://localhost:3001/rivers', newRiver)
            .then((res) => {
                
            }) 
        event.target.reset()    
    }

    return (
        <Card>
            <CardHeader
                title="Add New River"
                action={
                    <IconButton>
                        <AddIcon/>
                    </IconButton>
                }
            />
            <CardContent>
                <form className="form" id="new-river-form" onSubmit={submitRiver}>
                    
                    <TextField id="river-name-input" label="Name / Location" required error={reqError.riverName && !newRiver.riverName} fullWidth name="riverName" onChange={handleInputChange}/>

                    <TextField id="station-id-input" label="Station ID" required error={reqError.stationId && !newRiver.stationId} fullWidth name="stationId" onChange={handleInputChange}/>

                    <TextField id="hatches-input" label="Hatches" name="hatches" fullWidth onChange={handleInputChange}/>

                    <TextField id="flies-input" label="Flies" name="flies" fullWidth onChange={handleInputChange}/>

                    <TextField id="river-report-input" label="Report" fullWidth multiline name="riverReport" onChange={handleInputChange}/>

                    <Button className={ui.buttonMargin} variant="contained" fullWidth type="submit">ADD</Button>             
                </form>
            </CardContent>
            
        </Card>
    )
}

export default AddRiver