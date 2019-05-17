import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onSearchSubmit(term) {
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: { query: term },
        headers: {
          Authorization:
            "Client-ID 19bb572e988c921346dd8b93c2954fe316ff10e661d1dac5c39c8564fd5da608"
        }
      })
      .then(response => {
        console.log(response.data.results);
      });
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
