"use client";

import { Main } from "./nav/Main";
import { Mobile } from "./nav/Mobile";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { KBarProvider, Priority } from "kbar";
import { siteConfig } from "@/config/site";
import { useMemo } from "react";
import { SearchBar } from "./nav/SearchBar";
import CommandPortal from "./nav/CommandPortal";
import { Icons } from "./Icon";

const ACTION_KEY_DEFAULT = "CTRL"
const ACTION_KEY_APPLE = "⌘"
function isAppleDevice() {
  return /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)
}

export function SiteHeader() {
    const pathname = usePathname()
    const router = useRouter()
    
    const key = useMemo(() => {
      if (typeof navigator !== "undefined") {
        return isAppleDevice() ? ACTION_KEY_APPLE : ACTION_KEY_DEFAULT
      }
    }, [])

    function getActions() {
        const actions = [
            {
              id: "homepage",
              name: "Homepage",
              keywords: "",
              section: "Home",
              perform: () => router.push("/"),
              priority: Priority.HIGH,
            },
            {
              id: "posts",
              name: "Posts",
              keywords: "blog posts content notes",
              section: "Home",
              perform: () => router.push("/posts"),
              priority: Priority.HIGH,
            },
            {
              id: "cheatsheets",
              name: "Cheatsheets",
              keywords: "sheets cheatsheets cheatsheet notes",
              section: "Home",
              perform: () => router.push("/cheatsheets"),
              priority: Priority.HIGH,
            },
            {
              id: "twitter",
              name: "Twitter",
              keywords: "contact twitter tweet",
              section: "Contact",
              perform: () => window.open(`${siteConfig.links.twitter}`, "_blank"),
              priority: Priority.HIGH,
            },
            {
              id: "github",
              name: "GitHub",
              keywords: "contact git GitHub projects showcase repo",
              section: "Contact",
              perform: () => window.open(`${siteConfig.links.github}`, "_blank"),
              priority: Priority.HIGH,
            },
        ]
    
        return actions;
    }


    return (
        <header className="z-10 sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filyer]:bg-background/60">
            <div className="container flex h-14 min-w-full max-w-screen-2xl items-center">
                {pathname !== "/" ? 
                    (<Button variant={"ghost"} onClick={router.back} className="hidden sm:inline-flex"><Icons.back className="h-4 w-4" /></Button>)
                    :
                    null
                }
                <nav className="flex flex-1 items-center space-x-4 lg:space-x-6">
                    <Main />
                </nav>
                <KBarProvider actions={getActions()}>
                    <SearchBar
                        onClick={() => {
                            const ctrlkey = new KeyboardEvent("keydown", {altKey:false,
                                bubbles: true,
                                cancelable: true,
                                charCode: 0,
                                code: "Ctrl",
                                composed: true,
                                ctrlKey: true,
                                detail: 0,
                                isComposing: false,
                                key: "Ctrl",
                                keyCode: 17,
                                location: 0,
                                metaKey: false,
                                repeat: false,
                                shiftKey: false,
                                which: 17});
                            const kKey = new KeyboardEvent("keydown", {altKey:false,
                                bubbles: true,
                                cancelable: true,
                                charCode: 0,
                                code: "k",
                                composed: true,
                                ctrlKey: true,
                                detail: 0,
                                isComposing: false,
                                key: "k",
                                keyCode: 107,
                                location: 0,
                                metaKey: false,
                                repeat: false,
                                shiftKey: false,
                                which: 107});
                            document.dispatchEvent(ctrlkey);
                            document.dispatchEvent(kKey);
                        }}
                        kbd={key}
                    />
                    <CommandPortal actions={getActions()} />
                </KBarProvider>
                <Mobile />
            </div>
        </header>
    );
}