import Link from "next/link"
import React from "react"

const Header = () => {
    return (
        <header className="flex p-5 bg-blue-300 space-x-8">
            <Link href="/" className="px-2 py-1 bg-white text-blue-500 rounded-lg">Home</Link>
            <Link href="/posts" className="px-2 py-1 bg-white text-blue-500 rounded-lg">Posts</Link>
            <Link href="/students" className="px-2 py-1 bg-white text-blue-500 rounded-lg">Students</Link>
            <Link href="/products" className="px-2 py-1 bg-white text-blue-500 rounded-lg">Products</Link>
        </header>
    )
}

export default Header