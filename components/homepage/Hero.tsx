import React from 'react'
import Container from '../layout/Container'
import { Button } from '../ui/button'
import Link from 'next/link'

function Hero() {
  return (
    <section className='bg-linear-to-b from-muted/50 to-background'>
      <Container className='min-h-100 grid items-center'>
        <div className='text-center max-w-3xl mx-auto'>
          <h1 className='font-bold text-3xl md:text-5xl lg:text- mb-6 tracking-tight'>Find Your Dream Job</h1>
          <p className='text-balance text-lg text-muted-foreground lg:text-xl'>
            Discover opportunities that match your skills. Apply faster and take the next step in your career.
          </p>
          <Button asChild className='mt-12 rounded-full' size={"lg"}>
            <Link href={"/jobs"}>
              Browse Jobs
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default Hero