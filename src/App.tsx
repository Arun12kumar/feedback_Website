import { Route, Routes } from "react-router-dom"
import BasicLayout from "./layouts/BasicLayout"
import UserDetailsPage from "./pages/UserDetailsPage"
import CompanyDetailsPage from "./pages/CompanyDetailsPage"


const App = () => {
  return (
    <Routes>
      <Route element={<BasicLayout/>}>
        <Route path="/" element={<UserDetailsPage/>} />
        <Route path="/company" element={<CompanyDetailsPage/>} />
      </Route>
    </Routes>
  )
}

export default App