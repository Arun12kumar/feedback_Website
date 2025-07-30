import { MaterialReactTable } from "material-react-table";

const Enquiries = () => {
  const data = [
    {
      _id: "1",
      name: "John Doe",
      phoneNumber: "1234567890",
      businessName: "Doe Enterprises",
      service: "Web Development",
      availability: "Full-time",
      year: "2023",
      message: "Looking for a website redesign",
      status: "Pending",
    },
    {
      _id: "2",
      name: "Jane Smith",
      phoneNumber: "9876543210",
      businessName: "Smith Studios",
      service: "Mobile App Development",
      availability: "Part-time",
      year: "2024",
      message: "Need help with an app launch",
      status: "Approved",
    },
    {
      _id: "3",
      name: "Alice Johnson",
      phoneNumber: "5551234567",
      businessName: "AJ Media",
      service: "SEO Optimization",
      availability: "Freelance",
      year: "2023",
      message: "Requesting a marketing consultation",
      status: "Rejected",
    },
    {
      _id: "3",
      name: "Alice Johnson",
      phoneNumber: "5551234567",
      businessName: "AJ Media",
      service: "SEO Optimization",
      availability: "Freelance",
      year: "2023",
      message: "Requesting a marketing consultation",
      status: "Rejected",
    },
    {
      _id: "3",
      name: "Alice Johnson",
      phoneNumber: "5551234567",
      businessName: "AJ Media",
      service: "SEO Optimization",
      availability: "Freelance",
      year: "2023",
      message: "Requesting a marketing consultation",
      status: "Rejected",
    },
  ];

  const columns = [
    {
      header: "Si. No",
      accessorFn: (_row, index) => index + 1,
      id: "serialNumber",
      size: 50,
      Cell: ({ cell }) => cell.getValue(),
    },
    { accessorKey: "name", header: "Name" },
    { accessorKey: "phoneNumber", header: "Phone" },
    { accessorKey: "businessName", header: "Business" },
    { accessorKey: "service", header: "Service" },
    { accessorKey: "availability", header: "Availability" },
    { accessorKey: "year", header: "Year" },
    { accessorKey: "message", header: "Message" },
    { accessorKey: "status", header: "Status" },
  ];

 return (
  <div className="">
    <MaterialReactTable
      columns={columns}
      data={data}
      muiTableContainerProps={{
        sx: {
          maxHeight: '60vh',
          
        },
      }}
    />
  </div>
);
};

export default Enquiries;
