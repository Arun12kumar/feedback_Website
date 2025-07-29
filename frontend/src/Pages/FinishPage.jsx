
import Rectangle from "../component/Rectangle";
import InputText from "../component/InputText";
import Message from "../component/Message";
import SubmitButton from "../component/SubmitButton";
import { Link } from "react-router-dom";
import BackBtn from "../component/BackBtn";

const FinishPage = () => {

  return (
    <div className="relative flex justify-center items-center min-h-screen w-full bg-white overflow-hidden">
      {/* RECTANGLES - Positioned Like the Design */}
      <Rectangle className="absolute top-[15%] left-[-10%] w-[250px] sm:w-[300px] h-[100px] bg-[#c9e3f4] rotate-[-10deg] opacity-90 z-0" />
      <Rectangle className="absolute top-[40%] left-[20%] w-[300px] sm:w-[400px] h-[100px] bg-[#17a2b8] rotate-[-5deg] opacity-80 z-0" />
      <Rectangle className="absolute top-[30%] right-[-10%] w-[250px] sm:w-[300px] h-[100px] bg-[#a8e4f0] rotate-[10deg] opacity-80 z-0" />
      <Rectangle className="absolute bottom-[10%] right-[0%] w-[300px] sm:w-[400px] h-[100px] bg-[#d7e6f3] rotate-[5deg] opacity-70 z-0" />

      <div className="w-[90%] md:w-[60%] lg:w-[40%] p-8 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 shadow-lg z-10">
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
          <Link to="/service">
            <div className="font-roboto bg-[hsl(188,78%,41%)] text-white w-7 h-7 flex justify-center items-center rounded-full">
              3
            </div>
          </Link>
          <div className="bg-[hsl(188,78%,41%)] w-16 md:w-20 rounded-full h-1"></div>
          <div className="font-roboto bg-[hsl(188,78%,41%)] text-white w-7 h-7 flex justify-center items-center rounded-full">
            4
          </div>
        </div>
        <form >
          <h1 className="text-xl font-semibold text-center mb-4">
            Thank You! Submission Successful
          </h1>
          <p className="text-base text-[hsl(188,78%,29%)] mb-6 text-center">
            We’ve received your details and will get back to you shortly. You’re awesome for completing the process!
          </p>

          <div className="grid grid-cols-1 gap-4 mb-6">
            <Message title="Message" placename="Type Feedback"/>
          </div>

          <Link to="/">
            <BackBtn />
          </Link>


        </form>
      </div>
    </div>
  );
};

export default FinishPage;
