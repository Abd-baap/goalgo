import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";
export default function Navbar() {
    return (
      <div className="navbar flex p-1 px-4 text-[24px] sticky border w-screen h-min rounded-lg justify-between hover:shadow-md">
        <div className="logo flex gap-2 items-center">
          <a className="flex gap-1" href="/">
            <Image alt="Logo" loading="lazy" width="40" height="40" src="/logo.gif" />
            <div className="text">
              <span className="font-bold">Goal</span>
              <span className="font-bold text-red-800">Go</span>
            </div>
          </a>
        </div>
        <DropdownMenu>
      <DropdownMenuTrigger><Image src="/list.png" width={35} height={35}alt='index image'></Image></DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem><Link href='/'>Home</Link></DropdownMenuItem>
        <DropdownMenuSeparator></DropdownMenuSeparator>
        <DropdownMenuItem><Link href='/Confused'>Blog</Link></DropdownMenuItem>
        <DropdownMenuSeparator></DropdownMenuSeparator>
    
        <DropdownMenuItem><Link href='/About'>About</Link></DropdownMenuItem>
        <DropdownMenuSeparator></DropdownMenuSeparator>
     
        <DropdownMenuItem><Link href='/Support'>Support</Link></DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>      </div>
    );
  }