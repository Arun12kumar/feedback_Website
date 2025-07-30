import { ArrowRight } from "lucide-react";


const SubmitButton = ({title}) => {

  return (
    <button  className="w-full bg-[#17a2b8] text-white py-2 rounded hover:bg-[#168ea1] transition flex justify-center items-center gap-1">
      <p>{title}</p>
      <ArrowRight />
    </button>
  );
};

export default SubmitButton;
