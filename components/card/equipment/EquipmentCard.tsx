import Link from 'next/link';

export interface IEquipmentCard {
  _id: any;
  name: string;
  category: string;
  location: string;
  session: any;
  handleDelete: any;
}

const EquipmentCard: React.FC<IEquipmentCard> = ({
  _id,
  name,
  category,
  location,
  session,
  handleDelete,
}) => {
  const color = '';
  return (
    <div
      className="grid gap-2 md:grid-cols-6 sm:grid-cols-4 xs:grid-cols-1 
    p-4 mb-2
    border dark:border-zinc-800
    bg-zinc-900
    overflow-hidden"
    >
      {' '}
      <div className="flex flex-row md:col-span-5 sm:col-span-3 xs:col-span-1 ">
        <div
          className={`w-1 flex-none rounded-none ${color ? color : 'red'} `}
        />
        <div className="flex flex-col ml-6">
          <p className="font-semibold text-lg">{name}</p>
          <p className="text-secondary-600">{category}</p>
          <p className="text-secondary-600">{location}</p>
        </div>
      </div>
      <div className="flex flex-row sm:flex-col gap-1">
        {session.data?.user.role === 'admin' ? (
          <>
            <Link
              href={`/equipment/edit/${_id}?name=${name}&category=${category}&location=${location}`}
              className="px-2 rounded-none text-center border border-white/20 text-white/50 lg:hover:text-black lg:hover:bg-white duration-200"
            >
              Edit
            </Link>
            <Link
              href={`/equipment/details/${_id}`}
              className="px-2 rounded-none text-center border border-white/20 text-white/50 lg:hover:text-black lg:hover:bg-white duration-200"
            >
              Details
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="px-2 rounded-none text-center border border-white/20 text-white/50 lg:hover:border-red-600 lg:hover:text-red-600 duration-200"
            >
              Delete
            </button>
          </>
        ) : (
          <Link
            href={`/equipment/details/${_id}`}
            className="px-2 rounded-sm text-center border border-white/20 text-white lg:hover:text-black lg:hover:bg-white duration-200"
          >
            Details
          </Link>
        )}
      </div>
    </div>
  );
};

export default EquipmentCard;
