import React from "react";
import "./CardItem.css";

interface CardItemProps {
  image: string;
  title: string;
  episodes: string;
  author: string;
}

const CardItem: React.FC<CardItemProps> = ({ image, title, episodes, author }) => {
  return (
    <div className="card-item">
      <img src={image} alt={title} className="card-image" />
      <div className="card-text">
        <h3>{title}</h3>
        <p>
          {episodes} {author}
        </p>
      </div>
    </div>
  );
};

export default CardItem;
