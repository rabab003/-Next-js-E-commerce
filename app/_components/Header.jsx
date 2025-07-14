import React from "react";
import Image from "next/image";
import { LayoutGrid, Search, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <div className="flex justify-between items-center shadow-md">
      <div className="flex items-center gap-8">
        <Image width={100} height={100} src="/logo.png" />
        <div>
          <h2 className="flex gap-2 items-center border rounded-full p-2 bg-slate-200">
            <LayoutGrid className="h-5 w-5" />
            Category
          </h2>
        </div>

        <div className="hidden md:flex gap-3 items-center border rounded-full p-2">
          <Search />
          <input type="text" placeholder="search" className="outline-none" />
        </div>
      </div>

      <div className="flex gap-5">
        <h2 className="flex gap-2">
          <ShoppingBag />0
        </h2>
        <Button>Login</Button>
      </div>
    </div>
  );
}
