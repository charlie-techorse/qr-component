import styles from './Panel.module.css'

export function Panel() {
  return <div className={styles.panel}>
    <img className={styles.qr} src='/image-qr-code.png'></img>
    <div className={styles.text}>
      <h1 className={styles.title}>Improve your front-end skills by building projects</h1>
    </div>
  </div>
}