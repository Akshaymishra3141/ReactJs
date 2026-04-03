import React from 'react'
import { useState,useEffect } from 'react';

function Github() {
    const [data,setData] = useState([]);
    useEffect(() => {
        fetch('https://api.github.com/users/akshaymishra3141')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data);
        })
    }, [])
    
  return (
    <div className="bg-gray-700 text-white text-3xl p-4 text-center">
      GitHub Follower: {data.followers}
      <img src={data.avatar_url} alt="Git profile" width={300}/>
    </div>
  );
}

export default Github