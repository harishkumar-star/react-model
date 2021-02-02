import logo from './logo.svg';
import './App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import ClassCounter from './reactHooks/ClassCounter';
import FuntionHookCounter from './reactHooks/FuntionHookCounter';
import HookCounterTwo from './reactHooks/HookCounter2';
import HookObjectState from './reactHooks/HookObjectState';
import ArrayHook from './reactHooks/ArrayHook';
import HookCounterOne from './useEffect/HookCounterOne';

function App() {
  return (
    <div className="App">
      <HookCounterOne />
      {/* <ArrayHook /> */}
      {/* <HookObjectState /> */}
      {/* <HookCounterTwo /> */}
      {/* <FuntionHookCounter /> */}
      {/* <ClassCounter /> */}
      {/* <PostForm></PostForm> */}
      {/* <PostList /> */}
    </div>
  );
}

export default App;
