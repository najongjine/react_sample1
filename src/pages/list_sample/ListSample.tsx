import React from "react";
import CardList from "../../components/CardList";

const sampleCardData = [
  {
    image: "https://static.wikia.nocookie.net/elderscrolls/images/6/6f/Frostcrag_Spire.png/revision/latest?cb=20130103095915",
    title: "위자드 캐슬",
    episodes: "총 221화",
    author: "테프크리",
  },
  {
    image: "https://csossihettpx2597658.cdn.gov-ntruss.com/data2/content/image/2017/08/22/.cache/512/20170822073457.jpg",
    title: "헌터스 블루",
    episodes: "총 233화",
    author: "박세직",
  },
  {
    image: "https://shopby-images.cdn-nhncommerce.com/20240625/115212.679260000/HTccs_S0010_meta.jpg",
    title: "카이도르겐 사가",
    episodes: "총 241화",
    author: "박세직",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA9t3gXtnUjOax-8NDhDXgUavnxxxhe6Bndw&s",
    title: "언더커버맨",
    episodes: "총 233화",
    author: "테프크리",
  },
  {
    image: "https://cdn.newsculture.press/news/photo/202209/510528_620675_1150.jpg",
    title: "수퍼스타 미스터리",
    episodes: "총 220화",
    author: "테프크리",
  },
];

const ListSample: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>List Sample Page</h2>
      <CardList cards={sampleCardData} />
    </div>
  );
};

export default ListSample;
