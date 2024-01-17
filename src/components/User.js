import { useState } from "react"
const User = (props)=>{
    const {name,location} = props
    const [count,setCount] = useState(0)
    const [count2,setCount2] = useState(1)
    return(
        <div className="user-card">
            <h1>Count1:{count}</h1>
            <h2>Count2:{count2}</h2>
            <h2>{name}</h2>
            <h3>Location:{location}</h3>
            <h4>Contact:meghna825@gmail.com</h4>

        </div>
    )
}
export default User