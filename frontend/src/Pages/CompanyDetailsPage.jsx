import Rectangle from "../component/Rectangle";
import InputText from "../component/InputText";
import SubmitButton from "../component/SubmitButton";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import ChipSelect from "../component/ChipSelect";
import SelectInput from "../component/SelectInput";
import BackBtn from "../component/BackBtn";
import Message from "../component/Message";

const CompanyDetailsPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/service')
  };

  const items = [
    { id: "1", value: "E-commerce" },
    { id: "2", value: "Healthcare & Wellness" },
    { id: "3", value: "Education & eLearning" },
    { id: "4", value: "Finance & Fintech" },
    { id: "5", value: "Logistics & Transportation" },
    { id: "6", value: "Real Estate & Property Management" },
    { id: "7", value: "Travel & Hospitality" },
    { id: "8", value: "Retail & Point of Sale" },
    { id: "9", value: "Construction & Infrastructure" },
    { id: "10", value: "Entertainment & Media" },
    { id: "11", value: "Legal Services" },
    { id: "12", value: "Manufacturing & Automation" },
    { id: "13", value: "NGOs & Social Enterprises" },
    { id: "14", value: "Startups & Tech Innovators" },
    { id: "15", value: "Marketing & Advertising Agencies" },
  ];

  const options=[
  { value: "1-10", label: "1–10 employees" },
  { value: "11-50", label: "11–50 employees" },
  { value: "51-200", label: "51–200 employees" },
  { value: "201-500", label: "201–500 employees" },
  { value: "501-1000", label: "501–1,000 employees" },
  { value: "1001-5000", label: "1,001–5,000 employees" },
  { value: "5001-10000", label: "5,001–10,000 employees" },
  { value: "10000+", label: "10,000+ employees" }
  ]

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
          <div className="font-roboto bg-[hsl(188,78%,41%)] text-white w-7 h-7 flex justify-center items-center rounded-full">
            2
          </div>
          <div className="bg-[hsl(188,78%,41%)] w-16 md:w-20 rounded-full h-1"></div>
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
            Business Details
          </h1>
          <p className="text-base text-[hsl(188,78%,29%)] mb-6 text-center">
            Collects this information to better understand and serve your
            business.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <InputText title="Business Name" placename="Enter business name" />
            <InputText title="Business Email(optional)" placename="Enter your business Email" types="email" />
            <InputText title="Contact" placename="Phone number" types="number" />
            <InputText
              title="Business website URL (optional)"
              placename="Enter website URL"
            />
          </div>
          <div className="grid grid-cols-1 gap-4 mb-6">
            <ChipSelect
              title="Business type"
              items={items}
              placeholder="Select a Brand"
            />
            <SelectInput
              title="Company Size"
              placeholder="Select size"
              options={options}
            />
            <Message title="About Bisinuss" placename="Describe your business in short"/>
          </div>
          <div className="grid grid-cols-2 gap-4">
          <Link to="/">
            <BackBtn/>
           </Link>
           <SubmitButton title="Continue"/>
          </div>
        
        </form>
      </div>
    </div>
  );
};

export default CompanyDetailsPage;
