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
        fallback:false
       }
    )
}
export const getStaticProps = async (context) =>{
      const  id = context.params.id;
      const  res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
      const  data = await res.json();
     
      return {
          props : {post : data }
      }
}
const Datiels = ({post}) => {
    return (
        <div className="data-post">
             <h2>{post.name}</h2>
             <p><strong>Email : </strong>{post.email}</p>
             <p><strong>website : </strong>{post.website}</p>
             <p><strong>username : </strong>{post.username}</p>
             <p><strong>street : </strong>{post.address.street}</p>
             <p><strong>City : </strong>{post.address.city}</p>
             <p><strong>zipcode : </strong>{post.address.zipcode}</p>
             <p><strong>Company Name : </strong>{post.company.name}</p>
            {/* <p>{post.website}</p> */}
        </div>
    );
}
 
export default Datiels;