import { Route, Routes } from "react-router-dom"
import BasicLayout from "./layout/BasicLayout"
import UserDetailsPage from "./Pages/UserDetailsPage"
import CompanyDetailsPage from "./Pages/CompanyDetailsPage"
import ServicesDetailPage from "./Pages/ServicesDetailPage"


const App = () => {
  return (
    <Routes>
      <Route element={<BasicLayout/>}>
        <Route path="/" element={<UserDetailsPage/>} />
        <Route path="/business" element={<CompanyDetailsPage/>} />
        <Route path="/service" element={<ServicesDetailPage/>} />
      </Route>
    </Routes>
  )
}

export default App