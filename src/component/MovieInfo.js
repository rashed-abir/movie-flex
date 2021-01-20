import React from "react";
import { Descriptions } from "antd";

function MovieInfo(props) {
  const { movie } = props;

  return (
    <div className="movie-info" >
      <Descriptions title="Movie Info" bordered style={{padding:"5px", marginBottom:"5px"}} >
        <Descriptions.Item label="Title" className="item" >
          {movie.original_title}
        </Descriptions.Item>
        <Descriptions.Item label="release_date" className="item">
          {movie.release_date}
        </Descriptions.Item>
        <Descriptions.Item label="revenue" className="item">{movie.revenue}</Descriptions.Item>
        <Descriptions.Item label="runtime" className="item">{movie.runtime}</Descriptions.Item>
        <Descriptions.Item label="vote_average" span={2} className="item">
          {movie.vote_average}
        </Descriptions.Item>
        <Descriptions.Item label="vote_count" className="item">
          {movie.vote_count}
        </Descriptions.Item>
        <Descriptions.Item label="status" className="item">{movie.status}</Descriptions.Item>
        <Descriptions.Item label="popularity" className="item">
          {movie.popularity}
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
}

export default MovieInfo;
