
import React from "react";
import Profile from "./components/Profile";
import userData from "./userData.json";
import FriendList from './components/FriendList';
import friends from './friends.json';

const App = () => {
  return (
    <>
      {/* Profile Section */}
      <div className="profile">
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
        />
      </div>
      {/* FriendsList Section */}
      <div className="friends">
         <FriendList friends={friends} />
        
      </div>
    </>
  );
};

export default App;
