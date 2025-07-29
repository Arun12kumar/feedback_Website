import { Route, Routes } from "react-router-dom"
import BasicLayout from "./layout/BasicLayout"
import UserDetailsPage from "./Pages/UserDetailsPage"
import CompanyDetailsPage from "./Pages/CompanyDetailsPage"
import ServicesDetailPage from "./Pages/ServicesDetailPage"
import FinishPage from "./Pages/FinishPage"


const App = () => {
  return (
    <Routes>
      <Route element={<BasicLayout/>}>
        <Route path="/" element={<UserDetailsPage/>} />
        <Route path="/business" element={<CompanyDetailsPage/>} />
        <Route path="/service" element={<ServicesDetailPage/>} />
        <Route path="/complete" element={<FinishPage/>} />
      </Route>
    </Routes>
  )
}

export default App