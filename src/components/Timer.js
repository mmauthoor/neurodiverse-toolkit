import { getUnixTime, parseISO } from 'date-fns';
import { intervalToDuration } from 'date-fns/esm';
import { useState, useEffect } from "react";


// issues to deal with: timers that go down to 0 

function Timer({ now, eventTime }) {

    const unixEndTime = getUnixTime(parseISO(eventTime));
    const unixNowTime = getUnixTime(now);

    const interval = intervalToDuration({
        start: new Date(now),
        end: new Date(eventTime)
    })

    const [timeDiff, setTimeDiff] = useState(interval);
  
    useEffect(() => {
        const interval = setInterval(() => {
            setTimeDiff(intervalToDuration({
                start: new Date(),
                end: new Date(eventTime)
            }))
           
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         if (unixEndTime !== getUnixTime(new Date())) {
    //             setTimeDiff(intervalToDuration({
    //                 start: new Date(),
    //                 end: new Date(eventTime)
    //             }))
    //         } else { 
    //             setTimeDiff("Time's up")
    //         }
           
    //     }, 1000)
    //     return () => clearInterval(interval)
    // }, [])
   
  
    return (
        <>
            <p> {timeDiff.months} months, {timeDiff.days} days, {timeDiff.hours} hours, {timeDiff.minutes} minutes, and {timeDiff.seconds} seconds to go  </p>
        
        </>
    )

}

export default Timer;