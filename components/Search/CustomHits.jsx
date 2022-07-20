import { connectHits } from 'react-instantsearch-dom';
import styles from '../../styles/all.module.css';

const Hits = ({ hits }) => (
    <div className={styles.posts}>
        {hits.map(hit => (
            <a href={hit.link} key={hit.objectID}>
                <h3 title={hit.title}>{hit.title}</h3>
                <p title={hit.title}>{hit.title}</p>
            </a>
        ))}
    </div>
);

export default connectHits(Hits);
