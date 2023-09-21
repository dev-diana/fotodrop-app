import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg"

export default function NavBar() {

  return (
    <Link to={`/`} className="flex items-center gap-2 text-lg md:text-xl font-bold"><img src={logo} alt="Logo" />FotoDrop</Link>
  )
}