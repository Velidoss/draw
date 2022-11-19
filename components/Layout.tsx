import { useAtom } from "jotai";
import Link from "next/link";
import { FC, ReactNode } from "react";
import { notificationOpenAtom, sidebarOpenAtom } from "../store/globals";
import { Notifier } from "./Notifier";
import { Sidebar } from "./Sidebar";

type Props = {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useAtom(sidebarOpenAtom);
  const [notifyOpen, setNotifyOpen] = useAtom(notificationOpenAtom);
  
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <nav className="flex align-middle w-full h-16 bg-ivory">
        <Link className="h-10 flex align-middle p-2 m-3 rounded-2xl bg-ligthBlue hover:bg-blue ease-in-out duration-300 text-cultured" href="/" >Home</Link>
        <Link className="h-10 flex align-middle p-2 m-3 rounded-2xl bg-ligthBlue hover:bg-blue ease-in-out duration-300 text-cultured" href="/settings" >Settings</Link>
        <Link className="h-10 flex align-middle p-2 m-3 rounded-2xl bg-ligthBlue hover:bg-blue ease-in-out duration-300 text-cultured" href="/regions" >Regions</Link>
        <button onClick={() => setNotifyOpen(!notifyOpen)}>{notifyOpen ? 'Close notification' :'Open notification'}</button>
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>{sidebarOpen ? 'Close sidebar' :'Open sidebar'}</button>

      </nav>
      <main className="bg-iris h-full">{children}</main>
      <Notifier show={notifyOpen}/>
      <Sidebar show={sidebarOpen} />
    </div>
  )
}