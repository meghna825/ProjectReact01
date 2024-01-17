import React from "react";
class Identify extends React.Component{
    constructor(props){
        super(props)
        console.log("Sub-child of Child Constructor")
    }
    componentDidMount(){
        console.log('Sub-child of Child componentDidMount')
    }
    render(){
        console.log('Sub-child of Child Render')
        return(
            <div>
                <h1>Identify the users</h1>
            </div>
        )
    }
}
export default Identify