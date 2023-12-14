import axios from 'axios'
import React from 'react'
import { useSetRecoilState} from 'recoil'; 
const BASE_URL = 'http://localhost:3001';
type Params = {
  params : {
    id :string
  }
}
export type User  = {
 
  email: string;
  name: string;
  isDoctor: boolean;
  isAdmin: boolean;

}
const UserHomePage = async ({params}:Params) => {
 
  const user:User = await axios.get(`${BASE_URL}/info/${params.id}`)

 
  return (
    <div>
      {user.isAdmin ? "Admin" : "User"}
    </div>
  )
}

export default UserHomePage