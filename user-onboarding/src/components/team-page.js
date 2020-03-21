import React from 'react';

const TeamPage = (props) => {

    console.log(props)

    return (
        <div className="team-page-container">
            {props.users.map((user) => {
                return (
                    <div className="user-container" key={user.id}>
                        <h3 className="user-container__name">{user.name}</h3>
                        <p className="user-container__email">{user.email}</p>
                        <p className="user-container__password">{user.password}</p>
                    </div>
                )
            })}
        </div>
    )
}

// still need to add way to recognize the boolean from TOS checkbox

export default TeamPage