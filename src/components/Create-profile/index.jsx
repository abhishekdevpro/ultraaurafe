import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import Create from "./Profile";

const Profile = () => {
  return (
    <>
      <Breadcrumb title="Create Your Profile " subtitle="Create profile " isDbbl="profile" />
      
      <Create />
      
    </>
  );
};

export default Profile;
