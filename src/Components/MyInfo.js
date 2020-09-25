    import React from 'react';

    function MyInfo(){
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay

        if(hours<12) {
            timeOfDay="am"
        }else {
            timeOfDay="pm"
        }

        const styles = {
            color: "#FF8C00", 
            backgroundColor: "#FF2D00"
        }

    return(
        <div >
            <p>This is the info about me: </p>
                <ul style={styles}>
                    <li>Name: Allen Deckert</li>
                    <li>Age: 27</li>
                    <li>Current time is: {(date.getHours() + 24) % 12 || 12}:{date.getMinutes()} {timeOfDay}</li>
                    <li>Interests: Coding, hiking, gaming, skateboarding</li>
                </ul>
        </div>
    )
 }

    export default MyInfo;