import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

const Video = ({ video }) => {
  return (
    <Card >
      <p className="text-left px-2">Posted by: {video.userProfile.name}</p>
      <CardBody>
        <iframe className="video"
          src={video.url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen />

        <p>
          <Link to={`/videos/${video.id}`}>
            <strong>{video.title}</strong>
          </Link>
        </p>
        <p>{video.description}</p>
        {video.comments?.map((comment) => (
          <p key={comment.id}><strong>Comment: </strong>{comment.message}</p>
        ))}
        <Link to={`/videos/edit/${video.id}`}>
          Edit
        </Link>
        <br/>
        <Link to={`/videos/delete/${video.id}`}>
          Delete Video
        </Link>
      </CardBody>
    </Card>
  );
};

export default Video;