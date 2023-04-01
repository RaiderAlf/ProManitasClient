import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
    const {user, isAuthenticated, isLoading, logout} = useAuth0()

    if(isLoading){
        return <div>Loading...</div>
    }

    return (
        isAuthenticated && (
            <div>
                <div>
                <img src={user.picture} alt={user.name}/>
                <h2>{user.name}</h2>
                <p>Email: {user.email}</p>
                </div>

                <div>
                <button onClick={()=> logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
                </div>
                
            </div>
        )
    )
}

export default Profile;