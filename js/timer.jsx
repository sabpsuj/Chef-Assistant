import React from 'react';

class Timer extends React.Component{
    render(){
        return(
            <div>
                <div className="clock">
                    <div className="clock-face">
                        <div className="hand hour-hand"></div>
                        <div className="hand min-hand"></div>
                        <div className="hand second-hand"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Timer