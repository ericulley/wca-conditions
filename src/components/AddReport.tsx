import React, { FunctionComponent, useState } from 'react'
import axios from 'axios'
import { Card, CardHeader, CardContent, TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add'

// interface Props {
//     fetchGenReports: () => void;
// }

const useStyles = makeStyles({
    buttonMargin: {
        margin: '1em 0',
    }
})

const AddReport: FunctionComponent = () => {

     // Importing component styles
    const ui = useStyles()

    const [genReport, setGenReport] = useState({
        genReport: '',
    })

    const handleInputChange = (event: any) => {
        setGenReport({
            genReport: event.target.value,
        })
    }

    const submitGenReport = (event: any) => {
        event.preventDefault()
        axios.post('http://localhost:3001/reports', genReport)
            .then((res) => {
                // fetchGenReports()
            }) 
        event.target.reset()    
    }

    return (
        <Card>
            <CardHeader
                title="Add New Report"
                avatar={<AddIcon />}
            />
            <CardContent>
                <form id="new-report-form" autoComplete="off" onSubmit={submitGenReport}>
                    <TextField 
                        id="gen-report-input" 
                        variant="outlined"
                        label="Report"
                        fullWidth
                        multiline
                        rows={4}
                        onChange={handleInputChange}/>
                    <Button className={ui.buttonMargin} variant="contained" fullWidth type="submit"><AddIcon />ADD</Button>   
                </form>
            </CardContent>
           
        </Card>
    )
}

export default AddReport