import Link from 'next/link';
import { useEffect } from 'react';







import router, { useRouter } from 'next/router';
const NotFound = () => {

    useEffect(()=>{
       setTimeout( ()=> {
           router.push('/');
       },3000)
    },[])
    return (
        <div className="notfound">
            <h1>Oops......</h1>
            <h2>That page  cannot be found.</h2>
            


            <p>Go back to the
                <Link href="/">
                <a className="btn-home"> Home</a>
                </Link>
            </p>
        </div>
    );
}
 
export default NotFound;