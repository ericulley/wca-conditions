// Dependencies
import { FunctionComponent, useEffect, useContext } from 'react';
import { Box, Card, CardHeader, Typography, CardContent } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
// Components
import EditRiverForm from './EditRiverForm';
import AppContext from '../../contexts/app-context';
// Types & Interfaces
import { TRiver } from '../../types/TRiver';

const EditRiver: FunctionComponent = () => {
    /*
     * Contexts
     */
    const { rivers, getRivers, setRivers } = useContext(AppContext);

    return (
        <Card>
            <CardHeader title="Edit River" avatar={<EditIcon />} />
            <CardContent>
                {rivers &&
                    rivers.map((river: TRiver) => {
                        return (
                            <Box key={river._id} display="flex" flexDirection="column">
                                <EditRiverForm riverToEdit={river} />
                            </Box>
                        );
                    })}
            </CardContent>
        </Card>
    );
};

export default EditRiver;
