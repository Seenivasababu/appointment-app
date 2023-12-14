import axios from 'axios';
import React from 'react';
import Action from './Action';
const BASE_URL = 'http://localhost:3001';

export const revalidate = 0;
type Params = {
  params: {
    id: string;
  };
};
type Notification = {
  id: Number;
  type: string;
  message: string;
  receiverId: Number;
  senderId: Number;
};

export default async function page({ params }: Params) {
  const res = await axios.get(`${BASE_URL}/info/unSeen/${params.id}`);

  const notification: Notification[] = res.data;

  if (notification.length === 0) {
    return <h1>No Notification</h1>;
  }
 
  return (
    <div className="">
      <h1 className="font-semibold text-2xl px-2 mb-2">All Notification</h1>
      <div className="">
        {notification.map((notification) => {
          return (
            <div
              key={notification.message}
              className="p-2 flex gap-4 shadow-md justify-between mr-20 rounded-md items-center hover:bg-slate-100"
            >
              <h1>{notification.message}</h1>
              {notification.type === 'Apply for Doctor' && <Action id={notification.senderId}/>}
             
            </div>
          );
        })}
      </div>
    </div>
  );
}
