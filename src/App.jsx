// connecting css file
import "./App.css";

import { Navbar } from "./components/navbar/navbar";
import { PostCard } from "./components/postCard/post";
import { Row2 } from "./components/row2/row2";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Row2 />
      <PostCard />
    </div>
  );
}

export default App;
