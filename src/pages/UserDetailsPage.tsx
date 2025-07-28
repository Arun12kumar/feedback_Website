const UserDetailsPage = () => {
  return (
    <div className="relative h-[88vh] w-full">
      {/* Background Image */}
      <img
        src="/images/Blog page header.png"
        alt="background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-[55%] -translate-y-1/2 z-20 bg-blue-300 w-[40%] p-8 rounded-md shadow-lg">
        <form >
          <h1>Basic Details</h1>
        </form>
      </div>

    </div>
  );
};

export default UserDetailsPage;
