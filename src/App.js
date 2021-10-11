import Profile from './components/task_1';
import user from './user.json';

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
    </div>
  );
}
