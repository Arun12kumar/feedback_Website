import { Route, Routes } from "react-router-dom";
import BasicLayout from "./layout/BasicLayout";
import UserDetailsPage from "./Pages/UserDetailsPage";
import CompanyDetailsPage from "./Pages/CompanyDetailsPage";
import ServicesDetailPage from "./Pages/ServicesDetailPage";
import FinishPage from "./Pages/FinishPage";
import AuthLayout from "./layout/AuthLayout";
import SignInPage from "./Pages/SignInPage";
import DashboardLayout from "./layout/DashboardLayout";
import Enquiries from "./Pages/DashboardPages/Enquiries";
import ProtectedRoute from "./utils/ProtectedRoute"

const App = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/signin" element={<SignInPage />} />
      </Route>

      {/* Protected routes */}
      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard/enquiries" element={<Enquiries />} />
        </Route>
      </Route>

      <Route element={<BasicLayout />}>
        <Route path="/" element={<UserDetailsPage />} />
        <Route path="/business" element={<CompanyDetailsPage />} />
        <Route path="/service" element={<ServicesDetailPage />} />
        <Route path="/complete" element={<FinishPage />} />
      </Route>
    </Routes>
  );
};

export default App;
