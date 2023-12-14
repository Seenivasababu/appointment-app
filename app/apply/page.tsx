'use client';
import axios from 'axios';
import React, { ChangeEvent, useState } from 'react';
import toast from 'react-hot-toast';
const BASE_URL = 'http://localhost:3001';

export type Form = {
  firstName: string;
  lastName: string;
  phoneNumber: number;
  website: string;
  address: string;
  fees: number;
  specialization: string;
  experience: string;
  startTime: string;
  endTime: string;
}

const Apply = () => {
  const id = localStorage?.getItem('token')
  const [formState, setFormState] = useState<Form>({
    firstName: '',
    lastName: '',
    phoneNumber: 0,
    website: '',
    address: '',
    fees: 0,
    specialization: '',
    experience: '',
    startTime: '',
    endTime: '',
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
    const res = await axios.post(`${BASE_URL}/doctor/apply/${id}`, formState);
    const data:{message:String,success:Boolean} = res.data
    if(data.success){
      toast.success(`${data.message}`)
    }else{
      toast.error(`${data.message}`)
    }
  };

  return (
    <div className="p-4">
      <h1 className="mb-2 text-2xl font-medium">Personal Information</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex flex-col">
          <label className="mb-3"> Enter your First Name</label>
          <input
            required
            className="input border-2 border-gray-200"
            placeholder=""
            name="firstName"
            value={formState.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-3"> Enter your Last Name</label>
          <input
            required
            className="input border-2 border-gray-200"
            placeholder=""
            name="lastName"
            value={formState.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-3"> Enter your Phone Number</label>
          <input
            required
            className="input border-2 border-gray-200"
            placeholder=""
            name="phoneNumber"
            type='number'
            value={formState.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-3"> Enter your website</label>
          <input
            required
            className="input border-2 border-gray-200"
            placeholder=""
            name="website"
            value={formState.website}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-3"> Enter your Address</label>
          <input
            required
            className="input border-2 border-gray-200"
            placeholder=""
            name="address"
            value={formState.address}
            onChange={handleChange}
          />
        </div>
      </div>

      <hr className="mb-3 mt-6" />
      <h1
        className="mb-2
      required text-2xl font-medium"
      >
        Personal Information
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex flex-col">
          <label className="mb-3"> Enter your Specialization</label>
          <input
            required
            className="input border-2 border-gray-200"
            placeholder=""
            name="specialization"
            value={formState.specialization}
            onChange={handleChange}
          />
        </div>{' '}
        <div className="flex flex-col">
          <label className="mb-3"> Enter your Experience</label>
          <input
            required
            className="input border-2 border-gray-200"
            placeholder=""
            name="experience"
            value={formState.experience}
            onChange={handleChange}
          />
        </div>{' '}
        <div className="flex flex-col">
          <label className="mb-3"> Fees per consultation</label>
          <input
            required
            className="input border-2 border-gray-200"
            placeholder=""
            name="fees"
            type='number'
            value={formState.fees}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-3"> Enter your Start time</label>
          <input
            required
            className="input border-2 border-gray-200"
            placeholder=""
            type="time"
            name="startTime"
            value={formState.startTime}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-3"> Enter your End time</label>
          <input
            required
            className="input border-2 border-gray-200"
            placeholder=""
            type="time"
            name="endTime"
            value={formState.endTime}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-3"> Make sure you entered all the details</label>
          <button
            onClick={handleSubmit}
            className="btn
            required btn-neutral"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Apply;
