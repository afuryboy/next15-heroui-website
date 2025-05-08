import React from "react";



export default function AboutLayout({children} : {children:React.ReactNode}) {
    return (
        <main className="relative container mx-auto max-w-7xl z-10 px-6 min-h-[calc(100vh_-_64px_-_108px)] mb-12 flex-grow">{children}</main>
    )
}