import { DevelopmentPlug } from "../../components/plug"
import React from 'react';
import { useSelector } from 'react-redux';

export const ProfilePage = () => {
  const user = useSelector((state) => state.auth.user);
  const userName = user?.firstName || user?.username;

  return (
     <div>
      <h1>Hello, {userName}</h1>
      <DevelopmentPlug title="Profile Page" />
     </div>
  )
}