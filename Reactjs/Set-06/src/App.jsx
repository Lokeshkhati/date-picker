import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ProductCard from "./components/ProductCard";
import TodoItem from "./components/TodoItem";
import HabitTracker from "./components/HabitTracker";
import VideoList from "./components/VideosList";
import PostsList from "./components/PostsList";
import HabitTracker2 from "./components/HabitTracker2";
import ProjectsList from "./components/ProjectsList";
import UserProfile from "./components/UserProfile";
import VideoCard from "./components/VideoCard";
import UserCard from "./components/UserCard";

function App() {
  return (
    <div className="App">
      {/* <ProductCard /> */}
      {/* <TodoItem /> */}
      {/* <HabitTracker /> */}
      {/* <VideoList /> */}
      {/* <PostsList /> */}
      {/* <HabitTracker2 /> */}
      {/* <ProjectsList /> */}
      {/* <UserProfile /> */}
      {/* <VideoCard /> */}
      <UserCard />
    </div>
  );
}

export default App;
