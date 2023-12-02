let profilePic = document.getElementById("profile-pic");
let inputFile = document.getElementById("input-file");

inputFile.onchange = function () {
    profilePic.src = URL.createObjectURL(inputFile.files[0]);
}


import React, { useState } from 'react';

const ProfilePicUploader = () => {
    const [profilePicSrc, setProfilePicSrc] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            setProfilePicSrc(URL.createObjectURL(file));
        }
    };

    return (
        <div>
            <img id="profile-pic" src={profilePicSrc} alt="Profile" />
            <input type="file" id="input-file" onChange={handleFileChange} />
        </div>
    );
};

export default ProfilePicUploader;
