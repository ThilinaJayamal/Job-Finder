import { Card, CardContent } from "@/components/ui/card";
import { Job } from "@/lib/schema";

interface JobDescriptionProps {
  job: Job | null;
}

export default function JobDescription({ job }: JobDescriptionProps) {
  return (
    <Card>
      <CardContent>
        <p className="text-muted-foreground">{job?.description}</p>
      </CardContent>
    </Card>
  );
}