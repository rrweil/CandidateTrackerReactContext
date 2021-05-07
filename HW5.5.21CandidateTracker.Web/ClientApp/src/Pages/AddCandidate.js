import React, { useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';


const AddCandidate = () => {
    
    const [candidate, setCandidate] = useState({});
    const history = useHistory();

    const onTextChange = e => {
        const copy = { ...candidate };
        copy[e.target.name] = e.target.value;
        setCandidate(copy);
    }

    const onAddCandidateClick = async () => {
        await axios.post('/api/candidate/addcandidate', {candidate});
        history.push('/');
    }

    const { firstName, lastName, phoneNumber, email, notes } = candidate;

    return (
        <div className="row ">
            <div className="col-md-7 offset-md-3 jumbotron mt-4 pt-3 pb-3">
                <h2>Add Candidate</h2>
                <input type="text" className="form-control" placeholder="First Name" name="firstName"
                    value={firstName} onChange={onTextChange}
                />
                <br />
                <input type="text" className="form-control" placeholder="Last Name" name="lastName"
                    value={lastName} onChange={onTextChange}
                />
                <br />
                <input type="text" className="form-control" placeholder="Email" name="email"
                    value={email} onChange={onTextChange}
                />
                <br />
                <input type="text" className="form-control" placeholder="Phone Number" name="phoneNumber"
                    value={phoneNumber} onChange={onTextChange}
                />
                <br />
                <textarea name="notes" placeholder="Enter notes here..."
                    className="form-control" rows="5" value={notes} onChange={onTextChange}>
                </textarea>
                <br />
                <button className="btn btn-primary btn-block " onClick={onAddCandidateClick}>Add Candidate</button>
            </div>
        </div>

    );


}

export default AddCandidate;