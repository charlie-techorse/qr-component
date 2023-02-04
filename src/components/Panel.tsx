import styles from './Panel.module.css'

export function Panel() {
  return <div className={styles.panel}>
    <img className={styles.qr} src='/image-qr-code.png'></img>
    <div className={styles.text}>
      <h1 className={styles.title}>Improve your front-end skills by building projects</h1>
      <p className={styles.paragraph}>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
    </div>
  </div>
}