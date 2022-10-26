import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../request";

const Home = () => {
  return (
    <div>
      <Main />
      <Row rowID="1" title="UpComing" fetchURL={requests.requestUpcoming} />
      <Row rowID="2" title="Popular" fetchURL={requests.requestPopular} />
      <Row rowID="3" title="On Air TV" fetchURL={requests.requestOnAirTV} />
      <Row rowID="4" title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row
        rowID="5"
        title="Now Playing"
        fetchURL={requests.requestNowPlaying}
      />
    </div>
  );
};

export default Home;
