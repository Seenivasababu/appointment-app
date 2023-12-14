"use client"
import React from 'react'
type Notification =  {
   type: string,
   message: string,
   userId: Number
 }
 type User = {
   email: string;
   name: string;
   isDoctor: boolean;
   isAdmin: boolean;
   unSeenNotification:Notification[]
 }

const List = ({user}:{user:User}) => {
   console.log(user,"user");
   
  return (
    <div>List</div>
  )
}

export default List