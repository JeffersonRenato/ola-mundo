import React from "react";
import styles from "./SobreMim.module.scss";
import PostModelo from "Componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.jpg";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre Mim">
      <h3 className={styles.subtitulo}>Olá, eu sou o Renato!</h3>
      <img
        src={fotoSobreMim}
        alt="Foto do Renato sorrindo"
        className={styles.fotoSobreMim}
      />
      <p className={styles.paragrafo}>
        O momoquinho da momoquinha.
      </p>
    </PostModelo>
  );
}
