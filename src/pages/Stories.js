import React, { useEffect, useState } from "react";
import { tenRandomStories, getUsers } from "../helpers/utils";
import StoryCard from "../components/storyCard";
const Stories = () => {
  const [storyItems, setStoryItems] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    tenRandomStories(setStoryItems);
    getUsers(storyItems, setUsers);
  }, []);
  return (
    <>
      <h1>Welcome to the stories from Hacker News</h1>
      <StoryCard storyItems={storyItems} users={users} />;
    </>
  );
};
export default Stories;
