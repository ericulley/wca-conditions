import { FunctionComponent, useState } from 'react';
import axios from 'axios';
import Lake from '../../types/TLake';

interface Props {}

const AddLake: FunctionComponent<Props> = () => {
    const [newLake, setNewLake] = useState<Lake>({
        lakeName: '',
        stationId: 0,
        hatches: '',
        flies: '',
        lakeReport: '',
    });

    const handleInputChange = (event: any) => {
        setNewLake({
            ...newLake,
            [event.target.name]: event.target.value,
        });
    };

    const submitLake = (event: any) => {
        event.preventDefault();
        axios.post('http://localhost:3001/lakes', newLake).then((res) => {});
        event.target.reset();
    };

    return (
        <form className="form" id="new-river-form" onSubmit={submitLake}>
            <h3>Add New Lake</h3>
            <label htmlFor="river-name-input">Name @ Location</label>
            <input
                id="river-name-input"
                type="text"
                name="riverName"
                onChange={handleInputChange}
            />

            <button type="submit">ADD</button>
        </form>
    );
};

export default AddLake;
