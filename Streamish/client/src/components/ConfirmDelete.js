import React from "react";
import { useState,  useEffect} from "react";
import { useNavigate, useParams} from "react-router-dom";
import { getVideo } from "../modules/videoManager";
import { deleteVideo } from "../modules/videoManager";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export const ConfirmDelete = () => {
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

  const handleConfirm = (evt) => {
    evt.preventDefault()
    if (evt.target.value === 'yes') {
      setIsLoading(true)
      deleteVideo(parseInt(id))
      .then(() => navigate("/"))
    } else if (evt.target.value === "no") {
      navigate("/")
    }
  }

  useEffect(() => {
    getVideo(id)
    .then(res => setVideo(res))
    .then(setIsLoading(false))
  }, []);

  return (
    <Form onChange={handleConfirm}>
    <Label for="cars">Delete the Video?</Label>
    <br/>

    <select name="video" id="videoConfirm">
      <option value="">- - -</option>
      <option value="yes">Yes</option>
      <option value="no">Whoops, nah dawg.</option>
    </select>
    </Form>
  )
}