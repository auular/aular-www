import Image from "next/image";

export function ArrowLeft() {
  return <Image src="/images/arrow-left.svg" height={30} width={30} style={{ cursor: "pointer" }} />;
}
