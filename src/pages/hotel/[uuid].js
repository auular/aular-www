import { useRouter } from "next/router"

export default function Hotel() {
    const router = useRouter();
    const uuid = router.query.uuid

    return <>{uuid}</>
}
