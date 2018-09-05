import React, { Component} from 'react'

class Avatar extends Component {
    render(){
        return (
            <img src= {this.props.avatarUrl} alt={this.avatarName}/>
        )
    }
}

export default Avatar;