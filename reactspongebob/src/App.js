import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Card from "./components/Card/Card";
import dataJSON from "./friends.json";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      friends: []
    }

  }

  componentDidMount () {
    this.loadFriends();
  }

  loadFriends = () => {
    const friends = [...dataJSON];

    this.setState({friends: friends});

  }

  deleteFriend = (id) => {
    let newFriends = this.state.friends.filter( item => {
      return (item.id !== id ? item : null);
    })
    this.setState({friends: newFriends});

  }

  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {
          this.state.friends.map(card => {
          return(<Card key={card.id} id={card.id} deleteFriend={this.deleteFriend}
            associate={card}/>
          );
        })
        }
      </Wrapper>
    );
  }

}

export default App;
