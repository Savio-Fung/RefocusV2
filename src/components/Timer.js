import React, { useEffect, useState } from 'react'

const Timer = () =>{
    const [timeLeft, setTimeLeft] = useState(1500);
    const [paused, setPaused] = useState(true);
    const [working, setWorking] = useState(true);
    useEffect(() => {
        if (!timeLeft){ 
            if(working){
                //SET TO BREAK TIME LIMIT
                setWorking(!working);
                setTimeLeft(300);
            }
            else{
                //SET TO WORKING TIME LIMIT
                setWorking(!working);
                setTimeLeft(1500);
            }
            return;};
         const intervalId = setInterval(() => {
           if(!paused){
          setTimeLeft(timeLeft - 1);
         }
      }, 1000);
        return () => clearInterval(intervalId);
      }, [timeLeft, paused, working]);
    
    const timeToString = (timeLeft) =>{
        let value = "";
        const minutes = Math.floor((timeLeft)/60);
        const seconds = Math.floor((timeLeft-(minutes*60)));
        value = ( (minutes<10)?("0"):("") ) + minutes + ":" +( (seconds<10)?("0"):("") )+ seconds;
        return value;
    }
    const pauseHandler = (e) =>{
       e.preventDefault();
       setPaused(!paused);
    }
    const resetHandler = (e) =>{
       e.preventDefault();
       setTimeLeft(1500);
       setPaused(!paused);
    }
    return (
        <div className="timer w-75 mx-auto">
            <h1 className={(working)?("working"):("break")}>{(working)?("WORKING"):("BREAK")}</h1>
            <div>{timeToString(timeLeft)}</div>
            <button onClick ={pauseHandler}>
               {(paused)?("START"):("STOP")}
            </button>
            <button onClick ={resetHandler}>
               RESET
            </button>
        </div>
    )
};
export default Timer;