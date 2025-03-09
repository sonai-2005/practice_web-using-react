import React from 'react'
import { useEffect,useState } from 'react'
import github from "/images/github.png"
export  const  Github = () => {
    const [data , setData] = useState([]);
     useEffect(() => {
        const fetchdata= async()=>{
            try{
                const res = await fetch('https://api.github.com/users/sonai-2005');
                const result = await res.json();
                setData(result);
                console.log(result);
            }
            catch(err){
                console.error(err);
                
            }
              
        }
          fetchdata();
    }, [])
    
  return (
    <>
    {data ? (
                <div className="card shadow-lg p-4 bg-light mx-auto" style={{ width: "350px" }}>
                    <img src={data.avatar_url} alt="GitHub Avatar" className="card-img-top rounded-circle" style={{ width: "150px", height: "150px", objectFit: "cover", margin: "0 auto" }} />
                    <h4 className="card-title mt-3">{data.name || "No Name"}</h4>
                    <p className="card-text text-muted">@{data.login}</p>
                    <p className="text-dark"><b>Followers:</b> {data.followers}</p>
                    <p className="text-dark"><b>Public Repos:</b> {data.public_repos}</p>
                    <a href={data.html_url} className="btn btn-outline-primary" target="_blank" rel="noopener noreferrer">Visit Profile</a>
                </div>
            ) : (
                <p className="text-muted">Loading...</p>
            )}
    
    </>
  )
}
