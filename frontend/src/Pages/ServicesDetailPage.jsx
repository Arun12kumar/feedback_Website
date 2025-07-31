import React, { useState } from "react";
import Rectangle from "../component/Rectangle";
import InputText from "../component/InputText";
import SubmitButton from "../component/SubmitButton";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ChipSelect from "../component/ChipSelect";
import SelectInput from "../component/SelectInput";
import BackBtn from "../component/BackBtn";
import Message from "../component/Message";
import useFeedbackStore from "../store/useFeedbackStore";

const ServicesDetailPage = () => {
  const navigate = useNavigate();
  const { serviceDetails, setServiceDetails } = useFeedbackStore();
  const [errors, setErrors] = useState({});

  const services = [
    { id: "1", value: "UI/UX Design" },
    { id: "2", value: "Website Development" },
    { id: "3", value: "Mobile App Development" },
    { id: "4", value: "Custom Software" },
    { id: "5", value: "Branding & Logo Design" },
    { id: "6", value: "E-commerce Solutions" },
    { id: "7", value: "SEO & Digital Marketing" },
    { id: "8", value: "Maintenance & Support" },
  ];

  const budgetOptions = [
    { value: "<25k", label: "Below ₹25,000" },
    { value: "25k-50k", label: "₹25,000 – ₹50,000" },
    { value: "50k-1L", label: "₹50,000 – ₹1,00,000" },
    { value: "1L+", label: "Above ₹1,00,000" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setServiceDetails({
      ...serviceDetails,
      [name]: value
    });
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSelectChange = (name, value) => {
    setServiceDetails({
      ...serviceDetails,
      [name]: value
    });
  };

  const handleChipSelect = (selectedItems) => {
    setServiceDetails({
      ...serviceDetails,
      servicesNeeded: selectedItems
    });
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!serviceDetails.servicesNeeded?.length) {
      newErrors.servicesNeeded = 'Please select at least one service';
      isValid = false;
    }

    if (!serviceDetails.projectBudget) {
      newErrors.projectBudget = 'Please select project budget';
      isValid = false;
    }

    if (!serviceDetails.expectedTimeline?.trim()) {
      newErrors.expectedTimeline = 'Expected timeline is required';
      isValid = false;
    }

    if (!serviceDetails.projectDescription?.trim()) {
      newErrors.projectDescription = 'Project description is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate("/complete");
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
          <Link to="/">
            <div className="font-roboto bg-[hsl(188,78%,41%)] text-white w-7 h-7 flex justify-center items-center rounded-full">
              1
            </div>
          </Link>
          <div className="bg-[hsl(188,78%,41%)] w-16 md:w-20 rounded-full h-1"></div>
          <Link to="/business">
            <div className="font-roboto bg-[hsl(188,78%,41%)] text-white w-7 h-7 flex justify-center items-center rounded-full">
              2
            </div>
          </Link>
          <div className="bg-[hsl(188,78%,41%)] w-16 md:w-20 rounded-full h-1"></div>
          <div className="font-roboto bg-[hsl(188,78%,41%)] text-white w-7 h-7 flex justify-center items-center rounded-full">
            3
          </div>
          <div className="bg-[hsl(188,78%,41%)] w-16 md:w-20 rounded-full h-1"></div>
          <div className="font-roboto bg-[hsl(233,30%,95%)] text-[hsl(245,14%,49%)] w-7 h-7 flex justify-center items-center rounded-full">
            4
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <h1 className="text-xl font-semibold text-center mb-4">
            Look's Our Services
          </h1>
          <p className="text-base text-[hsl(188,78%,29%)] mb-6 text-center">
            Collects this information to better understand our service want.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mb-6">
            <ChipSelect
              title="Services Needed"
              items={services}
              placeholder="Select services"
              onSelectionChange={handleChipSelect}
              selectedItems={serviceDetails.servicesNeeded || []}
              error={errors.servicesNeeded}
              
            />
            <SelectInput
              title="Project Budget"
              name="projectBudget"
              placeholder="Select budget"
              options={budgetOptions}
              value={serviceDetails.projectBudget || ''}
              onChange={handleSelectChange}
              error={errors.projectBudget}
              
            />
            <InputText 
              title="Expected Timeline" 
              name="expectedTimeline"
              placename="Enter expected timeline" 
              value={serviceDetails.expectedTimeline || ''}
              onChange={handleChange}
              error={errors.expectedTimeline}
              
            />
            <Message 
              title="Project Description" 
              name="projectDescription"
              placename="Describe your project in short"
              value={serviceDetails.projectDescription || ''}
              onChange={handleChange}
              error={errors.projectDescription}
              
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Link to="/business">
              <BackBtn title="Back"/>
            </Link>
            <SubmitButton title="Continue"/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServicesDetailPage;