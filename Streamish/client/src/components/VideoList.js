import React, { useEffect, useState } from "react";
import Video from './Video';
import { getAllVideosWithComments, searchVideosByTitle } from "../modules/videoManager";
import VideoForm from "./VideoForm";

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = () => {
    getAllVideosWithComments()
    .then(videos => setVideos(videos));
  };

  const searchVideos = (query) => {
    searchVideosByTitle(query)
    .then(videos => setVideos(videos));
  }

  const handleFieldChange = (e) => {
    searchVideos(e.target.value)
  }
  useEffect(() => {
    getVideos();
  }, []);

  return (
    <>
    <h3>Search For a Video</h3>
    <input type="text" className="search" onChange={handleFieldChange}/>
    <div className="container">
      <div className="row justify-content-center">
        {videos.map((video) => (
          <Video video={video} key={video.id} />
        ))}
      </div>
    </div>
    </>
  );
};

export default VideoList;