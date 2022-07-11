import React from "react";
import { useState,  useEffect} from "react";
import { useNavigate, useParams} from "react-router-dom";
import { getVideo } from "../modules/videoManager";
import { updateVideo } from "../modules/videoManager";

export const VideoEditForm = () => {
const[isLoading, setIsLoading] = useState(true)
const [video, setVideo] = useState(
  {
    title: '',
    description: '',
    url: ''
  }
);
const navigate = useNavigate();
const { id } = useParams()

const handleFieldChange = evt => {
  const stateToChange = { ...video }
  stateToChange[evt.target.id] = evt.target.value
  setVideo(stateToChange)
}

const handleUpdate = (evt) => {
  evt.preventDefault()

  const editedVideo = {
    id: id,
    title: video.title,
    description: video.description,
    url: video.url
  }

  if (editedVideo.title === "" || editedVideo.description === '' || editedVideo.url === '') {
    window.alert("whoops, fill out the whole form.");
    setIsLoading(false)
  } else {
    setIsLoading(true)
    updateVideo(editedVideo)
    .then(() => navigate("/"))
  }
}


useEffect(() => {
  getVideo(id)
  .then(res => setVideo(res))
  .then(setIsLoading(false))
}, []);

return (
  <>
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
        <input type="text" id="url" onChange={handleFieldChange} required autoFocus className="form-control" placeholder="Video URL"  value={video.url}/>
      </div>
    </fieldset>
    <button type="button" onClick={handleUpdate} className="saveVideoButton">Update video</button>
  </form>
  </div>
  </>
  );
};