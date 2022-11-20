import axios from "axios";
import { useEffect, useState } from "react";
import { resolve } from "styled-jsx/css";
import styles from "../Entrepreneur.module.scss";

const ImagesUpload = () => {
  const [files, setFiles] = useState([]);
  const [filePreview, setListURL] = useState([]);

  const handleFile = ({ target }) => {
    const [newFile] = target.files;
    const addFile = [...files, newFile];
    setFiles(addFile);
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
      };
    });
  };

  const handleUpload = async () => {
    const [file] = files;
    const convertedFile = await convertToBase64(file);

    const imageUrl = await axios.post("http://localhost:3000/api/upload", {
      image: convertedFile,
      imageName: file.name,
    });

    //TODO: enviar o imageUrl pro banco
  };

  useEffect(() => {
    console.log(files);
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
      <button onClick={handleUpload}>Subir</button>
    </div>
  );
};

export default ImagesUpload;
