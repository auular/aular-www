import { useEffect, useState } from "react";
import styles from "../Entrepreneur.module.scss";

const ImagesUpload = () => {
  const [files, setFiles] = useState([]);
  const [filePreview, setListURL] = useState([]);

  const handleFile = ({ target }) => {
    const [newFile] = target.files;
    const addFile = [...files, newFile];
    setFiles(addFile);
  };

  useEffect(() => {
    files.map((file) => {
      const objectUrl = URL.createObjectURL(file);
      setListURL([...filePreview, objectUrl]);
    });

    return () => filePreview.map((file) => URL.revokeObjectURL(file));
  }, [files]);

  return (
    <div className={styles.images_upload}>
      <p>
        Insira imagens para construirmos um anúncio para seu hotel (Em formato
        PNG ou JPG)
      </p>
      <label className={styles.images_upload__input_wrapper}>
        <img src="/images/cam.png" />
        <input
          type="file"
          className={styles.images_upload__input_file}
          onChange={handleFile}
        />
      </label>
      <p>Arquivos selecionados</p>
      {filePreview.map((file) => (
        <img src={file} />
      ))}
    </div>
  );
};

export default ImagesUpload;
