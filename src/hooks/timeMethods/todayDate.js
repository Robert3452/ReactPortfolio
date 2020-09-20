import moment from 'moment';
import { useEffect, useState } from 'react';


const putToday = () => {
    const [currentTime, setCurrentTime] = useState({
        weekDay: "",
        date: "",
        time: ""
    });
    useEffect(() => {
        // var t = moment().locale('en').format('dddd DD/MM/YYYY hh:mm A')
        var weekDay = moment().locale('en').format('dddd')
        var date = moment().locale('en').format('DD/MM/YYYY ')
        var time = moment().locale('en').format('hh:mm A')

        setInterval(setCurrentTime({
            weekDay, date, time
        }), 1000);

    }, [])
    return currentTime;

}


export default putToday;