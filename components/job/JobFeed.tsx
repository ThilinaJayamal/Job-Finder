import { Job } from '@/lib/schema'
import JobCard from '../job/JobCard'
import { getJobs } from '@/actions/jobActions'

async function JobFeed({limit}:{limit?:number}) {
  const jobs = await getJobs(limit);

  if (!jobs || jobs.length === 0) {
    return (
      <div className='text-center text-gray-500 mb-16'>
        <h2 className='text-xl font-semibold'>No Jobs Found</h2>
        <p>There are currently no jobs posting available. Please check back later.</p>
      </div>
    )
  }

  return (
    <div className='grid gap-6 grid-cols-1 md:grid-cols-2 pb-16'>
      {
        jobs.map((job: Job,index:number) => (
          <JobCard job={job} key={index}/>
        ))
      }
    </div>
  )
}

export default JobFeed