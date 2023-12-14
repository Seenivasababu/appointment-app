"use client"
import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
const BASE_URL = 'http://localhost:3001';

const Action = ({id}: {id:Number}) => {
  const handleApprove = async () => {
    const res = await axios.post(`${BASE_URL}/admin/approve/${id}`);
    const data = res.data;
    if(data.success){
      toast.success(`${data.message}`)
      
    }else{
      toast.error(`${data.message}`)
      
    }
  };
  const handleReject = async () => {
    const res = await axios.post(`${BASE_URL}/admin/reject/${id}`);
    const data = res.data;
    if(data.success){
      toast.success(`${data.message}`)
      
    }else{
      toast.error(`${data.message}`)
      
    }
  };

  return (
    <div className='flex gap-4'>
      <button className="btn btn-success " onClick={() => handleApprove()}>
        Approve
      </button>
      <button className="btn btn-error " onClick={() => handleReject()}>
        Reject
      </button>
    </div>
  );
};

export default Action;
