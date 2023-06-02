import axios from 'axios';

 const getPosts = ()=>{axios.get("https://jsonplaceholder.typicode.com/posts")
  .then(res=>{
    return res.data
    })
  .catch(err=>console.log(err))
  }

//export const getPosts = ()=>{
//  return async(des) =>{
//    const res = axios.get("https://jsonplaceholder.typicode.com")
//  }
//}
export default getPosts