import Link from 'next/link';

export interface IEquipmentList {
  promise: Promise<any>;
}

const EquipmentList = async ({ promise }: IEquipmentList) => {
  const equipment = await promise;

  console.log(equipment[0]._id);

  return (
    <ul className="space-y-2">
      {equipment.map((item: any) => {
        return (
          <li
            key={item._id}
            className="flex flex-col lg:flex-row justify-between border border-secondary-600/40 p-2 rounded-md"
          >
            <div className="flex flex-col overflow-hidden">
              <p className=" ">{item.name}</p>
              <p>{item.category}</p>
              <p>{item.location}</p>
            </div>
            <div className="space-x-2 ">
              <Link href={`/equipment/edit/${item._id}`}>Edit</Link>
              <Link href={`/equipment/details/${item._id}`}>Details</Link>
              {/**<DeleteButton label="Delete" id={item._id} data-superjson /> */}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default EquipmentList;
