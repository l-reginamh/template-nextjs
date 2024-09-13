import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 mx-1 sm:mt-10 md:pb-12 lg:py-32">
        <div className="container flex flex-col items-center justify-center gap-4 text-center">
          <p className="max-w-[42rem] mx-auto text-muted-foreground sm:text-xl text-balance">
            This is NextJS base!
          </p>
        </div>
      </section>
    </>
  );
}
