import { Layout } from '../components/Layout';
import styles from '../styles/all.module.css';
import { getAllFilesMetaData } from '../library/mdx.js';
import documentSetTitle from '../components/documentSetTitle';
import Contact from '../components/Contact/Contact.jsx';

export default function Home({ posts }) {
  documentSetTitle('Inicio • Facyn')
  let randomPosts = getMultipleRandomPosts(posts, 2);

  function getMultipleRandomPosts(posts, num) {
    const shuffled = [...posts].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num)
  }

  return (
      <Layout>
        <div className={styles.cardAboutme}>
          <div className={styles.aboutme}>
            <img src="/facyn.ico" className={styles.cardLogo} alt="Facyn Logo" />
            <span>@Facyn</span>
            <p>Hola, mi nombre es <b>Facundo Grieco</b> alias <b>Facyn</b>! 😀 Me localizo en 📍 <b>Santa Fe, Argentina</b>, tengo 16 años y estoy estudiando en la escuela <b>EETP 275 (Escuela Educación Técnica N° 275)</b></p>
            <div className={styles.pageLineDivisor}></div>
            <div className={styles.cardSocial}>
              <a href="https://www.instagram.com/facynnn/" target="_blank">
                <img src="/svg/icons/instagram.svg" alt="Instragram Icon" />
              </a>
              <a href="https://www.youtube.com/watch?v=aSMORLgMC3I&t=3s" target="_blank">
                <img src="/svg/icons/youtube.svg" alt="YouTube Icon" />
              </a>
              <a href="https://github.com/Facynn" target="_blank">
                <img src="/svg/icons/github.svg" alt="GitHub Icon" />
              </a>
              <a href="https://discord.gg/M4mgKjfHXg" target="_blank">
                <img src="/svg/icons/discord.svg" alt="Discord Icon" />
              </a>
            </div>
          </div>
          <div className={styles.pageConector}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
          </div>
        </div>
        <h2 className={styles.pageSubtitle}>Skills</h2>
        <div className={styles.pageConectorMini}>
              <div></div>
              <div></div>
        </div>
        <div className={styles.skills} id="skills">
            <div className={styles.pageFlex}>
              <img src="/svg/icons/html5.svg" title="Lenguaje: HTML5" alt="HTML5 Icon" />
              <img src="/svg/icons/css3.svg" title="Lenguaje: CSS3" alt="CSS3 Icon" />
              <img src="/svg/icons/javascript.svg" title="Lenguaje: JavaScript" alt="JavaScript Icon" />
              <img src="/svg/icons/nodejs.svg" title="Lenguaje: NodeJS" alt="NodeJS Icon" />
            </div>
            <div className={styles.pageLineDivisor}></div>
            <p>Estas son mis habilidades actuales, aunque sigo aprendiendo más y más, como por ejemplo ahora mismo estoy avanzando con <b>React</b> y puede que en un tiempo aparezca aquí.</p>
        </div>
        <div className={styles.pageConector}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
        </div>
        <h2 className={styles.pageSubtitle}>¡Un poco más de mi!</h2>
        <div className={styles.pageConectorMini}>
              <div></div>
              <div></div>
        </div>
        <div className={styles.moreAboutMe}>
          <div className={styles.cardQuestion}>
            <span>¿Porque el nombre "Facyn"?</span>
            <div className={styles.response}>
              <p>Todo comenzo cuando un dia empeze a jugar Valorant (Juego similiar a el CS:GO), era en la epoca de fase "BETA", osea que el juego estaba en modo de prueba y opiniones de la gente. Como todo juego contas con un incio de sesión o crear una cuenta, especificamente yo debia crearme una y ahi fue cuando jugue con las letras de mi nombre real (Facundo) y agregue la famosa "Y" por la "U" y tambien abreviandolo, quedando asi el apodo "Facyn".</p>
            </div>
          </div>
          <div className={styles.cardQuestion}>
            <span>¿Que me inspira a programar?</span>
            <div className={styles.response}>
              <p>Me inspiro mucho en el contenido que veo el cual es muy frecuente, como tutoriales o proyectos que son muy entretenidos mayormente. Además ver mis propios logros es algo también que me inspira bastante.</p>
            </div>
          </div>
        </div>
        <div className={styles.pageConector}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
        </div>
        <h2 className={styles.pageSubtitle}>Blogs Aleatorios</h2>
        <div className={styles.pageConectorMini}>
              <div></div>
              <div></div>
        </div>
        <div className={styles.postsRandom}>
        {randomPosts.map((post) => (
              <a href={`/posts/${post.slug}`} target="_blank">
                <h3 title={post.title}>{post.title}</h3>
                <span>{post.date}</span>
                <p title={post.description}>{post.description}</p>
              </a>
        ))}
        </div>
        <div className={styles.pageConectorMini}>
              <div></div>
              <a href="/posts" className={styles.pageButton}>Ver todos</a>
        </div>
        <div className={styles.pageConector}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
        </div>
        <h2 className={styles.pageSubtitle}>Contacto</h2>
        <div className={styles.pageConectorMini}>
              <div></div>
              <div></div>
        </div>
        <Contact/>
      </Layout>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesMetaData();

  return {
    props: { posts },
  };
}
