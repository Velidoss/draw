import Link from "next/link";

const regions = [
  {
    id: 1,
    name: 'Ukraine',
    products: 10,
    href: 'regions/region/1'
  },
  {
    id: 2,
    name: 'Germany',
    products: 5,
    href: 'regions/region/2'
  },
  {
    id: 3,
    name: 'Poland',
    products: 12,
    href: 'regions/region/3'
  },
]

const Regions = () => {
  return (
    <div>
      <div>Regions</div>
      <div>
        {regions.map((region) => (
          <Link key={region.id} href={region.href}>{region.name}</Link>
        ))}
      </div>
      <h1 className="text-3xl font-bold underline decoration-sky-500">
        Hello world!
      </h1>
    </div>
  )
};

export default Regions;