import React from 'react'

function Joke(props){


    return(
        
        <div>
            <h2 style={{display: !props.question && "none"}}>{props.question}</h2>
            <h2 style={{color: !props.question && "#888"}}>{props.punchLine}</h2>
            
        </div>
        
    )
}

export default Joke