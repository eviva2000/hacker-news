import axios from "axios";
export const tenRandomStories = async (setStoryItems) => {
  try {
    let n = Math.floor(Math.random() * 10);
    console.log("n", n);
    const response = await axios.get(
      "https://hacker-news.firebaseio.com/v0/topstories.json/"
    );
    let limit = response.data.slice(n, n + 10);
    let items = [];

    // Looping through the stories ids
    limit.map((storyId, index) => {
      const fetchItems = async () => {
        const data = await fetch(
          `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`
        );
        const story = await data.json();
        // console.log(story);
        items = [story, ...items];
        setStoryItems(items);
        // console.log(storyItems);
      };
      fetchItems();
    });
  } catch (err) {
    console.log(err);
  }
};

export const getUsers = async (storyItems, setUsers) => {
  try {
    let tenUsers = [];
    storyItems.map((storyItem, ind) => {
      const fetchUsers = async () => {
        const data = await fetch(
          `https://hacker-news.firebaseio.com/v0/user/${storyItem.by}.json`
        );
        const user = await data.json();
        // console.log("user", user);
        tenUsers = [user, ...tenUsers];
        setUsers(tenUsers);
        console.log("allusers", tenUsers);
      };
      fetchUsers();
    });
  } catch (error) {}
};
