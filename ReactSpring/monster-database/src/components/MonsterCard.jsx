import React from "react";

export default function MonsterCard({firstName, lastName, age, type, moreInfo})
{
    return (
        <div className="monster-card">
            <h1>{firstName} {lastName}</h1>
            <p>Age: {age}</p>
            <p>Type: {type}</p>
            <p>More Info: {moreInfo}</p>
        </div>
    );
}