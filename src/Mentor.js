import React from 'react';

export default function Mentor(props) {
    console.log('props:', props)

    return (
        <div
            className="mentor"
            onClick={() => {props.selectMentor(props.mentor.firstName)}}
        >
            {props.mentor.firstName} {props.mentor.lastName}
        </div>
    )
}