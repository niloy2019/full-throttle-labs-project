import React,{ useEffect, useState } from 'react'
import axios from 'axios'
import User from './User'
import style from './style.module.css'
import { Link } from 'react-router-dom'
import img from './assets/profile.jpg'

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
                <h1 className={style.h}>User List</h1>
                {users.map(user => (
                    <div className={style.recipes} key={user.id}>
                        <Link to={{ pathname:'/activity-details', state:{user : JSON.stringify(user)} }} className={style.link}>
                                <div className={style.recipe} >
                                        <img src={img} alt={img} className={style.img} />
                                        <p>ID : {user.id}</p>
                                        <p>Name : {user.real_name}</p>
                                        <p>TimeZone : {user.tz}</p>
                                </div>
                    </Link>
                        </div>
                ))}
        </div>
    )
}

export default UserList