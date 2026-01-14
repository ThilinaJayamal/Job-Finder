import { Briefcase } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import NavbarActions from './NavbarActions'

function Navbar() {
    return (
        <header className='sticky top-0 z-50 w-full border-b bg-background/95
        backdrop-blur-sm '>
            <div className='h-16 mx-auto max-w-7xl flex justify-between items-center px-4 lg:px-8 xl:px-0'>
                <div className='flex gap-8'>
                    <Link href={"/"} className='flex items-center gap-4 hover:opacity-80'>
                        <div className='flex size-9 items-center justify-center bg-primary
                        rounded-lg text-primary-foreground '>
                            <Briefcase className='size-5' />
                        </div>
                        <span className='text-xl font-semibold tracking-tight'>
                            JobFinder
                        </span>
                    </Link>

                    <nav className='flex items-center gap-6'>
                        <Link href={"/jobs"} className='hidden md:block text-sm font-medium
                        transition-colors hover:text-primary'>
                            Browse Jobs
                        </Link>
                         <Link href={"/post-job"} className='block text-sm font-medium
                        transition-colors hover:text-primary'>
                            Post A Job
                        </Link>
                    </nav>
                </div>

                <NavbarActions/>

            </div>
        </header>
    )
}

export default Navbar