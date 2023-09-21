import { Link, useNavigate } from "react-router-dom";


export default function NavBar() {

  return (
    <Link to={`/`} className="flex items-center gap-2 text-lg md:text-xl font-bold"><img src="" alt="Logo" />FotoDrop</Link>
  )
}
