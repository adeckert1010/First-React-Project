    import React from 'react';

    function MyInfo(){
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay
        const styles = {
            fontsize: 30
        }

        if(hours<12) {
            timeOfDay="am"
            styles.color = "#04756F"
            styles.backgroundColor = "#BBB"
        }else if(hours >= 12) {
            timeOfDay="pm"
            styles.color = "#BBB"
            styles.backgroundColor = "#333"
        }

        

        
    return(
        <div >
            <p>This is the info about me: </p>
                <ul style={styles}>
                    <li>Name: Allen Deckert</li>
                    <li>Age: 27</li>
                    <li>Current time is: {(date.getHours() + 24) % 12 || 12}:{(date.getMinutes()<10?'0' : '' )+ date.getMinutes()} {timeOfDay}</li>
                    <li>Interests: Coding, hiking, gaming, skateboarding</li>
                </ul>
        </div>
    )
 }

    export default MyInfo;