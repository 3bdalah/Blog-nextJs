import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



import Link from 'next/link'; 

export default function Home() {
  return (
    <>
      <Head>
          <title>3bdallah</title>
          <meta name="keywords" content="3bdallah" />
      </Head>   
      <div>
        <h1 className={styles.title}> Homepage</h1>
        <p className={styles.text} >Dolor laborum incididunt esse nisi excepteur amet ex fugiat. Consectetur nulla dolore commodo magna eu aute sint cupidatat Lorem dolor cillum deserunt reprehenderit. Irure laboris laboris ipsum reprehenderit adipisicing Lorem enim cillum in cupidatat cupidatat nulla exercitation exercitation. In ullamco laboris id ex officia ea ipsum id anim cupidatat proident laborum nisi. Aute irure incididunt sit fugiat ut proident consequat.</p>
        <Link href="/blog/">
          <a  className={styles.btn}>go blog</a>
        </Link>
      </div>
      
    </>
  )
}
