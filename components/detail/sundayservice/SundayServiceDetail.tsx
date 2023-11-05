import { formatDateAndDisplayDayMonthYearHourMinute } from '@/helpers/sundayservice/date';

export interface ISundayServiceDetail {
  promise: Promise<any>;
}

const SundayServiceDetail = async ({ promise }: ISundayServiceDetail) => {
  const data = await promise;

  return (
    <div className="DETAILS mt-6">
      <div className="INFORMATION mt-6">
        <div className="flex flex-col w-full ">
          <p className=" antialiased text-base text-secondary-600">Name</p>
          <p>{data.name}</p>
          <p className=" antialiased text-base text-secondary-800 -translate-y-1">
            on the {formatDateAndDisplayDayMonthYearHourMinute(data.date)}
          </p>
        </div>
        {data.location && (
          <div className="flex flex-col w-full ">
            <p className=" antialiased text-base text-secondary-600">
              Location
            </p>
            <p>{data.location}</p>
          </div>
        )}

        {data.description && (
          <div className="flex flex-col w-full ">
            <p className=" antialiased text-base text-secondary-600">
              Description
            </p>
            <p>{data.description}</p>
          </div>
        )}
      </div>
      <div className="WORKFLOW mt-6">
        <h2 className="text-2xl font-semibold antialiased">Workflow</h2>
        <div className="space-y-2 mt-2">
          {data.workflow.map((item: any, index: number) => {
            return (
              <div
                key={item.name + index}
                className="flex lg:flex-row flex-col justify-between border-b border-secondary-500 border-dashed"
              >
                <p>{item.name}</p>
                <p className="text-secondary-800">{item.team}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SundayServiceDetail;
