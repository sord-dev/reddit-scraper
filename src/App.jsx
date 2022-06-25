import React, { Component } from "react";
import { Container } from "@chakra-ui/react";
import Searchbar from "./components/Searchbar";

class App extends Component {


  onFormSubmit = (e, searchterm) => {
    e.preventDefault()
    console.log(searchterm)
  };

  render() {
    return (
      <div className="App">
        <Container maxW="container.lg" mt="10px">
          <Searchbar
            size="lg"
            onFormSubmit={this.onFormSubmit}
          />
    
        </Container>
      </div>
    );
  }
}

export default App;
