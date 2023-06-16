import React from "react";
import { Header } from "./Header";
import { GalleryList } from "./GalleryList";
import { getGallery } from "../modules/request";
import "./App.css";

function App() {
  const [gallery, setGallery] = React.useState([]);

  const refreshState = () => {
    getGallery().then(setGallery);
  };

  React.useEffect(() => refreshState(), []);

  return (
    <div className="App">
      <Header />
      <GalleryList gallery={gallery} />
    </div>
  );
}

export default App;
