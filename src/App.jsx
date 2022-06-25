import React, { Component } from "react";
import { Container } from "@chakra-ui/react";
import Searchbar from "./components/Searchbar";

class App extends Component {
  state = {
    searchterm: "",
  };

  onFormChange = (e) => {
    this.setState({ searchterm: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.searchterm)
  };

  render() {
    return (
      <div className="App">
        <Container maxW="container.lg" mt="10px">
          <Searchbar
            size="lg"
            searchterm={this.state.searchterm}
            onFormChange={this.onFormChange}
            onFormSubmit={this.onFormSubmit}
          />
        </Container>
      </div>
    );
  }
}

export default App;
