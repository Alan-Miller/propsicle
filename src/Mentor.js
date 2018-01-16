import React from 'react';

export default function Mentor(props) {
    return (
        <div
            className="mentor"
            style={props.mentor.firstName === props.selectedMentor ? { background: "indianred" } : null}
            onClick={() => props.selectMentor(props.mentor.firstName)}
        >
            {props.mentor.firstName} {props.mentor.lastName}
        </div>
    )
}