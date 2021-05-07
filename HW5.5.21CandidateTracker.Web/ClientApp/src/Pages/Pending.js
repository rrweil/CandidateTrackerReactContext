import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CandidateTableRow from '../components/CandidateTableRow';

const Pending = () => {
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        const getCandidates = async () => {
            const { data } = await axios.get(`/api/candidate/getCandidates?status=pending`);
            setCandidates(data);
        }
        getCandidates();
        
    }, []);


    return (
        <table className="table table striped table-bordered">
            <thead>
                <tr>
                    <th></th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {candidates.length && candidates.map(c => {
                    console.log(c)
                    return (
                        <na
                        />
                        
                    );
                })}
            </tbody>
        </table>
    );
}

export default Pending;

// {candidates.length && candidates.map(c => {
//     return (
//         <CandidateTableRow 
//         candidate={c} 
//         key={c.id}
//         />
//     );
// })}