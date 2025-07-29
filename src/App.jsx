import { Route, Routes } from "react-router-dom"
import BasicLayout from "./layout/BasicLayout"
import UserDetailsPage from "./Pages/UserDetailsPage"
import CompanyDetailsPage from "./Pages/CompanyDetailsPage"


const App = () => {
  return (
    <Routes>
      <Route element={<BasicLayout/>}>
        <Route path="/" element={<UserDetailsPage/>} />
        <Route path="/business" element={<CompanyDetailsPage/>} />
      </Route>
    </Routes>
  )
}

export default App