export interface IEquipmentDetail {
  promise: Promise<any>;
}

const SundayServiceDetail = async ({ promise }: IEquipmentDetail) => {
  const data = await promise;
  console.log(data);
  return (
    <div className="WORKFLOW mt-6">
      <h2 className="text-2xl font-semibold antialiased">Workflow</h2>
      <div className="space-y-2 mt-2">
        {data.workflow.map((item: any) => {
          return (
            <div
              key={item.name}
              className="flex justify-between border-b border-secondary-500 border-dashed"
            >
              <div>{item.name}</div>
              <div>{item.team}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SundayServiceDetail;
