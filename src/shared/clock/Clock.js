import React, {useEffect, useState} from "react";

function Clock(){
    const [hrs, setHrs] = useState(0);
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);


    const getAllTime = ()=>{
        const today = new Date();
        setSec(String(today.getSeconds()).padStart(2, "0"));
        setMin(String(today.getMinutes()).padStart(2, "0"));
        setHrs(String(today.getHours()).padStart(2, "0"));
    }

    useEffect(()=>{
        getAllTime();
        const intervalID = setInterval(getAllTime, 1000);
        return ()=>{
            clearInterval(intervalID)
        }
    },[])

    return(
        <div className="clock">
            <div id="hrs" className="clock-text">{hrs}</div><span>:</span>
            <div id="mint" className="clock-text">{min}</div><span>:</span>
            <div id="sec"  className="clock-text">{sec}</div>
        </div>
    )
}
export default Clock;
