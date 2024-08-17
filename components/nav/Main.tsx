"use client";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Main() {
    const pathname = usePathname();
    return (
        <>
            <Link href="/" className="mx-6 flex items-center space-x-2">
                <span className="font-bold">{siteConfig.name}</span>
            </Link>
            <Link
                href="/subpage"
                className={cn(
                "text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block",
                pathname === "/subpage" ? "text-foreground" : "text-foreground/60"
                )}
            >
                SubPage
            </Link>
            <Link
                href="/anothersubpage"
                className={cn(
                "text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block",
                pathname === "/anothersubpage" ? "text-foreground" : "text-foreground/60"
                )}
            >
                Another SubPage
            </Link>
        </>
    );
}