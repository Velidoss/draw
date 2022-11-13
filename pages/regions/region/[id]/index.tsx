import { useRouter } from "next/router";

const Region = () => {
  const router = useRouter()
  const id = router.query.id;

  return (
    <div>Region number === {id}</div>
  )
};

export default Region;