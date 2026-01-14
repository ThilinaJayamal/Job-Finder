import { getSingleJob } from "@/actions/jobActions";
import JobDescription from "@/components/job/JobDescription";
import JobDetailsHeader from "@/components/job/JobDetailsHeader";
import Container from "@/components/layout/Container";

interface JobPageProps {
    params: Promise<{ id: string }>;
}

export default async function JobPage({ params }: JobPageProps) {
    const { id } = await params;
    const job = await getSingleJob(id);

    return (
        <>
        <JobDetailsHeader job={job} />
            <Container>
                <section className="py-12 min-h-screen">
                    <div>
                        <JobDescription job={job} />
                    </div>
                </section>
            </Container>
        </>

    );
}