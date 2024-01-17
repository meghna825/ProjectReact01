import React from 'react';
class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state={
           userInfo:{
            name:'DummyName',
            location:'DummyLocation',
            avatar_url:""
           } 
        }
        console.log('Child Constructor')
    }
    async componentDidMount(){
        console.log("child ComponentDidMount")
       const data = await fetch('https://api.github.com/users/meghna825')
       const json = await data.json()
       setTimeout(()=>{
        this.setState({
            userInfo:json
           })
       },2000)
       
       console.log("json",json)
    }
    componentDidUpdate(){
        console.log("CHild Component Did Upate")
    }
    render(){
     console.log("Child Render")
        const {name,location,avatar_url} = this.state.userInfo
       
        return(
            <div className="user-card">
                <h2>{name}</h2>
                <h3>Location:{location} </h3>
                <img src ={avatar_url} alt='Picture'/>
                <h4>Contact:meghna825@gmail.com</h4>

        </div>
        )
    }
}
export default UserClass