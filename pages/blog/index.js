import styles from '../../styles/Blog.module.css';
import Link from "next/link";

export const getStaticProps = async () => {
    const res  = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
   
    return {
        props:{ posts : data }
    }
}



const Blog = ({posts}) => {
    return (
     <div>
         <h1>All Posts Blog</h1>
         {posts.map(post => {
             return (
                   <Link href={`/blog/`+ post.id} key={post.id}>
                   <a className={styles.single}>
                        <h3>{post.name}</h3>
                        
                    </a>
                   </Link>
             )
         })}    

         <Link href="/" >
         <a className={styles.go}>Go Home </a>
         </Link>      
     </div>
    );
}
 
export default Blog;