import styles from "../Entrepreneur.module.scss";

const ImagesUpload = () => {
  return (
    <div className={styles.images_upload}>
      <p>
        Insira imagens para construirmos um anúncio para seu hotel (Em formato
        PNG ou JPG)
      </p>
      <label className={styles.images_upload__input_wrapper}>
        <img src="https://cdn-icons-png.flaticon.com/512/45/45010.png" />
        <input type="file" className={styles.images_upload__input_file} />
      </label>
    </div>
  );
};

export default ImagesUpload;
