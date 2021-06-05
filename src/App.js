// import logo from './logo.svg';
// import './App.css';
import CardUser from './components/User/cardUser';
import user from './user.json';
import statisticalData from './statistical-data.json';
import Statistics from './components/Statistic/Statistics';
import friends from './friends.json';
import FriendList from './components/Friend/FriendList';
import transactions from './transactions.json';
import TransactionHistory from './components/Transactions/TransactionHistory';

const App = () => (
  <>
    <CardUser
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />
    <Statistics title={statisticalData.title} stats={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </>
);

export default App;
