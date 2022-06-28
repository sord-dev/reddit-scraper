import React, { Component } from "react";
import { Container } from "@chakra-ui/react";
import Searchbar from "./components/Searchbar";
import axios from "./api/meme-api";
import ImageList from "./components/ImageList";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    phrase: "",
    images: null,
    loading: true,
  };

  onFormSubmit = async (e, searchterm) => {
    if (e) e.preventDefault();
    console.log(`search phrase: ${searchterm}`);
    this.setState({ phrase: searchterm, loading: true });

    try {
      const options = {
        method: "GET",
        url: `/gimme/${searchterm}/25`,
      };
      const res = await axios.request(options);
      this.setState({ images: null });
      this.setState({
        images: res.data.memes.filter((img) => img.nsfw !== true),
        loading: false,
      });
    } catch (error) {
      console.log(error);
      this.setState({ loading: false });
    }
  };

  componentDidMount() {
    this.onFormSubmit(null, "wholesomememes");
  }

  render() {
    return (
      <>
        <Container maxW="container.lg" mt="10px">
          <Searchbar
            size="lg"
            onFormSubmit={this.onFormSubmit}
            placeholder={"Search any subreddit!"}
          />

          {this.state.images && (
            <ImageList
              images={this.state.images}
              loading={this.state.loading}
            />
          )}

        </Container>
          <Footer />
      </>
    );
  }
}

export default App;
