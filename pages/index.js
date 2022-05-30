import Link from "next/link";
import Meta from "../components/Meta";

export async function getServerSideProps() {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=12`
  );

  const postList = await res.json();

  const allPosts = postList.map((post) => ({
    loc: `https://jsonplaceholder.typicode.com/posts/${post.id}`,
    lastmod: new Date().toISOString(),
  }));

  return { props: { postList } };
}

export default function Home({ postList }) {
  return (
    <>
      <Meta
        title="First Project"
        keywords="Mahadi, Hassan"
        description="....des"
      />
      <div className="container">
        <div className="row mt-5">
          {postList.map((item, index) => {
            return (
              <div key={index}>
                <div className="col-md-4 mt-3">
                  <div
                    className="card"
                    style={{ width: "18rem", marginTop: "10px" }}
                  >
                    <div className="card-body">
                      <h5 className="card-title">
                        {item.title.substring(0, 25)}...
                      </h5>
                      <p className="card-text">
                        {item.body.substring(0, 150)}...
                      </p>
                      <Link href="/posts/[id]" as={`/posts/${item.id}`}>
                        <a className="btn btn-primary">Read More</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
