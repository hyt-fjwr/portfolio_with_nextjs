import Link from "next/link";

export default function Navbar(){

    return(
        <div>
            <Link href="/about">Home </Link>
            <Link href="/about/us">About Us</Link>
            <Link href="/about/someone">About Someone</Link>
            <Link href="/listofposts">List Of Posts </Link>
        </div>
    )
}