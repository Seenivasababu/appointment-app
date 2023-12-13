const BASE_URL = 'http://localhost:3001';
import axios from 'axios';
import { Form } from '../apply/page';
import Book from './Book';

export default async function page() {
  const res = await axios.get(`${BASE_URL}/doctor/listAll`);
  const data: Form[] = res.data;

  if (!data) {
    return <h1>Error</h1>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 ">
      {data.map((doctor) => {
        return (
          <div
            key={doctor.website}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
          >
            <h1 className="text-2xl font-bold mb-2 text-gray-800">
              Dr. {doctor.firstName} 
            </h1>
            <p className="text-gray-700 mb-2">Contact: {doctor.phoneNumber}</p>
            <p className="text-gray-700 mb-2">Website: {doctor.website}</p>
            <p className="text-gray-700 mb-2">
              Specialization: {doctor.specialization}
            </p>

            <p className="text-gray-700 font-semibold mb-2">
              Experience: {doctor.experience} years
            </p>
            <p className="text-gray-700 mb-4">
              Consultancy fees: Rs. {doctor.fees}
            </p>
            <Book/>
          </div>
        );
      })}
    </div>
  );
}
