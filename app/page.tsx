import Image from "next/image";
import styles from "./page.module.css";

import Map from "./components/MapComponent";

export default function Home() {
  return (
    <div className={styles.container}>
      <Map />
    </div>
  );
}
