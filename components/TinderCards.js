import React from "react";
import { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";

function TinderCards() {
  const [people, setPeople] = useState(null);
  useEffect(() => {
    const loadImage = async () => {
      const response = await fetch(
        "https://api.generated.photos/api/v1/faces?api_key=BEUHTLfJloFeCNWcfIdhrw"
      );
      const data = await response.json();
      console.log("data", data);
      setPeople(data);
    };
    loadImage();
  }, []);

  // const [people, setPeople] = useState([
  //   {
  //     name: "Elon musk",
  //     url: "https://wallpapercave.com/dwp1x/wp2048442.jpg",
  //   },
  //   {
  //     name: "Jeff Bejos",
  //     url: "https://wallpapercave.com/dwp1x/wp4025589.jpg",
  //   },
  //   {
  //     name: "Zendaya Coleman",
  //     url: "https://c4.wallpaperflare.com/wallpaper/774/732/928/spider-man-spider-man-far-from-home-zendaya-hd-wallpaper-preview.jpg",
  //   },
  // ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing:" + nameToDelete);
  };
  const outOfFrame = (name) => {
    console.log(name + "left the screen");
  };
  return (
    <div className="tinder-cards mt-7 h-96 md:mt-14 lg:mt-20">
      <div className="Tindercard-container h-full  flex justify-center  ">
        {people &&
          people.faces.map((person) => (
            <TinderCard
              className="w-10/12 md:w-2/4 lg:w-1/3 bg-white absolute  "
              key={person.id}
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => swiped(dir, person.id)}
              onCardLeftScreen={() => outOfFrame(person.id)}
            >
              {console.log("data id", person.id)}
              <div
                className="h-96  bg-white relative  bg-cover bg-center rounded-xl shadow-lg"
                style={{ backgroundImage: `url(${person.urls[4]["512"]})` }}
              >
                {console.log("i am inside", person.urls[4]["512"])}
                <h1 className="text-white absolute bottom-2 left-2 ">
                  {" "}
                  {person.id}{" "}
                </h1>
              </div>
            </TinderCard>
          ))}
      </div>
    </div>
  );
}

export default TinderCards;
