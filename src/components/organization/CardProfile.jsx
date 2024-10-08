import React from 'react';

const CardProfile = ({ profile }) => {
    return (
        <div class="card shadow-md rounded-md">
            <div class="image-box rounded-sm shadow-lg">
                <img src={profile.photo} alt="" />
            </div>
            <div class="text-box">
                <div class="name"><span>{profile.name} {profile.lastName}</span></div>
                <div class="username"><span>{profile.position}</span></div>
            </div>
        </div>
    )

}

export default CardProfile;