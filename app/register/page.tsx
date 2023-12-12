'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { ChangeEvent } from 'react';
import toast from 'react-hot-toast';
const BASE_URL = 'http://localhost:3001';


const Register = () => {
  const router = useRouter();
  const [formState, setFormState] = useState({
    name: '',
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
    const res = await axios.post(`${BASE_URL}/user/register`, formState);
    console.log(res.data);
    toast.success("Registration successful")
    router.push('/login')
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="card rounded-md w-96 flex flex-col gap-6 bg-slate-100 p-8">
        <input
          placeholder="Enter your name"
          className="input input-bordered"
          name="name"
          value={formState.name}
          onChange={handleChange}
        />
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

export default Register;
