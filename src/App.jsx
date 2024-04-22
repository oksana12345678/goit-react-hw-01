import Profile from "./components/Profile/Profile";
import userData from "./userData.json";
import "modern-normalize";
import friends from "./Friends.json";
import FriendList from "./components/FriendList/FriendListItem";
import transactions from "./transactions.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

export const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};
export default App;
