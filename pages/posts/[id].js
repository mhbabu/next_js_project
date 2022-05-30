import Meta from "../../components/Meta";

export default function SinglePost({singlePost}) {
    const {id,title, body} = singlePost;
  return (
   <>
   <Meta title={title} keywords="Mahadi, Babu, Hassan" description={body} />
    <div className="container mt-5 pt-5">
      <h1>Dynamic Post id is - {id} </h1>
    </div>
   </>
  )
}

export async function getServerSideProps(context) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
    const singlePost = await res.json()
    return { props: { singlePost } }
  }