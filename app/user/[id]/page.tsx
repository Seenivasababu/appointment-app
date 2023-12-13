import axios from 'axios'
import React from 'react'
const BASE_URL = 'http://localhost:3001';
type Params = {
  params : {
    id :string
  }
}
type User  = {
  id: number;
  email: string;
  name: string;
  password: string;
  isDoctor: boolean;
  isAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
}
const UserHomePage = async ({params}:Params) => {
 
  const user:User = await axios.get(`${BASE_URL}/info/${params.id}`)
 console.log(user);
 
  return (
    <div>
      {user.isAdmin ? "Admin" : "User"}
    </div>
  )
}

export default UserHomePage