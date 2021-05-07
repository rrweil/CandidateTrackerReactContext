import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PendingTableRow from '../components/PendingTableRow';

const Pending = () => {
    const [candidates, setCandidates] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getCandidates = async () => {
            const { data } = await axios.get(`/api/candidate/getCandidates?status=pending`);
            setCandidates(data);
            setIsLoading(false);
        }
        getCandidates();

    }, []);


    return (
        <table className="table table-striped table-bordered table-hover">
            <thead>
                <tr>
                    <th></th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                </tr>
            </thead>
            {isLoading && <h2>Loading...</h2>}
            {!isLoading &&
                <tbody>
                    {
                        !!candidates.length && candidates.map(candidate => <PendingTableRow candidate={candidate} key={candidate.id} />)
                    }
                </tbody>
            }
        </table>
    );
}

export default Pending;

