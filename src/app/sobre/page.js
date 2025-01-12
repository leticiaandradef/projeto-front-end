import styles from "./sobre.module.css";
import Image from "next/image";

export default function Sec() {
  return (
    <div>
      <h1 className={styles.h1}>Sobre a Sanrio</h1>

      <p className={styles.p}>
        Sanrio® é uma marca lifestyle global mais conhecida pela personagem Hello Kitty®, que foi criada em 1974 e detentora de muitas outras marcas de personagens amadas, como My Melody™, Kuromi™, LittleTwinStars™, Cinnamoroll™, Pompompurin™, gudetama™, Aggretsuko™, Chococat™, Badtz-Maru™ e Keroppi™.
      </p>

      <p className={styles.p}>
        A Sanrio foi fundada com base na filosofia de que um pequeno presente pode trazer felicidade e amizade às pessoas de todas as idades. Desde 1960, esta filosofia tem servido de inspiração para oferecer produtos, serviços e atividades que promovam a comunicação e inspirem experiências únicas aos consumidores em todo o mundo. Hoje, os negócios da Sanrio se estendem à indústria do entretenimento com várias séries de conteúdos, games e parques temáticos.
      </p>

      <h2 className={styles.h2}>One World, Connecting Smiles.</h2>

      <p className={styles.pp}>
        Com a ideia de “One World, Connecting Smiles”, a Sanrio pretende levar sorrisos a todas as pessoas.
      </p>

      <h2 className={styles.h2}>
        Presente em mais de 130 países, a Sanrio está entre as maiores licenciadoras de marcas do mundo.
      </h2>

      <Image
        className={styles.img}
        src='/image/kitty.png'
        alt="Imagem kitty"
        width={300}
        height={200}
      />
    </div>
  );
}
