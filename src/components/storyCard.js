import React from "react";

const storyCard = (storyItems) => {
  return (
    <div className="mainContainer">
      {storyItems.storyItems
        .sort((a, b) => parseFloat(a.score) - parseFloat(b.score))
        .map((item, index) => {
          const milliseconds = item.time * 1000;
          const dateObject = new Date(milliseconds);
          const timestamp = dateObject.toLocaleString();
          let randomUserImg = Math.floor(Math.random() * 10);
          return (
            <div className="storyCard" key={index}>
              <div className="cardHeader">
                <img
                  className="storyImg"
                  src={`https://source.unsplash.com/random/600x800/?img=${index}`}
                  alt="storyImage"
                />
              </div>
              <section className="cardOverlay">
                <div className="cardBody">
                  <h2>{item.title}</h2>
                  <a href={item.url}>Read More</a>
                  <p>Score: {item.score}</p>
                </div>
                <div className="cardFooter">
                  <div className="user">
                    <img
                      src={`https://i.pravatar.cc/40?img=${randomUserImg}`}
                      alt="userImage"
                      className="userImage"
                    />
                    <div className="userInfo">
                      <h5>{item.by}</h5>
                      {storyItems.users.map((user, index) => {
                        return user.id === item.by ? (
                          <h5>karma score: {user.karma}</h5>
                        ) : null;
                      })}
                      <small>{timestamp}</small>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          );
        })}
    </div>
  );
};

export default storyCard;
