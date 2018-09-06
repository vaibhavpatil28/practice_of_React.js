import React, { Component} from 'react'

class Avatar extends Component {
    render(){
        return (
            <img width="200" height="200" src= {this.props.avatarUrl} alt={this.avatarName}/>
        )
    }
}

export default Avatar;