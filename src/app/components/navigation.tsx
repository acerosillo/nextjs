"use client"

import Link from "next/link"
import { usePathname } from "next/navigation";

export const Navigation = () => {

    const pathname = usePathname();

    return (
        <nav>
            <Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link>
            <Link href="/about" className={pathname === "/about" ? "active" : ""}>About</Link>
            <Link href="/products/1" className={pathname === "/products/1" ? "active" : ""}>Products</Link>
        </nav>
    )
};