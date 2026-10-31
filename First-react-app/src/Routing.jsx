import {BrowserRouter, Routes, Route, Link, Outlet, NavLink, } from "react-router-dom";

const navStyles = ({ isActive }) => ({
  color: isActive ? "red" : "#333",
  fontWeight: isActive ? "bold" : "normal",
});

// const {services} = useParams();
function Home() {
  return <h1>Home Page</h1>;
}
function About() {
  return <h1>About Page</h1>;
}
function Services() {
  return (
    <>
      <h1>Services Page</h1>
      <nav>
        <Link to="/services/catering">Catering | </Link>
        <Link to="/services/laundry">Laundry</Link>
      </nav>
      <Outlet />
    </>
  );
}

function Catering() {
  return (
    <>
      <ul>
        <li>Chapati</li>
        <li>Pilau</li>
        <li>Chicken</li>
      </ul>
    </>
  );
}

function Laundry() {
  return (
    <>
      <ul>
        <li>Duvets</li>
        <li>Curtains</li>
        <li>Carpet</li>
      </ul>
    </>
  );
}

export default function Pages() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/" style={navStyles}>
          Home
        </NavLink>|{" "}
        <NavLink to="/About" style={navStyles}>
          About
        </NavLink>|{" "}
        <NavLink to="/Services" style={navStyles}>
          Services
        </NavLink>|{" "}
      </nav>

      {/*Actual routes*/}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />}>
          <Route path="/services/catering" element={<Catering />}></Route>
          <Route path="/services/laundry" element={<Laundry />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
