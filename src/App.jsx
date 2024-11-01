
import React from "react";
import Profile from "./components/Profile";
import userData from "./userData.json";
import FriendList from './components/FriendList';
import friends from './friends.json';
import transactions from './transactions.json';
import TransactionHistory from './components/TransactionHistory';

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
      {/* Transactions Section */}
      <div className="transactions">
        <TransactionHistory items={transactions} />
      </div>
    </>
  );
};

export default App;
