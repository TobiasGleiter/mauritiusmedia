import getWorkflow from '@/lib/share/sunday-service/getWorkflow';
import SundayServiceDetail from '@/lib/share/sunday-service/workflow';
import { Suspense } from 'react';

export interface IProps {
  params: { id: number };
}

export default async function WorkflowSundayServicePage({
  params: { id },
}: IProps) {
  const sundayService = getWorkflow(id);

  return (
    <div>
      <h1 className="text-3xl font-bold mr-2">Details Sunday Service</h1>
      <Suspense fallback="Loading...">
        <SundayServiceDetail promise={sundayService} />
      </Suspense>
    </div>
  );
}
