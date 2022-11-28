import { useEffect, useState } from "react";

export const useBuffer = (buffer) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    setImage("data:image/png;base64," + buffer);
  }, []);

  return <img src={image} style={{ maxWidth: "500px" }} />;
};
