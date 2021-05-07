import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { CandidateCounterContext } from '../CandidateCounterContext';

const CandidateDetails = () => {
    const { id } = useParams();
    const [candidate, setCandidate] = useState({ firstName: '', lastName: '', email: '', phoneNumber: '', status: '', notes: '' });
    const { updateCounts } = useContext(CandidateCounterContext);
    const [isLoading, setIsLoading] = useState(true);

    const { firstName, lastName, email, phoneNumber, notes, status } = candidate;

    useEffect(() => {
        const getCandidate = async () => {
            const { data } = await axios.get(`/api/candidate/getCandidate?id=${id}`);
            setCandidate(data);
            setIsLoading(false);
        }
        getCandidate();
    }, []);

    const onClick = e => {
        setCandidate({ ...candidate, status: e.target.name });
    }

    useEffect(() => {
        const updateCandidate = async () => {
            await axios.post('/api/candidate/updateCandidate', candidate);
            updateCounts();
        }
        updateCandidate();
    }, [candidate])

    return (
        <div className="row">
            <div className="col-md-6 offset-3">
                {isLoading && <h2>Loading...</h2>}
                {!isLoading && <div className="card card-body bg-light">
                    <h4>Name: {firstName} {lastName}</h4>
                    <h4>Email: {email}</h4>
                    <h4>Phone: {phoneNumber}</h4>
                    <h4>Status: {status}</h4>
                    <h4>Notes:</h4>
                    <p>{notes}</p>
                    <div>
                        {status == "Pending" && <button className="btn btn-primary" onClick={onClick} name="Confirmed">Confirm</button>}
                        {status == "Pending" && <button className="btn btn-danger ml-2" onClick={onClick} name="Refused">Refuse</button>}
                    </div>
                </div>}
            </div>
        </div>
    );
}

export default CandidateDetails;