import React from 'react';
import {Link } from 'react-router-dom';

const PendingTableRow = ({candidate}) => {
    const {id, firstName, lastName, phoneNumber, email} = candidate;
    return (<tr>
        <td>
            <Link to={`/candidateDetails/${id}`}>
                <button className="btn btn-link">View Details</button>
            </Link>
        </td>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{phoneNumber}</td>
        <td>{email}</td>
    </tr>);
}


export default PendingTableRow;