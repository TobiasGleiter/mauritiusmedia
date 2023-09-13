import SundayServiceDetail from '@/components/detail/sundayservice/SundayServiceDetail';
import getWorkflow from '@/lib/share/sunday-service/getWorkflow';
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
      <Suspense fallback={<Loading />}>
        <SundayServiceDetail promise={sundayService} />
      </Suspense>
    </div>
  );
}

function Loading() {
  return (
    <div>
      <h1 className="text-3xl font-bold mr-2">Details Sunday Service</h1>
      <div className="animate-pulse h-[66px] bg-white py-2 px-4 rounded-2xl shadow-md lg:w-64 md:w-64 w-full border border-white" />
    </div>
  );
}
