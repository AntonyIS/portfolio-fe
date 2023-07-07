import React, { useEffect, useState } from "react";


export default function Users (){
    const [users, setUsers] = useState();

    const getApiData = async () => {
        const response = await fetch(
          "http://127.0.0.1:8000/v1/users"
        ).then((response) => response.json());
            
        console.log(response)
        setUsers(response);
      };
     
    
      useEffect(() => {
        getApiData();
      }, []);


    return(
        <>
        
            <div className="container">
               
                {
                    users &&
                    users.map((user) => (
                    <div className="item-container">
                        Id:{user.user_id} <div className="title">Title:{user}</div>
                    </div>
                    ))
                }
            </div>
        </>
    )
}

