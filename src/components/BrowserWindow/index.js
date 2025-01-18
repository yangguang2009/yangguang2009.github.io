import styles from "./styles.module.css";

export default function BrowserWindow({
  srcDoc,
  minHeight,
  url = "http://localhost:3000",
}) {
  return (
    <div className={styles.browserWindow}>
      <div className={styles.browserWindowHeader}>
        <div className={styles.buttons}>
          <span className={styles.dot} style={{ background: "#f25f58" }} />
          <span className={styles.dot} style={{ background: "#fbbe3c" }} />
          <span className={styles.dot} style={{ background: "#58cb42" }} />
        </div>
        <div className={styles.browserWindowAddressBar}>{url}</div>
        <div className={styles.browserWindowMenuIcon}>
          <div>
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </div>
        </div>
      </div>

      <div className={styles.browserWindowBody}>
        <iframe
          srcDoc={srcDoc}
          style={{ width: "100%", minHeight, border: "none" }}
          title="Game Window"
        />
      </div>
    </div>
  );
}
