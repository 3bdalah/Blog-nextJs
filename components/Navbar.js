import Link from "next/link"; 
const Navbar = () => {
    return (
    <nav>
      <div className="logo">
        <h2>logo</h2>
      </div>
      
      <Link>
        <a>Home</a>
      </Link>
      <a>about</a>
      <a>blog</a>
     </nav>
    );
}
 
export default Navbar;