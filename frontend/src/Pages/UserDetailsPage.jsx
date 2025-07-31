import React, { useState } from "react";
import Rectangle from "../component/Rectangle";
import InputText from "../component/InputText";
import SubmitButton from "../component/SubmitButton";
import { useNavigate } from 'react-router-dom';
import Message from "../component/Message";
import useFeedbackStore from "../store/useFeedbackStore";

const UserDetailsPage = () => {
  const navigate = useNavigate();
  const { userDetails, setUserDetails } = useFeedbackStore();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      const currentMethods = userDetails.preferredContactMethods || [];
      let updatedMethods;

      if (checked) {
        updatedMethods = [...currentMethods, value];
      } else {
        updatedMethods = currentMethods.filter(method => method !== value);
      }

      setUserDetails({
        ...userDetails,
        preferredContactMethods: updatedMethods
      });
    } else {
      setUserDetails({
        ...userDetails,
        [name]: value
      });
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!userDetails.name?.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    if (!userDetails.referralSource?.trim()) {
      newErrors.referralSource = 'referralSource is required';
      isValid = false;
    }
    if (!userDetails.address?.trim()) {
      newErrors.address = 'address is required';
      isValid = false;
    }

    if (!userDetails.phone?.trim()) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    } else if (!/^\d+$/.test(userDetails.phone)) {
      newErrors.phone = 'Phone number should contain only digits';
      isValid = false;
    }

    if (userDetails.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userDetails.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      navigate('/business');
    }
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen w-full bg-white overflow-hidden">
      {/* RECTANGLES - Positioned Like the Design */}
      <Rectangle className="absolute top-[15%] left-[-10%] w-[250px] sm:w-[300px] h-[100px] bg-[#c9e3f4] rotate-[-10deg] opacity-90 z-0" />
      <Rectangle className="absolute top-[40%] left-[20%] w-[300px] sm:w-[400px] h-[100px] bg-[#17a2b8] rotate-[-5deg] opacity-80 z-0" />
      <Rectangle className="absolute top-[30%] right-[-10%] w-[250px] sm:w-[300px] h-[100px] bg-[#a8e4f0] rotate-[10deg] opacity-80 z-0" />
      <Rectangle className="absolute bottom-[10%] right-[0%] w-[300px] sm:w-[400px] h-[100px] bg-[#d7e6f3] rotate-[5deg] opacity-70 z-0" />

      <div className="w-[90%] md:w-[60%] lg:w-[46%] p-8 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 shadow-lg z-10">
        <div className="flex flex-row items-center justify-center gap-3 mb-6">
          <div className="font-roboto bg-[hsl(188,78%,41%)] text-white w-7 h-7 flex justify-center items-center rounded-full">
            1
          </div>
          <div className="bg-[hsl(188,78%,41%)] w-16 md:w-20 rounded-full h-1"></div>
          <div className="font-roboto bg-[hsl(233,30%,95%)] text-[hsl(245,14%,49%)] w-7 h-7 flex justify-center items-center rounded-full">
            2
          </div>
          <div className="bg-[hsl(233,30%,95%)] w-16 md:w-20 rounded-full h-1"></div>
          <div className="font-roboto bg-[hsl(233,30%,95%)] text-[hsl(245,14%,49%)] w-7 h-7 flex justify-center items-center rounded-full">
            3
          </div>
          <div className="bg-[hsl(233,30%,95%)] w-16 md:w-20 rounded-full h-1"></div>
          <div className="font-roboto bg-[hsl(233,30%,95%)] text-[hsl(245,14%,49%)] w-7 h-7 flex justify-center items-center rounded-full">
            4
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <h1 className="text-xl font-semibold text-center mb-4">
            Let's Work Together
          </h1>
          <p className="text-base text-[hsl(188,78%,29%)] mb-6 text-center">
            Your information helps us connect you with the most relevant resources.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <InputText
              title="Name"
              name="name"
              placename="Enter your name"
              value={userDetails.name || ''}
              onChange={handleChange}

              error={errors.name}
            />
            <InputText
              title="Email (optional)"
              name="email"
              placename="Enter your email"
              type="email"
              value={userDetails.email || ''}
              onChange={handleChange}
              error={errors.email}
            />
            <InputText
              title="Phone"
              name="phone"
              placename="Enter your phone"
              type="number"
              value={userDetails.phone || ''}
              onChange={handleChange}

              error={errors.phone}
            />
            <InputText
              title="Referral Source"
              name="referralSource"
              placename="e.g. Google, Instagram, Friend, etc."
              value={userDetails.referralSource || ''}
              onChange={handleChange}
              error={errors.referralSource}
            />
          </div>
          <div className="grid grid-cols-1 gap-4 mb-6">
            <Message
              title="Address"
              name="address"
              placename="City/Location"
              value={userDetails.address || ''}
              onChange={handleChange}
              error={errors.address}
            />
            <div>
              <label className="font-medium text-slate-700">Preferred Contact Method</label>
              <div className="flex gap-4 mt-2">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="preferredContactMethods"
                    value="phone"
                    className="accent-[#17a2b8]"
                    checked={userDetails.preferredContactMethods?.includes('phone') || false}
                    onChange={handleChange}
                  />
                  Phone
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="preferredContactMethods"
                    value="whatsapp"
                    className="accent-[#17a2b8]"
                    checked={userDetails.preferredContactMethods?.includes('whatsapp') || false}
                    onChange={handleChange}
                  />
                  WhatsApp
                </label>
              </div>
            </div>
          </div>

          <SubmitButton title="Continue" />
        </form>
      </div>
    </div>
  );
};

export default UserDetailsPage;