import React from 'react'
import { useState, useEffect} from 'react'
import axios from 'axios'
import Users from './Users'
import Loading from './Loading'
export default function Home() {

    const[users, setUser] =  useState(null)
    const[add, setAdd] =  useState(false)


    const addPosts = ()=>{
        setAdd(!add)
    }

   

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then((result)=>{
            setUser(result.data);
        })
    },[])

    return (
        <div>
            <h2>HELLO</h2>
            <p>Cras facilisis urna ornare ex volutpat, et
                convallis erat elementum. Ut aliquam, ipsum vitae
                gravida suscipit, metus dui bibendum est, eget rhoncus nibh
                metus nec massa. Maecenas hendrerit laoreet augue
                nec molestie. Cum sociis natoque penatibus et magnis
                dis parturient montes, nascetur ridiculus mus.</p>
            <p>Here we do some work with a fake backend, i.e. we send a request to the backend and get an answer:</p>
            <div className='d-flex justify-content-between'>

                <button type='button' onClick={addPosts} className='btn btn-dark '>Users</button>
               

            </div>
            <br/>
            <hr/>
            <br/>
        <div>
            
            {add ? <div>{users ? <Users users ={users} />:<Loading/>}</div>: ' '}
        </div>
          
          
        </div>
    )
}
