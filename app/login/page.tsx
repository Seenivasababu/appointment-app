'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { ChangeEvent } from 'react';
import toast from 'react-hot-toast';
const BASE_URL = 'http://localhost:3001';

const Login = () => {
  const router = useRouter();

  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async () => {
    const res = await axios.post(`${BASE_URL}/user/login`, formState);
    const data:{message:String,success:Boolean,token:String} = res.data
    if(data.success){
      toast.success(`${data.message}`)
      router.push(`/user/${data.token}`)
    }else{
      toast.error(`${data.message}`)
      router.push('/login')
    }
    
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="card rounded-md w-96 flex flex-col gap-6 bg-slate-100 p-8">
        <input
          placeholder="Enter your email"
          className="input input-bordered"
          name="email"
          value={formState.email}
          onChange={handleChange}
        />
        <input
          placeholder="Enter your password"
          className="input input-bordered"
          name="password"
          value={formState.password}
          onChange={handleChange}
        />
        <button className="btn btn-neutral" onClick={handleSubmit}>
          {' '}
          Register
        </button>
      </div>
    </div>
  );
};

export default Login;
