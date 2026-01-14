import UserJobList from "@/components/dashboard/UserJobList";
import Container from "@/components/layout/Container";

export default function Dashboard() {
  return (
    <Container className="py-12 min-h-screen">
      <UserJobList />
    </Container>
  );
}