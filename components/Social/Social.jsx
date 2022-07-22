import styles from '../../styles/all.module.css';

export default function Social() {
    return (
        <div className={styles.cardSocial}>
            <a href="https://www.instagram.com/facynnn/" target="_blank">
                <img src="/svg/icons/instagram.svg" alt="Instragram Icon" />
            </a>
            <a href="https://www.youtube.com/channel/UCk9IaSW8sjdFNarHSEP_yNg" target="_blank">
                <img src="/svg/icons/youtube.svg" alt="YouTube Icon" />
            </a>
            <a href="https://github.com/Facynn" target="_blank">
                <img src="/svg/icons/github.svg" alt="GitHub Icon" />
            </a>
            <a href="https://discord.gg/M4mgKjfHXg" target="_blank">
                <img src="/svg/icons/discord.svg" alt="Discord Icon" />
            </a>
        </div>
    )
}
