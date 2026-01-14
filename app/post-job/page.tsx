import JobPostForm from '@/components/job/JobPostForm'
import Container from '@/components/layout/Container'

function page() {
    return (
        <Container className='max-w-4xl mt-12 min-h-screen'>
            <div className='mb-8'>
                <h1 className='text-3xl mb-3 font-semibold'>Post a New Job</h1>
                <p className='text-lg text-muted-foreground'>Share your opportunity with talented professionals looking for their next career move.</p>
            </div>
            <JobPostForm />
        </Container>
    )
}

export default page