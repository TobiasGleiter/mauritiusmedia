export interface IEquipmentDetail {
  promise: Promise<any>;
}

const EquipmentDetail = async ({ promise }: IEquipmentDetail) => {
  const equipment = await promise;
  return (
    <div className="flex flex-col">
      <p>{equipment.name}</p>
      <p>{equipment.category}</p>
      <p>{equipment.location}</p>
    </div>
  );
};

export default EquipmentDetail;
