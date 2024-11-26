import styles from "./personagens.module.css";
import Image from "next/image";

export default function terc() {
  return (
    <div>
      <h1 className={styles.h1}>Personagens</h1>

      <Image className={styles.img} src='/image/cinna.png' alt="Imagem Logo sanrio" width={200} height={200}/>
      <h2 className={styles.h2}>Cinnamoroll</h2>
      <p className={styles.p}>Aniversário: 6 de Março</p>
      <p className={styles.pp}> O Cinnamoroll é um filhote de cachorro branco que se parece com uma nuvem macia. Ele tem o rabinho enrolado como um biscoitinho de canela (Cinnamon Roll) e pode voar batendo suas enormes orelhas. Ele é o mascote oficial do Café Cinnamon e gosta de tirar sonecas no colo dos clientes.</p>
    </div>
);
}