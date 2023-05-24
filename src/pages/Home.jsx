import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import axios from "axios";
import {BASE_URL} from "../constant"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = ({type}) => {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`${BASE_URL}/video/${type}`);
      setVideo(res.data);
    };
    fetchVideos();
  }, [type]);

  return (
    <Container>
      {video.map((video) => (
        <Card key={video._id} video={video}/>
      ))}
    </Container>
  );
};

export default Home;
