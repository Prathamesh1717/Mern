import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Service from './pages/Service.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import Footer from './Components/Footer.jsx'
import Navbar from './Components/Navbar.jsx'
import Error from './Components/Error.jsx'
import Logout from './pages/Logout.jsx'
import AdminLayout from './Components/Layouts/AdminLayout.jsx'
import AdminUsers from './Components/Layouts/AdminUsers.jsx'
import AdminContacts from './Components/Layouts/AdminContacts.jsx'
import AdminUpdate from './Components/Layouts/AdminUpdate.jsx'

function App() {
  

  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <header>
          <Navbar />
        </header>

        <main className="app-content">
          <Routes>
            <Route path = "/" element={<Home />} />
            <Route path = "/about" element={<About />} />
            <Route path = "/contact" element={<Contact />} />
            <Route path = "/service" element={<Service />} />
            <Route path = "/register" element={<Register />} />
            <Route path = "/login" element={<Login />} />
            <Route path = "/logout" element = {<Logout />} />
            <Route path = "*" element={<Error />} />

            <Route path= "/admin" element = {<AdminLayout />}>
              <Route path = "users" element = {<AdminUsers />} />
              <Route path = "contacts" element = {<AdminContacts />} />
              <Route path='users/:id/edit' element={<AdminUpdate />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
