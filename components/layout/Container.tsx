import { cn } from '@/lib/utils'
import React from 'react'

type ContainerProps = {
    children: React.ReactNode,
    className?: string
}

function Container({ children, className }: ContainerProps) {
    return (
        <div className={cn('max-w-6xl mx-auto px-4 lg:px-8 xl:px-0',className)}>
            {children}
        </div>
    )
}

export default Container