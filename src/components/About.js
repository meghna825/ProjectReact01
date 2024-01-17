import User from './User.js';
import UserClass  from './UserClass.js';
import React from 'react';
import UserInfo from './UserInfo.js'
class About extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
        console.log('Parent Constructor')
    }
    componentDidMount(){
        console.log('Parent ComponentDidMount')
        this.setState({
            count:1
        })
    }
    componentDidUpdate(){
        console.log('Parent ComponentDidUpdate')
    }
    render(){
        console.log('Parent Render')
        return (
            <div>
                <h1>About Page {this.state.count}</h1>
                <p>This is company description</p>
                {/* <User name ={'Meghna'} location = {'Jaipur'}/> */}
                <UserClass name ={'First'} location = {'Jaipur'}/>
          
            </div>
        )
    }
}
// const About = ()=>{
// return (
//     <div>
//         <h1>About Page</h1>
//         <p>This is company description</p>
//         {/* <User name ={'Meghna'} location = {'Jaipur'}/> */}
//         <UserClass name ={'Meghna'} location = {'Jaipur'}/>
//     </div>
// )
// }
export default About