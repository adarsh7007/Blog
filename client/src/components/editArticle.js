import axios from 'axios'
import React,{useState,useEffect} from 'react'
import Styled from 'styled-components'
function EditArticle(props) {

    const [authername, setAuthername] = useState()
    const [title, setTitle] = useState()
    const [article, setArticle] = useState()
    const [filename,setFilename] = useState("")

    const [message, setMessage] = useState()
    const onChangeFile =e=>{
        setFilename(e.target.files[0])
    }
    const ChangeOnClick=e=>{
        e.preventDefault()
        const formData = new FormData();
        formData.append("title",title)
        formData.append("artile",article)
        formData.append("authername",authername)
        formData.append("articleImage",filename)


        // const articles={
        //     title,
        //     article,
        //     authername,
        // }
        setTitle("")
        setArticle("")
        setAuthername("")

       
            axios.put(`http://localhost:5000/update/${props.match.params.id}`,formData)
            .then(res => setMessage(res.data)
            )
            .catch(err=> console.log(err))
            };

            useEffect(()=>{
                axios.get(`http://localhost:5000/article/${props.match.params.id}`)
                .then(res=>[
                    setTitle(res.data.title),
                    setArticle(res.data.article),
                    setAuthername(res.data.authername)
        
                ]).catch(err=>console.log(err))
        
            })
            
            
    
    

    return (
        <MainContainer>
            <h1>update your blog</h1>
            <form onSubmit={ChangeOnClick} encType="multipart/form-data">
                <span>{message}</span>
  <div className="mb-3">
    <label htmlFor="authername" className="form-label">auther</label>
    <input type="text" value={authername} onChange={e => setAuthername(e.target.value)}
     className="form-control" placeholder="authername"/>
  </div>
  <div className="mb-3">
    <label htmlFor="title"
    className="form-label">title</label>
    <input type="text"  value={title} 
    onChange={e=>setTitle(e.target.value)} className="form-control" placeholder="title"/>
  </div>
  <div className="mb-3">
    <label htmlFor="article" className="form-label">article</label>
    <textarea value={article}
    onChange={e=>setArticle(e.target.value)}
    className="form-control" >write</textarea>
  </div>
  <div className="form-group">
<label htmlFor="file">choose your file</label>
<input type="file"
 filename="articleImage"
 className="form-control-file"
 onChange={onChangeFile}
 />
</div>

  <button type="submit" className="btn btn-primary">update</button>
</form>
        </MainContainer>
    )
}

export default EditArticle
const MainContainer = Styled.div `
margin:3rem auto;
padding:4rem;
width:31.25rem
` 