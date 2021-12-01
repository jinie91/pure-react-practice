import {Link} from "react-router-dom"

export default function Links() {
  return (
  <ul>
    <Link to="/">Home</Link>
    <Link to="/gallery">Gallery</Link>
    <Link to="/filter">Filter</Link>
  </ul>
  )
}