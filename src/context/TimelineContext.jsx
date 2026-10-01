"use client";
import { createContext, useContext, useState } from "react";

const TimelineContext = createContext(null);

export const TimelineProvider = ({ children }) => {
    const [entries, setEntries] = useState([]);

    const addEntry = ({ type, friendId, friendName }) => {
        const newEntry = {
            id: Date.now(),
            type,
            friendId,
            friendName,
            date: new Date().toISOString(),
        };
        setEntries((prev) => [newEntry, ...prev]);
    };

    return (
        <TimelineContext.Provider value={{ entries, addEntry }}>
            {children}
        </TimelineContext.Provider>
    );
};

export const useTimeline = () => useContext(TimelineContext);