import Rectangle from "../component/Rectangle";

const UserDetailsPage = () => {
    return (
        <div className="relative flex justify-center items-center h-screen w-screen bg-[linear-gradient(135deg,hsla(173,78%,78%,0.3)_0%,hsla(173,75%,53%,0.2)_100%)]">
            <div className=" w-[40%] p-8 rounded-md shadow-lg">
                <div className="flex flex-row items-center justify-center gap-3">
                    <div className="font-roboto bg-[hsl(245,100%,61%)] text-white w-7 h-7 flex justify-center items-center rounded-full">
                        1
                    </div>
                    <div className="bg-[hsl(245,100%,61%)] w-22 rounded-full h-1"></div>
                    <div className="font-roboto bg-[hsl(233,30%,95%)] text-[hsl(245,14%,49%)] w-7 h-7 flex justify-center items-center rounded-full">
                        2
                    </div>
                    <div className="bg-[hsl(233,30%,95%)] w-22 rounded-full h-1"></div>
                    <div className="font-roboto bg-[hsl(233,30%,95%)] text-[hsl(245,14%,49%)] w-7 h-7 flex justify-center items-center rounded-full">
                        3
                    </div>
                </div>
                <form>
                    <h1>Basic Details</h1>
                </form>
            </div>
            <Rectangle classname='absolute left-0 w-96 h-24 bg-[#bad9d6]'/>
            <Rectangle classname='absolute left-0 bottom-45 w-64 h-24 bg-[#2ee3d0]'/>

        </div>
    );
};

export default UserDetailsPage;
