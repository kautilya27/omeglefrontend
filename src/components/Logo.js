import { Link } from "react-router-dom"

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <div className="flex items-center">
        <div className="text-3xl font-bold">
          <span className="text-blue-500">O</span>
          <span className="text-orange-500">megle</span>
        </div>
        <div className="ml-2 text-sm bg-green-500 text-white px-2 py-1 rounded">Online</div>
      </div>
    </Link>
  )
}

export default Logo
