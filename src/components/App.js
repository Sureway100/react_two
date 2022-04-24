import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Card from "./Card";
import characters from "../data";

export default function App() {
  const valueMeter = characters.map((character) => {
    // return <Joke setup={joke.setup} punchline={joke.punchline} />
    return <Card 
    id={character.id}
    quote={character.quote} 
    image={character.personImg} 
    imgStar={character.starImg}
    star_rating={character.rated}
    num_rated={character.num_rated}
    charge={character.charge}
    country={character.nationality}
     />
  })
  return (
    <div>
      {/* <Header /> */}
      <Hero />
      <div className="Bio">
        {/* <Card 
        image={require("../images/katie-zaferes.jpg")}
        star_rating="4.4" 
        num_rated={116} 
        quote="Keep pushing, never give up. only the dead does"
        country="USA" 
        charge="136"
        />   */}
        {valueMeter}
      </div>
    </div>
  );
}
