import { Layout } from '../components/Layout';
import styles from '../styles/all.module.css';
import { getAllFilesMetaData } from '../library/mdx.js';
import documentSetTitle from '../components/documentSetTitle';

export default function Posts({ posts }) {
    documentSetTitle('Blogs • Facyn')
    return (
        <Layout>
            <br />
            <br />
            <br />
            <br />
            <h1 class={styles.pageTitle}>Blogs</h1>
            <div className={styles.pageConectorMini}>
              <div></div>
              <div></div>
            </div>
            <div className={styles.posts}>
            {posts.map((post) => (
                <a href={`/posts/${post.slug}`}>
                    <h3 title={post.title}>{post.title}</h3>
                    <span>{post.date}</span>
                    <p title={post.description}>{post.description}</p>
                </a>
            ))}
            </div>
            <br />
            <br />
            <br />
            <br />
        </Layout>
    )
}

export async function getStaticProps() {
    const posts = await getAllFilesMetaData();
  
    return {
      props: { posts },
    };
  }