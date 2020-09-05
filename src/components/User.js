import React, { useState } from 'react'
import style from './style.module.css'
import {Link} from 'react-router-dom'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import img from './assets/profile2.png'


const User = (props) => {
    
    //Getting the User info from props
    const user =JSON.parse(props.location.state.user)

    const [date, setDate] = useState(new Date('2020/03/16'))
    let count=0

    //Method to change the date in state when user changes it
    const  onChange = date => {
        setDate(date)  
    } 

    //Fetching the Day,Month and Year from the Date chosen by user
    let d = date + ''
    let dateArray = d.split(' ')
    let month2 = dateArray[1]
    let day2 = Number(dateArray[2])
    let year2 = Number(dateArray[3])
    
    return (
        <div>   
                {/*--------- Back Button to go to Home Page -----------*/}
                <Link  className={style.li} to="/">
                            <i className="fas fa-arrow-left"></i>
                </Link>
        
                <div className={style.recipe2}  >  
                        
                        {/*---------------   User Information ------------*/}
                        <img src={img} alt={img} className={style.img2} />
                        <div className={style.letter}>ID : {user.id}</div>
                        <div className={style.letter}>Name : {user.real_name}</div>
                        <div className={style.letter}>TimeZone : {user.tz}</div>

                        
                        {/*--------------------------------   Calender to pick a Date   -----------------------------*/}
                        <div className={style.date} >
                            Choose Date : <DatePicker selected={date} onChange={onChange}className={style.datePicker} />
                        </div>
                        

                        {//--------------------- -----------      When Activity Found      ----------------------------//
                         user.activity_periods.map(activity => {
                                    let start = activity.start_time.split(' ')
                                    let end   = activity.end_time.split(' ')
                                    //Fetching the day,month and year from the start and end time of activity Array 
                                    let month = start[0]
                                    let day   = Number(start[1]) 
                                    let year  = Number(start[2])
                                    let startTime  = start[4]
                                    let endTime  = end[3]

                                    //Comparing the activiy Date with the Date which user has chosen
                                    if(day===day2 && month===month2 && year===year2){
                                            count++
                                            return (
                                                    <table className="table table-dark" key={start}>
                                                        <thead>
                                                                <tr>
                                                                    <th scope="col"></th>
                                                                    <th scope="col">Date</th>
                                                                    <th scope="col"> From</th>
                                                                    <th scope="col"> To</th>
                                                                </tr>
                                                        </thead>
                                                        <tbody>
                                                                <tr>
                                                                    <th scope="row">1</th>
                                                                    <td>{`${month} ${day},${year}`}</td>
                                                                    <td>{startTime}</td>
                                                                    <td>{endTime}</td>
                                                                </tr>
                                                        </tbody>
                                                    </table>
                                            )   
                                    }
                        })}
                    
                    { //-----------------------------    When No Activity Found    --------------------------------------//
                        count==0 ? <table className="table table-dark" >
                                        <thead>
                                                <tr>
                                                    <th scope="col"> </th>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">Activity</th>
                                                </tr>
                                        </thead>
                                        <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>{`${month2} ${day2},${year2}`}</td>
                                                    <td>NO ACTIVITY FOUND</td>
                                                </tr>
                                        </tbody>
                                </table>: ''}

                </div>
        </div>
    )
}

export default User
