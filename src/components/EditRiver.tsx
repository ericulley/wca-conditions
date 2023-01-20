// Dependencies
import { FunctionComponent, useState, useEffect } from 'react'
import axios from 'axios'
import { Box, Card, CardHeader, Typography, CardContent } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
// Interfaces
import River from '../interfaces/River'

// Components
import EditRiverForm from './EditRiverForm'

const EditRiver: FunctionComponent = () => {

    // States
    const [allRivers, setAllRivers] = useState<River[]>([])

    // Methods
    const fetchAllRivers = () => {
        axios.get('http://localhost:3001/rivers')
            .then((res) => {
                // Map response data to River interface
                let riverArray: River[] = []
                res.data.forEach((data: any) => {
                    let river: River = {
                        id: data.id,
                        riverName: data.river_name,
                        stationId: data.station_id,
                        hatches: data.hatches,
                        flies: data.flies,
                        riverReport: data.river_report,
                        createdAt: data.created_at,
                        updatedAt: data.updated_at,
                    }
                    riverArray.push(river)
                })
                setAllRivers(riverArray)
            })     
    }

    useEffect(() => {
        fetchAllRivers()
    }, [])

    return (
        <Card>
            <CardHeader
                title="Edit River"
                avatar={<EditIcon/>}
            />
            <CardContent>
                {allRivers.map((river: any) => {
                    return (
                        <Box key={river.id} display="flex" flexDirection="column">
                            <Typography className="">{river.river_name}</Typography>
                            <EditRiverForm thisRiver={river} riverId={river.id} fetchAllRivers={fetchAllRivers}/>
                        </Box>
                    )
                })}
            </CardContent>
        </Card>
        
    )
}

export default EditRiver