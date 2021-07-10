import Link from "next/link"; 
const Navbar = () => {
    return (
    <nav>
      <div className="logo">
        <h2>logo</h2>
      </div>
      
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>about</a>
      </Link>
      <Link href="/blog/">
        <a>blog</a>
      </Link>
     </nav>
    );
}
 
export default Navbar;