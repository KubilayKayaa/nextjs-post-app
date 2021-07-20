import styles from "../../styles/Home.module.css";
import Head from "next/head";

function index({ post }) {
  return (
    <div className={styles.postDetail}>
      <Head>
        <title>{post.data.title}</title>
      </Head>
      <h3>{post.data.title}</h3>
      <p>{post.data.description}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://nextjs-post-app.vercel.app/api/posts/${context.query.id}`
  );
  const post = await res.json();

  return {
    props: { post },
  };
}

export default index;
