import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CandidateTableRow from '../components/CandidateTableRow';
import useToggle from '../Hooks/useToggle';

const Confirmed = () => {
    const [candidates, setCandidates] = useState([]);
    const [showNotes, setShowNotes] = useToggle();
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const getCandidates = async () => {
            const { data } = await axios.get(`/api/candidate/getCandidates?status=confirmed`);
            setCandidates(data);
            setIsLoading(false);
        }
        getCandidates();

    }, []);

    return (
        <>
            <h1>Confirmed</h1>
            <button className="btn btn-success" onClick={setShowNotes}>{showNotes ? 'Show Notes' : 'Hide Notes'}</button>
            <table className="table table striped table-bordered">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        {!showNotes && <th>Notes</th>}
                    </tr>
                </thead>
                {isLoading && <h2>Loading...</h2>}
                {!isLoading && <tbody>
                    {!!candidates.length && candidates.map(candidate => <CandidateTableRow candidate={candidate} key={candidate.id} showNotes={showNotes} />)}
                </tbody>
                }
            </table>
        </>
    );
}

export default Confirmed;
