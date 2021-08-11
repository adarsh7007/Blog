import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/layouts/Header";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Articles from "./components/Articles";
import { Route, Switch } from "react-router-dom";
import AddArticle from "./components/AddArticle";
import Update from "./components/Update";
import EditArticle from "./components/editArticle";
function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/article`)
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Header />
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <Articles posts={posts} />} />
        <Route
          exact
          path="/article/:id"
          render={(props) => <Update {...props} posts={posts} />}
        />
        <Route
          exact
          path="/update/:id"
          render={(props) => <EditArticle {...props} posts={posts} />}
        />
        <Route exact path="/add" component={AddArticle} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
