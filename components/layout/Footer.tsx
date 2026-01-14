import React from 'react'
import Container from './Container'
import Link from 'next/link'
import { Github, Linkedin, Twitter } from 'lucide-react'

function Footer() {
    return (
        <footer className='border-t bg-muted/50'>
            <Container className='px-4 lg:px-8 xl:px-0 py-12'>
                <div className='grid gap-8 md:grid-cols-4'>

                    <div className='md:col-span-2'>
                        <h3 className='mb-3 text-lg font-semibold'>JobFinder</h3>
                        <p>
                            Discover opportunities that match your skills. Apply faster and take the next step in your career.
                        </p>
                    </div>

                    <div>
                        <h3 className='mb-3 text-sm font-semibold'>Company</h3>
                        <ul className='space-y-2 text-sm'>
                            <li>
                                <Link href={"/"}
                                    className='text-muted-foreground transition-colors
                                hover:text-foreground'>About Us</Link>
                            </li>
                            <li>
                                <Link href={"/"}
                                    className='text-muted-foreground transition-colors
                                hover:text-foreground'>Contacts</Link>
                            </li>
                            <li>
                                <Link href={"/"}
                                    className='text-muted-foreground transition-colors
                                hover:text-foreground'>Careers</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='mb-3 text-sm font-semibold'>Legal</h3>
                        <ul className='space-y-2 text-sm'>
                            <li>
                                <Link href={"/"}
                                    className='text-muted-foreground transition-colors
                                hover:text-foreground'>Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href={"/"}
                                    className='text-muted-foreground transition-colors
                                hover:text-foreground'>Terms of Service</Link>
                            </li>
                            <li>
                                <Link href={"/"}
                                    className='text-muted-foreground transition-colors
                                hover:text-foreground'>Cookies Policy</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='mt-8 flex flex-col md:flex-row items-center
                justify-center md:justify-between gap-4 border-t pt-8'>
                    <p className='text-sm text-muted-foreground'>&copy; {new Date().getFullYear()} JobFinder. All rights reserved.</p>

                    <div className='flex items-center gap-4'>
                        <Link href={"/"} target='_black'
                            className='text-muted-foreground transition-colors hover:text-foreground'>
                            <Linkedin />
                        </Link>
                        <Link href={"/"} target='_black'
                            className='text-muted-foreground transition-colors hover:text-foreground'>
                            <Github/>
                        </Link>
                        <Link href={"/"} target='_black'
                            className='text-muted-foreground transition-colors hover:text-foreground'>
                            <Twitter/>
                        </Link>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer