import React, { Component} from 'react'
import Avatar from './avatar'

class Comment extends Component {
    render(){
        return (
            <Avatar avatarUrl="./avatar.jpg"  avatarName="React" ></Avatar>
        );
    }
}

export default Comment;