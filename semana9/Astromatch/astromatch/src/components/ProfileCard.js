import React from "react";


const ProfileCard = (props) => {
  const profile = props.profile


  return (
   <div>
   
    <img src={profile.photo} alt = "profile-foto"></img>
    
       <div>
       <p>{profile.name}</p>
       <p>{profile.age}</p>
       <p>{profile.bio}</p>
       </div>
      
    </div>
  )
};

export default ProfileCard;