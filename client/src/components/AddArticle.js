import axios from "axios";
import React, { useState, useEffect } from "react";
import Styled from "styled-components";
function AddArticle(props) {
  const [authername, setAuthername] = useState("");
  const [title, setTitle] = useState("");
  const [article, setArticle] = useState("");
  const [image, setImage] = useState();

  // const onChanFile = () => {
  //   setImage
  //   const da = new FormData();
  //   // da.append("title", title);
  //   // da.append("authername", authername);
  //   // da.append("article", article);
  //   da.append("image", image);

  //   axios
  //     .post(`http://localhost:5000/add`, image)
  //     .then((res) => {
  //       alert("File Upload success");
  //     })
  //     .catch((err) => alert("File Upload Error"));
  // };
  const onFileChange = e =>{
    const da = new FormData();
  da.append("picutre",image);
    setImage(e.target.files[0])

    axios
    .post(`http://localhost:5000/upload`, da)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
  
    console.log(da);
  }

  const onChangeFile = (e) => {
    
    e.preventDefault();

    const articles = {
          title,
          article,
          authername,
    //        image
        };
    setTitle("");
    setArticle("");
    setAuthername("");

    // axios
    // .post("http://localhost:5000/add", da,articles,
    // {headers: {
    //   "Content-Type": "application/json"}}
    // )
    axios
    .post("http://localhost:5000/add",articles,
    {headers: {
      "Content-Type": "application/json"}}
    )
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));


    
  };
  // const ChangeOnClick = (e) => {
  //   e.preventDefault();
  //   // const da = new FormData();
  //   //   // da.append("title", title);
  //   //   // da.append("authername", authername);
  //   //   // da.append("article", article);
  //   //   da.append('image', image);

  //   const articles = {
  //     title,
  //     article,
  //     authername,
  //     // image
  //   };
  //   setTitle("");
  //   setArticle("");
  //   setAuthername("");

  //   console.log(articles);

  // }

   

  return (
    <MainContainer>
      <h1>Add your blog</h1>
      <form onSubmit={onChangeFile} encType="multipart/form-data">
        <div className="mb-3">
          <label htmlFor="authername" className="form-label">
            auther
          </label>
          <input
            type="text"
            value={authername}
            onChange={(e) => setAuthername(e.target.value)}
            className="form-control"
            placeholder="authername"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            placeholder="title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="article" className="form-label">
            article
          </label>
          <textarea
            value={article}
            onChange={(e) => setArticle(e.target.value)}
            className="form-control"
          >
            write
          </textarea>
        </div>
        <div className="form-group">
          <label htmlFor="file">choose your file</label>
          <input
            type="file"
            filename="picutre"
            className="form-control-file"
            onChange={onFileChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          add
        </button>
      </form>
    </MainContainer>
  );
}

export default AddArticle;
const MainContainer = Styled.div`
margin:3rem auto;
padding:4rem;
width:31.25rem
`;
