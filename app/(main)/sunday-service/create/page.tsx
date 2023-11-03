import CreateSundayServiceForm from '@/components/form/sundayservice/create/CreateSundayServiceForm';
import PageNavigation from '@/components/navigation/page/PageNavigation';

export default function CreateSundayService() {
  return (
    <div className="w-full mb-40">
      <PageNavigation link="/sunday-service" />
      <div className="CREATE CARD mt-6 py-4 px-4 rounded-2xl shadow-md bg-white ">
        <h1 className="text-3xl font-bold">Create new Sunday Service</h1>
        <CreateSundayServiceForm />
      </div>
    </div>
  );
}
