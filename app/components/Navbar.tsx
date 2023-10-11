import React from "react"
import Link from "next/link"
import { FaGithub, FaLaptop } from "react-icons/fa"

export default function Navbar() {
    return (
        <nav className="p-4 bg-slate-500 sticky top-0 drop-shadow-xl z-10">
            <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
                <h1 className="text-xl font-bold text-black grid place-content-center mb-2 md:mb-0">
                    <Link href="/" className="text-black/50 no-underline hover:text-black">JIM-Dev</Link>
                </h1>
                <input type="search"></input>
                <div className="flex flex-row justify-center sm:justify-evenly align-middle text-center items-center gap-4 text-black text-xl lg:text-xl">
                    <Link className="text-black/50 hover:text-black" href="https://jim-dev-portfolio.vercel.app/">
                        <FaLaptop />
                    </Link>
                    <Link className="text-black/50 hover:text-black" href="https://github.com/JIM90mdp">
                        <FaGithub />
                    </Link>
                    <Link className="text-black/50 hover:text-black justify-center" href="/create">
                        Crear Post
                    </Link>
                </div>
            </div>
        </nav>
    )
}