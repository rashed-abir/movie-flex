import React from "react";
import { Descriptions } from "antd";

function MovieInfo(props) {
  const { movie } = props;

  return (
    <div className="movies-info">
      <Descriptions
        title="Movie Info"
        bordered
        style={{ padding: "5px", marginBottom: "5px" }}
      >
        <Descriptions.Item label="Title" className="item">
          {movie.original_title}
        </Descriptions.Item>
        <Descriptions.Item label="Release Date" className="item">
          {movie.release_date}
        </Descriptions.Item>
        <Descriptions.Item label="Revenue" className="item">
          {movie.revenue}
        </Descriptions.Item>
        <Descriptions.Item label="Runtime" className="item">
          {movie.runtime}
        </Descriptions.Item>
        <Descriptions.Item label="Vote Average" span={2} className="item">
          {movie.vote_average}
        </Descriptions.Item>
        <Descriptions.Item label="Vote Count" className="item">
          {movie.vote_count}
        </Descriptions.Item>
        <Descriptions.Item label="Status" className="item">
          {movie.status}
        </Descriptions.Item>
        <Descriptions.Item label="Popularity" className="item">
          {movie.popularity}
        </Descriptions.Item>
        <Descriptions.Item label="Home Page" className="item">
          {movie.homepage === "" ? (
            ""
          ) : (
            <a
              href={movie.homepage}
              target="_blank"
              rel="noreferrer"
              className="homepage"
            >
              Click Here
            </a>
          )}
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
}

export default MovieInfo;
