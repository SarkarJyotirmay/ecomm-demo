import React, { useState } from "react";
import {
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  LockClosedIcon,
  MapPinIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/outline";
import AuthHeader from "../components/AuthHeader";
import axiosInstance from "../utils/axios";
import { useNavigate } from "react-router-dom";

const initialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  mobNo: "",
  password: "",
  role: "CUSTOMER",
  gender: "M",
  address: {
    addressLine1: "",
    addressLine2: "",
    landmark: "",
    city: "",
    state: "",
    pincode: "",
  },
};

const SignupPage = () => {
  const [form, setForm] = useState(initialFormData);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name in form.address) {
      setForm({
        ...form,
        address: {
          ...form.address,
          [name]: value,
        },
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/api/v1/user/register", form);
      console.log(response.data);
      navigate("/login");
    } catch (err) {
      console.error("Error during signup:", err);
    }
  };

  const inputClass =
    "w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500";

  const labelClass = "block text-gray-600 font-medium mb-1";

  return (
    <div className="min-h-screen bg-gray-100">
      <AuthHeader />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Sign Up
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* First Name */}
              <div>
                <label className={labelClass}>First Name</label>
                <div className="relative">
                  <UserIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="John"
                    required
                  />
                </div>
              </div>

              {/* Last Name */}
              <div>
                <label className={labelClass}>Last Name</label>
                <div className="relative">
                  <UserIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className={labelClass}>Email</label>
                <div className="relative">
                  <EnvelopeIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              {/* Mobile Number */}
              <div>
                <label className={labelClass}>Mobile Number</label>
                <div className="relative">
                  <PhoneIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="tel"
                    name="mobNo"
                    value={form.mobNo}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="9876543210"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="md:col-span-2">
                <label className={labelClass}>Password</label>
                <div className="relative">
                  <LockClosedIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="SecurePass@123"
                    required
                  />
                </div>
              </div>

              {/* Address Line 1 */}
              <div className="md:col-span-2">
                <label className={labelClass}>Address Line 1</label>
                <div className="relative">
                  <BuildingOfficeIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="addressLine1"
                    value={form.address.addressLine1}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="123 Main Street"
                    required
                  />
                </div>
              </div>

              {/* Address Line 2 */}
              <div className="md:col-span-2">
                <label className={labelClass}>Address Line 2</label>
                <div className="relative">
                  <BuildingOfficeIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="addressLine2"
                    value={form.address.addressLine2}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Apartment 4B"
                  />
                </div>
              </div>

              {/* Landmark */}
              <div>
                <label className={labelClass}>Landmark</label>
                <div className="relative">
                  <MapPinIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="landmark"
                    value={form.address.landmark}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Near City Mall"
                  />
                </div>
              </div>

              {/* City */}
              <div>
                <label className={labelClass}>City</label>
                <div className="relative">
                  <MapPinIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="city"
                    value={form.address.city}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="New York"
                    required
                  />
                </div>
              </div>

              {/* State */}
              <div>
                <label className={labelClass}>State</label>
                <div className="relative">
                  <MapPinIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="state"
                    value={form.address.state}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="New York"
                    required
                  />
                </div>
              </div>

              {/* Pincode */}
              <div>
                <label className={labelClass}>Pincode</label>
                <div className="relative">
                  <MapPinIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="pincode"
                    value={form.address.pincode}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="10001"
                    required
                  />
                </div>
              </div>
              <div>
                <label className={labelClass}>Role</label>
                <div className="relative">
                  <select
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  >
                    <option value="CUSTOMER">Customer</option>
                    <option value="SELLER">Seller</option>
                  </select>
                </div>
              </div>

              {/* Gender */}
              <div>
                <label className={labelClass}>Gender</label>
                <div className="relative">
                  <select
                    name="gender"
                    value={form.gender}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  >
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                    <option value="O">Other</option>
                  </select>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-200"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
