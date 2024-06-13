import React, { useEffect, useState } from 'react';

function Timeline() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    // 仮のデータを使用
    setTweets([
      { id: 1, text: 'First tweet' },
      { id: 2, text: 'Second tweet' }
    ]);
  }, []);

  return (
    <section>
      <h2>Twitter Timeline</h2>
      <ul>
        {tweets.map(tweet => (
          <li key={tweet.id}>{tweet.text}</li>
        ))}
      </ul>
    </section>
  );
}

export default Timeline;
