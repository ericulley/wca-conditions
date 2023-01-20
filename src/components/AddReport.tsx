import React, { FunctionComponent, useState } from 'react'
import axios from 'axios'
import { Card, CardHeader, CardContent, TextField, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

interface Props {
    fetchGenReports: () => void;
}


const AddReport: FunctionComponent = () => {

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
                    <Button className="" variant="contained" fullWidth type="submit"><AddIcon />ADD</Button>   
                </form>
            </CardContent>
           
        </Card>
    )
}

export default AddReport