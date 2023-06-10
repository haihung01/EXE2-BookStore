import React, { useState, useEffect } from 'react';
import '../../styles/clock.scss'

const Clock = () => {

    const [days, setDay] = useState()
    const [hours, setHours] = useState()
    const [minutes, setMinutes] = useState()
    const [seconds, setSeconds] = useState()

    let interval;

    const countDown = () => {
        const destination = new Date('May 23 , 2023').getTime()//ms
        // console.log("🚀 ~ file: Clock.jsx:14 ~ countDown ~ destination:", destination)
        // const now = new Date().get()
        // console.log("🚀 ~ file: Clock.jsx:16 ~ countDown ~ now:", now)


        interval = setInterval(() => {
            const now = new Date().getTime()
            const different = destination - now
            // console.log("🚀 ~ file: Clock.jsx:20 ~ interval=setInterval ~ different:", different)

            const days = Math.floor(different / (1000 * 60 * 60 * 24))
            // console.log("🚀 ~ file: Clock.jsx:20 ~ interval=setInterval ~ days:", days)

            const hours = Math.floor(different % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))

            const minutes = Math.floor(different % (1000 * 60 * 60) / (1000 * 60))

            const seconds = Math.floor(different % (1000 * 60) / 1000)

            if (different < 0) {
                clearInterval(interval.current)

                setDay(0)
                setHours(0)
                setMinutes(0)
                setSeconds(0)
            }
            else {
                setDay(days)
                setHours(hours)
                setMinutes(minutes)
                setSeconds(seconds)
            }
        })
        // console.log("🚀 ~ file: Clock.jsx:42 ~ interval=setInterval ~ destination:", destination)
    }

    useEffect(() => {
        countDown()
    }, [])


    return (
        <div className='clock_wrapper d-flex align-items-center gap-3'>
            <div className="clock_data d-flex align-items-center gap-3">
                <div className='text-center'>
                    <h1 className='text-white fs-3 mb-2'>{days} </h1>
                    <h5 className='text-white fs-6'>Days</h5>
                </div>
                <span className='text-white fs-3'>:</span>
            </div>

            <div className="clock_data d-flex align-items-center gap-3">
                <div className='text-center'>
                    <h1 className='text-white fs-3 mb-2'>{hours} </h1>
                    <h5 className='text-white fs-6'>Hours</h5>
                </div>
                <span className='text-white fs-3'>:</span>
            </div>

            <div className="clock_data d-flex align-items-center gap-3">
                <div className='text-center'>
                    <h1 className='text-white fs-3 mb-2'>{minutes} </h1>
                    <h5 className='text-white fs-6'>Minutes</h5>
                </div>
                <span className='text-white fs-3'>:</span>
            </div>

            <div className="clock_data d-flex align-items-center gap-3">
                <div className='text-center'>
                    <h1 className='text-white fs-3 mb-2'>{seconds} </h1>
                    <h5 className='text-white fs-6'>Seconds</h5>
                </div>
            </div>
        </div>
    );
};

export default Clock;