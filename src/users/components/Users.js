import React, {useDebugValue} from "react";
import Card from "../../shared/Card";
import {useState, useEffect} from "react";



function Users() {
    const [data, setData]= useState(null)
    const [loading, setloading]= useState(true)
    const [error, setError]= useState(null)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response)=> response.json())

            .then((apiData)=>{
                setData(apiData)
                setError(null)
            })
            .catch((error)=>{
                console.log(error.message)
                setError(error.message);
                setData(null)
            })
            .finally(()=>{
                setloading(false)
            })
    },[])
    return (
        <div className={'container'}>
            {loading && <div>loading...</div>}
            {error && <div>`There is a problem fetching the post data - ${error}`</div>}
            <div className={'card-grid'}>
                {data &&
                    data.map((user, id) => (
                        <Card userData={user} key={id} />
                    ))
                }
            </div>
        </div>
        );
}

export default Users;
