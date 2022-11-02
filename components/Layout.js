import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <nav>
        <Link  href="/" >Home</Link>
        <Link  href="/settings" >Settings</Link>
        <Link  href="/regions" >Regions</Link>
      </nav>
      <main>{children}</main>
      
    </>
  )
}