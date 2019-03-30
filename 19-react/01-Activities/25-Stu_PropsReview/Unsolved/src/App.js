import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Card from "./components/Card/Card";
import SquidwardCard from "./components/SquidwardCard";
import MrKrabsCard from "./components/MrKrabsCard";

function App() {
  return (
    <Wrapper>
      <Title>Friends List</Title>
      <Card name="Mr Krabs"
        imgSrc="https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131"
        occupation="Restaurant Owner"
        location="A Giant Anchor"
      />
      <Card name="Mr Krabs"
        imgSrc="https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131"
        occupation="Restaurant Owner"
        location="A Giant Anchor"
      />
      <Card name="Mr Krabs"
        imgSrc="https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131"
        occupation="Restaurant Owner"
        location="A Giant Anchor"
      />
    </Wrapper>
  );
}

export default App;
