import {useEffect, useState} from "react"

const useOnlineStatus = ()=>{
    // Finding user status using eventListener
    const [onlineStatus,setOnlineStatus] = useState(true)
    useEffect(()=>{
        window.addEventListener('offline',()=>{
            setOnlineStatus(false)
        })
        window.addEventListener('online',()=>{
            setOnlineStatus(true)
        })
    },[])
    return onlineStatus

}
export default useOnlineStatus