import React, { useContext } from "react";
import styled from "styled-components";
import { MainHeading } from "../styles/headings";
import CardForm from "./Card/CardForm";
import CardListItem from "./Card/CardListItem";
import { TweetContext } from "../App";

function Main({ children }) {
  const [tweets, setTweets] = useContext(TweetContext);

  function addNewTweet(tweet) {
    const tweetsCopy = [...tweets];
    tweetsCopy.push(tweet);
    setTweets(tweetsCopy);
  }

  console.log(tweets);
  return (
    <StyledMain>
      <MainHeading>
        Birdraft<span>Rank and organize your Twitter drafts</span>
      </MainHeading>
      <CardForm isForm addNewTweet={addNewTweet} tweetsLenght={tweets.length} />
      {tweets.length &&
        tweets.map(tweet => (
          <CardListItem
            key={tweet.id}
            id={tweet.id}
            tweet={tweet.tweet}
            rating={tweet.rating}
          />
        ))}
    </StyledMain>
  );
}

const StyledMain = styled.div`
  grid-column: span 4;
  background: #eee;
  padding: 1.5rem;
`;

export default Main;
