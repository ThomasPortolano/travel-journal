import Planet from './planet.png'

export default function Navbar() {
  return (
    <nav className="nav-container">
      <img className="logo" src={Planet} alt="planet logo" />
      <h1 className="blog-title">my travel journal</h1>
    </nav>
  )
}