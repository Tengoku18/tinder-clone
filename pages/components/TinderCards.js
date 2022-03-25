import React from "react";
import { useState } from "react";
import TinderCard from "react-tinder-card";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Elon musk",
      url: "https://wallpapercave.com/dwp1x/wp2048442.jpg",
    },
    {
      name: "Jeff Bejos",
      url: "https://wallpapercave.com/dwp1x/wp4025589.jpg",
    },
    {
      name: "Zendaya Coleman",
      url: "https://c4.wallpaperflare.com/wallpaper/774/732/928/spider-man-spider-man-far-from-home-zendaya-hd-wallpaper-preview.jpg",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing:" + nameToDelete);
  };
  const outOfFrame = (name) => {
    console.log(name + "left the screen");
  };
  return (
    <div className="tinder-cards sm:h-96 sm:mt-10  md:h-96  mt-20">
      <div className="Tindercard-container flex justify-center  ">
        {people.map((person) => (
          <TinderCard
            className=" bg-white  absolute md:w-1/3 "
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              className="sm:h-96 md:h-96  bg-white relative  bg-cover bg-center rounded-xl shadow-lg"
              style={{ backgroundImage: `url(${person.url})` }}
            >
              <h1 className="text-white absolute bottom-2 left-2 ">
                {" "}
                {person.name}{" "}
              </h1>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
