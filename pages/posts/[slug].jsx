import { Layout } from '../../components/Layout';
import { MDXRemote } from 'next-mdx-remote';
import { getFiles, getFileBySlug } from "../../library/mdx";
import MDXComponents from '../../components/MDXComponents';
import documentSetTitle from '../../components/documentSetTitle';
import styles from '../../styles/all.module.css';


export default function Post({ source, frontmatter }) {
    documentSetTitle(`${frontmatter.title} • Facyn`)
    return <Layout>
        <div className={styles.post}>
            <div className={styles.postCard}>
                <h1 className={styles.title}>{frontmatter.title}</h1>
                <i className={styles.info}>{frontmatter.author} &bull; {frontmatter.date}</i>
                <span className={styles.description}>{frontmatter.description}</span>
                <div className={styles.pageLineDivisor}></div>
                <MDXRemote {...source} components={MDXComponents}/>
            </div>
            <div className={styles.postMoreContent}>
            <iframe src="https://discord.com/widget?id=924544084725608458&theme=white" width="350" height="500" allowtransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
            <br />
            <div className={styles.pageLineDivisor}></div>
            <br />
            <div className={styles.share}>
            <span>Compartir El Blog</span>
            <div className={styles.pageLineDivisor}></div>
                <div className={styles.pageFlexIconMin}>
                    <a href={`https://web.whatsapp.com/send?text=https://facyn.xyz/posts/${frontmatter.slug} - ¡Échale un vistazo a este blog de @Facyn!`} target="_blank"><img src="/svg/icons/whatsapp.svg" alt="WhatsApp Icon" /></a>
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=https://facyn.xyz/posts/${frontmatter.slug}`} target="_blank"><img src="/svg/icons/facebook.svg" alt="Facebook Icon" /></a>
                    <a href={`https://twitter.com/intent/tweet?url=https://facyn.xyz/posts/${frontmatter.slug} - ¡Échale un vistazo a este blog de @Facyn!`} target="_blank"><img src="/svg/icons/twitter.svg" alt="Twitter Icon"/></a>
                </div>
            </div>
            </div>
        </div>
    </Layout>
}

export async function getStaticPaths() {
    const posts = await getFiles();
    const paths = posts.map((post) => ({
        params: {
            slug: post.replace(/\.mdx/, ""),
        }
    }));
    
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const { source, frontmatter } = await getFileBySlug(params.slug);
    
    return {    
        props: { source, frontmatter }
    }

};
