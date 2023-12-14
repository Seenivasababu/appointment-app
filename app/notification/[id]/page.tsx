import axios from 'axios'
import React from 'react'
import List from './List';
const BASE_URL = 'http://localhost:3001';

export const revalidate = 0
type Params = {
  params : {
    id :string
  }
}
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
export default async  function page({params}:Params) {

    const res= await axios(`${BASE_URL}/info/unSeen/${params.id}`);
  
    const notification:Notification[] = res.data
    
    if (!notification) {
      return <h1>User notification not found</h1>;
    }
    console.log(notification);
  

 
  
  return (
  
    <div>{ notification.map(notification => {
        return <div>{notification.message} Hi</div>
       })
       
      }
      </div>
    // <h1>User notification  found</h1>
  )
}
