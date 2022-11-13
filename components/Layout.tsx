import Link from "next/link";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <nav className="flex align-middle w-full h-16 bg-ivory">
        <Link className="h-10 flex align-middle p-2 m-3 rounded-2xl bg-ligthBlue hover:bg-blue ease-in-out duration-300 text-cultured" href="/" >Home</Link>
        <Link className="h-10 flex align-middle p-2 m-3 rounded-2xl bg-ligthBlue hover:bg-blue ease-in-out duration-300 text-cultured" href="/settings" >Settings</Link>
        <Link className="h-10 flex align-middle p-2 m-3 rounded-2xl bg-ligthBlue hover:bg-blue ease-in-out duration-300 text-cultured" href="/regions" >Regions</Link>
      </nav>
      <main className="bg-iris h-full">{children}</main>
    </div>
  )
}