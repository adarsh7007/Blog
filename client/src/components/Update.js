import React, { useState, useEffect } from "react";
import axios from "axios";
import Styled from "styled-components";
import { Link } from "react-router-dom";

function Update(props) {
  const [authername, setAuthername] = useState("");
  const [title, setTitle] = useState("");
  const [article, setArticle] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/article/${props.match.params.id}`)
      .then((res) => [
        setTitle(res.data.title),
        setArticle(res.data.article),
        setAuthername(res.data.authername),
      ])
      .catch((err) => console.log(err));
  }, [props]);

  return (
    <MainContainer>
      <h2>{title}</h2>
      <p>{article}</p>
      <p>{authername}</p>

      <Link to="/" className="btn btn-primary">
        back to home
      </Link>
    </MainContainer>
  );
}

export default Update;
const MainContainer = Styled.div`
margin:6rem auto;
padding:3rem 14em;

h2{
    text-align: center;
    font-weight:900;
    color: var(--dark-green)
}
`;
