import Profile from './components/task_1';
import Statistics from './components/task_2';
import FriendList from './components/task_3';
import user from './user.json';
import statisticalData from './statistical-data.json';
import friends from './friends.json';

export default function App() {
  return (
    <div>
      <Profile
        key={user.tag}
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />

      <FriendList friends={friends} />
    </div>
  );
}
