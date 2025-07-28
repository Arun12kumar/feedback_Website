const UserDetailsPage = () => {
  return (
    <div className="relative h-[88vh] w-full">
      {/* Background Image */}
      <img
        src="/images/Blog page header.png"
        alt="background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-[55%] -translate-y-1/2 z-20 bg-[hsl(233,30%,95%,0.1)] backdrop-blur-sm w-[40%] p-8 rounded-md shadow-lg">
        <div className="flex flex-row items-center justify-center gap-3">
          <div className="font-roboto bg-[hsl(245,100%,61%)] text-white w-7 h-7 flex justify-center items-center rounded-full">1</div>
          <div className="bg-[hsl(245,100%,61%)] w-22 rounded-full h-1"></div>
          <div className="font-roboto bg-[hsl(0,0%,100%)] text-[hsl(245,14%,49%)] w-7 h-7 flex justify-center items-center rounded-full">2</div>
          <div className="bg-[hsl(0,0%,100%)] w-22 rounded-full h-1"></div>
          <div className="font-roboto bg-[hsl(0,0%,100%)] text-[hsl(245,14%,49%)] w-7 h-7 flex justify-center items-center rounded-full">3</div>
        </div>
        <form >
          <h1>Basic Details</h1>
        </form>
      </div>

    </div>
  );
};

export default UserDetailsPage;
