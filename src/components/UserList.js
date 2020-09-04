import React,{ useEffect, useState } from 'react'
import axios from 'axios'
import User from './User'
import style from './style.module.css'
import { Link } from 'react-router-dom'

const URL = 'https://my-json-server.typicode.com/niloy2019/json-server/members'

const UserList = () => {    

    const [users,setuUsers] = useState([])

    useEffect(() => {

            axios.get(URL)
            .then( (res) => {
                 console.log(res.data);
                 setuUsers(res.data)
            })
            .catch( (err) => {
                 console.log(err);
            }) 

    },[])

    return (
        <div>
            <h1>User List</h1>
                {users.map(user => (
                    <Link to={{ pathname:'/activity-details', state:{user : JSON.stringify(user)} }}   key={user.id} >
                        <div className={style.recipes}>
                                <div className={style.recipe} >
                                        <h3>ID : {user.id}</h3>
                                        <h3>Name : {user.real_name}</h3>
                                        <h3>TimeZone : {user.tz}</h3>
                                </div>
                        </div>
                    </Link>
                ))}
        </div>
    )
}

export default UserList