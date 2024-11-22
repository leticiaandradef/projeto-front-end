import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image className={styles.img} src='/images/sanrio.png' alt="Imagem Logo sanrio" width={300} height={200}/>
    </div>
);
}