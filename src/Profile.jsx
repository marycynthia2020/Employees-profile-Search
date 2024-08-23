import React, { useState } from "react";
import { profileList } from "./Data";
import "./App.css";
import Search from "./Search";

const Profile = () => {
  const [profile, setProfile] = useState(profileList);

  const inputValue = (value) => {
    const filteredProfile = profileList.filter(
      (user) =>
        user.firstName.toLowerCase().startsWith(value) ||
        user.lastName.toLowerCase().startsWith(value)
    );
    setProfile(filteredProfile);
  };

  const employeesDetails = profile.map((person) => {
    return (
      <div key={person.id} className="container">
        <img src={person.picture} alt={person.firstName} />
        <div>
          <p>{person.id}</p>
          <p>
            {person.title}. {person.firstName} {person.lastName}
          </p>
        </div>
      </div>
    );
  });
  return (
    <div>
      <Search inputValue={inputValue} />
      <div className="profile-container">{employeesDetails}</div>
    </div>
  );
};

export default Profile;
