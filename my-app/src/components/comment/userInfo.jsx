import React from 'react';
import Avatar from './avatar';


function UserInfo(props) {
    return(
        <div className="userInfo text-center">
          <Avatar avatarUrl={props.author.avatarUrl} avatarName="React" />
          <div className="userInfo-user">{props.author.name}</div>
        </div>
    );
}

export default UserInfo;