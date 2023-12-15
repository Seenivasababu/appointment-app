import axios from 'axios';
import React from 'react';

export const revalidate = 0;
const BASE_URL = 'http://localhost:3001';
type Params = {
  params: {
    id: string;
  };
};
export type User = {
  email: string;
  name: string;
  isDoctor: boolean;
  isAdmin: boolean;
};
const UserHomePage = async ({ params }: Params) => {
  const res = await axios.get(`${BASE_URL}/info/${params.id}`);
  const user:User = await res.data
  return <div>{user.isAdmin ? 'Admin' : 'User'}</div>;
};

export default UserHomePage;
