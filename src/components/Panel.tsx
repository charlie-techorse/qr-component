import styles from './Panel.module.css'

export function Panel() {
  return <div className={styles.panel}>
    <img className={styles.qr} src='/image-qr-code.png'></img>
  </div>
}