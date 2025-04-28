import React from "react";
import CardItem from "./CardItem";
import "./CardList.css";

interface CardData {
  image: string;
  title: string;
  episodes: string;
  author: string;
}

interface CardListProps {
  cards: CardData[];
}

const CardList: React.FC<CardListProps> = ({ cards }) => {
  return (
    <div className="card-list">
      {cards.map((card, index) => (
        <CardItem key={index} image={card.image} title={card.title} episodes={card.episodes} author={card.author} />
      ))}
    </div>
  );
};

export default CardList;
