import { getUnixTime, parseISO, formatDuration } from 'date-fns';
import { intervalToDuration } from 'date-fns/esm';
import { useState, useEffect } from "react";


// check that stays in sync when moving between diff pages

function Timer({ now, eventTime }) {

    // maybe setting original now here instead of in reminder will allow clock to be more accurate? 

    const unixEndTime = getUnixTime(parseISO(eventTime));
    const unixNowTime = getUnixTime(now);

    const interval = intervalToDuration({
        start: new Date(now),
        end: new Date(eventTime)
    })

    const [timeDiff, setTimeDiff] = useState(interval);
  
    useEffect(() => {
        const interval = setInterval(() => {
                if (unixEndTime < unixNowTime) {
                    setTimeDiff("Time's up!")
                } else {
                    setTimeDiff(intervalToDuration({
                        start: new Date(),
                        end: new Date(eventTime)
                    }))
                }
           
        }, 1000)
        return () => clearInterval(interval)
    }, [])
  
  
    return (
        <>

            <p>
                {unixEndTime < unixNowTime
                    ? "Time's up!" 
                    : `${formatDuration(timeDiff, {delimiter: ', '})}`
                }
            </p>
        
        </>
    )

}

export default Timer;