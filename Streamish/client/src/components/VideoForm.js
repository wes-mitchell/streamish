import { useState } from "react";
import { addVideo } from "../modules/videoManager.js";
import { useNavigate } from "react-router-dom";

const VideoForm = ( getVideos ) => {
// const [isLoading, setIsLoading] = useState(true)
const [video, setVideo] = useState({
  title: '',
  description: '',
  url: '' 
})

const navigate = useNavigate()

const handleFieldChange = (evt) => {
  const newVideo = {...video}
  let selectedVal = evt.target.value
  newVideo[evt.target.id] = selectedVal
  setVideo(newVideo)
}

const handleSaveClick = (evt) => {
  evt.preventDefault();
  addVideo(video)
  .then(() => navigate('/'))
  
}


return (
  <div className="videoFormContainer">
  <form className="videoForm">
    <h2 className="videoForm__title">Add A video</h2>
    <fieldset>
      <div className="videoName">
        <label htmlFor="videoName">Video Title:</label>
        <input type="text" id="title" onChange={handleFieldChange} required autoFocus className="form-control" placeholder="Video Title" value={video.title} />
      </div>
    </fieldset>
    <fieldset>
      <div className="videoDescription">
        <label htmlFor="videoDescription">Description:</label>
        <input type="text" id="description" onChange={handleFieldChange} required autoFocus className="form-control" placeholder="Description for video" value={video.description} />
      </div>
    </fieldset>
    <fieldset>
      <div className="videoUrl">
        <label htmlFor="url">Video URL: </label>
        <input type="text" id="url" onChange={handleFieldChange} required autoFocus className="form-control" placeholder="Video URL"  />
      </div>
    </fieldset>
    <button type="button" onClick={handleSaveClick} className="saveVideoButton">Save video</button>
  </form>
  </div>
  );
};

export default VideoForm;