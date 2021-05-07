import React, {createContext, useState, useEffect, useContext} from 'react';
import axios from 'axios';

const CandidateCounterContext = createContext();

const CandidateCounterContextComponent = ({children}) => {
    const [pendingCount, setPendingCount] = useState(0);
    const [confirmedCount, setConfirmedCount] = useState(0);
    const [refusedCount, setRefusedCount] = useState(0);
    const [draftCandidate, setDraftCandidate] = useState({});

    const updateCounts = async () => {
        const {data} = await axios.get('/api/candidate/getCounts');
        setPendingCount(data[0]);
        setConfirmedCount(data[1]);
        setRefusedCount(data[2]);
    }

    useEffect(() => {
        updateCounts();
    });

    return (
        <CandidateCounterContext.Provider value={{pendingCount, confirmedCount, refusedCount, updateCounts, draftCandidate, setDraftCandidate}}>
            {children}
        </CandidateCounterContext.Provider>
    )
}

export {CandidateCounterContext, CandidateCounterContextComponent};
