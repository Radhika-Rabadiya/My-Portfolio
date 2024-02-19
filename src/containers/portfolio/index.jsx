import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import ImageOne from "../../images/image1.png";
import ImageTwo from "../../images/image2.png";
import ImageThree from "../../images/image3.png";
import ImageFour from "../../images/image4.png";
import "./style.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 2,
    name: "Eat&Split",
    image: ImageOne,
    link: "https://eat-and-splitt.netlify.app",
    gitLink: "https://github.com/Radhika-Rabadiya/Eat-n-split.git",
  },
  {
    id: 3,
    name: "Fooding",
    link: "https://food-project-design.netlify.app",
    image: ImageTwo,
    gitLink: "https://github.com/Radhika-Rabadiya/FoodProject.git",
  },
  {
    id: 2,
    name: "Pig Game",
    image: ImageThree,
    link: "https://first-game-r.netlify.app",
    gitLink: "https://github.com/Radhika-Rabadiya/Pig-game.git",
  },
  {
    id: 2,
    name: "Guess The Number",
    image: ImageFour,
    link: "https://guessing-random-number.netlify.app",
    gitLink: "https://github.com/Radhika-Rabadiya/Guessing-random-number.git",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Developement",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  function handleClickWebsite(url) {
    window.open(url, "_blank");
  }

  // console.log("====================================");
  // console.log(hoveredValue);
  // console.log("====================================");

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  console.log(filteredItems);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button onClick={() => handleClickWebsite(item.link)}>
                      Website
                    </button>
                    <button onClick={() => handleClickWebsite(item.gitLink)}>
                      Git Hub
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
