import React from "react";
import Identify from "./Identify";
class UserInfo extends React.Component{
    constructor(props){
        super(props)
        console.log(this.props.name+'Child Contructor')
    }
    componentDidMount(){
        console.log(this.props.name+'Child ComponentDidMount')
    }
    render(){
        console.log(this.props.name+'Child Render')
        return(
            <div>
                <h1>UserInfo of {this.props.name}</h1>
                <Identify/>
            </div>
        )
    }
}
export default UserInfo