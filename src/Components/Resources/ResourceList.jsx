import { Link } from "react-router-dom"

const textStyle = "p-2 px-5 py-2 hover:bg-gray-200 rounded-lg uppercase font-bold text-gray-400 hover:text-cyan-500"

function ResourceList() {
  return (
    <div className='fixed bg-white p-2 rounded-lg px-12 py-12'>
        <ul className="grid">
            <Link to="/products" target="_blank" className={`${textStyle}`}>Products</Link>
            <Link to="/course" target="_blank" className={`${textStyle} mt-4`}>Course</Link>
            <Link to="/blog" target="_blank" className={`${textStyle} mt-4`}>Blog</Link>
        </ul>
    </div>
  )
}

export default ResourceList