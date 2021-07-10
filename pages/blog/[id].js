export const getStaticPaths = async() => {
    const  res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    const paths = data.map(post => {
        return{ 
            params : {id : post.id.toString() }
        }
    });
    return ({
        paths,
        fallback:false}
    )
}
export const getStaticProps = async (context) =>{
      const id = context.params.id;
      const  res = await fetch('https://jsonplaceholder.typicode.com/users' + id);
      const  data = await res.json();
      console.log(data);
      return {
          props : {post : data }
      }
}
const Datiels = (post) => {
    return (
        <div>
            <h1>
                {post.email}
            </h1>
            <p>{post.website}</p>
        </div>
    );
}
 
export default Datiels;