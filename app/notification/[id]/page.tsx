import axios from 'axios'
import React from 'react'
import { User } from '../../user/[id]/page'
const BASE_URL = 'http://localhost:3001';

type Params = {
  params : {
    id :string
  }
}

export default async  function page({params}:Params) {
   const user:User = await axios.get(`${BASE_URL}/info/${params.id}`)
  return (
    <div>page</div>
  )
}
