import styles from "./page.module.css";

import Map from "./components/MapComponent";
import TopNavBar from "./components/TopNavBar";

export default function Home() {
  return (
    <div>
      <TopNavBar />
      <Map />
    </div>
  );
}
