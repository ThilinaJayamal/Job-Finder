import { getJobs } from "@/actions/jobActions";
import Hero from "@/components/homepage/Hero";
import JobFeed from "@/components/job/JobFeed";
import Container from "@/components/layout/Container";

export default async function Home() {
  return (
    <div className="min-h-screen">
      <Hero/>
      <section>
        <Container>
          <div className="mb-6">
            <h3 className="text-2xl font-semibold">Latest Opportunites</h3>
          </div>
          <JobFeed limit={2}/>
        </Container>
      </section>
    </div>
  );
}
