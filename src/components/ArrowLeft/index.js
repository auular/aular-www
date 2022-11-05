import Image from "next/image";
import { useRouter } from "next/router";

export const ArrowLeft = () => {
  const router = useRouter();

  return (
    <Image
      src="/images/arrow-left.svg"
      height={30}
      width={30}
      style={{ cursor: "pointer" }}
      onClick={router.back}
    />
  );
};
