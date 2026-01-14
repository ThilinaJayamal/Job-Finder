"use client"

import React, { useEffect, useState } from 'react'
import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'
import Link from 'next/link'
import { useTheme } from "next-themes"
import { Button } from '../ui/button'
import { Moon, Sun } from 'lucide-react'

function NavbarActions() {

    const { setTheme, theme } = useTheme();
    const [mounted,setMounted] = useState(false);

    useEffect(()=>{
        setMounted(true);
    },[])
    return (
        <div className='flex items-center gap-3'>
            {
                mounted && <Button variant={"ghost"} size={"icon"} onClick={() => { theme === "light" ? setTheme("dark") : setTheme("light") }}>
                { theme === "light" ? <Moon className='size-5'/> : <Sun className='size-5'/> }
            </Button>
            }
            <div className='flex items-center gap-2'>
                <SignedOut>
                    <Button asChild variant={"ghost"} size={"sm"}>
                        <Link href={"/sign-in"}>Sign In</Link>
                    </Button>
                </SignedOut>

                <SignedIn>
                    <Button asChild variant={"outline"} size={"sm"}>
                        <Link href={"/dashboard"}>dashboard</Link>
                    </Button>
                    <UserButton />
                </SignedIn>
            </div>
        </div>
    )
}

export default NavbarActions