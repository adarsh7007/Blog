import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";
function Articles({ posts }) {
  const [article, setArticle] = useState([]);

  const deleteArticle = (id) => {
    axios.delete(`http://localhost:5000/${id}`).then((res) => alert(res.data));
    setArticle(article.filter((elem) => elem._id !== id));
  };
  return (
    <MainContainer>
      {posts.map((article, key) => {
        console.log(article);
        return (
          <div className="container" key={key}>
            <img
              src={`images/${article.picture}`}
              alt="..."
              className="process__image"
            />

            <Link
              to={{
                pathname: `article/${article._id}`,
              }}
            >
              <h2>{article.title}</h2>
            </Link>
            <p>{article.article}</p>
            <span>{article.authername}</span>

            <div className="row my-5">
              <div className="col-sm-2">
                <Link
                  to={`update/${article._id}`}
                  className="btn btn-outline-success"
                >
                  edit
                </Link>
              </div>

              <div className="col-sm-2">
                <button
                  onClick={() => deleteArticle(article._id)}
                  className="btn btn-outline-danger"
                >
                  delete
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </MainContainer>
  );
}

export default Articles;
const MainContainer = Styled.div`
margin:7rem 0;
`;
