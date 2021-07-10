import Head from 'next/head'
import Link from "next/link";
import styles from  '../styles/Home.module.css';
const About = () => {
    return (
        <>
         <Head>
          <title>3bdallah</title>
          <meta name="keywords" content="3bdallah" />
        </Head>  
        <div>
            <h1 className={styles.title}>About me </h1>
            <p>
                Ad ut cupidatat culpa dolor.
            </p>
            <p>Irure esse incididunt excepteur aliquip elit id do commodo est ullamco aliqua reprehenderit id nulla. Mollit commodo adipisicing eu consectetur ex nulla id eiusmod fugiat minim fugiat. Et eiusmod consequat eu labore aliqua nostrud pariatur minim excepteur irure ipsum veniam enim minim. Et officia amet non cupidatat mollit amet ad irure eiusmod consectetur dolore dolor amet. Cupidatat nulla eu nostrud anim aliqua cupidatat. Velit non culpa et qui non minim mollit ullamco sunt.</p>
        <Link href="/" >
           <a className={styles.btn}> back to home</a>
        </Link>
        </div>
        </>
    );
}
 
export default About;