import React from 'react';
import avatar from '../images/profile.jfif';

function Profile({ name, job }) {
  return (
    <div className="flex items-center bg-gray-200 rounded-xl py-1">
      <img className="w-8 h-8 rounded-full mx-2" src={avatar} alt="avata" />
      <div className="flex flex-col mx-2">
        <div className="font-medium text-sm">{name}</div>
        <span className="text-gray-400 text-xs">{job}</span>
      </div>
    </div>
  );
}

export default Profile;
