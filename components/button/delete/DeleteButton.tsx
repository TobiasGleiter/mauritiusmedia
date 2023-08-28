'use client';

export interface IDeleteButton {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * How large should the button be?
   */
  size?: 'text-sm' | 'text-base' | 'text-xl';
  /**
  /**
   * Button contents
   */
  label: string;

  id: string;
  /**
   * How large should the button be?
   */
  style?: string;
}

const DeleteButton: React.FC<IDeleteButton> = ({
  primary = false,
  size,
  style,
  label,
  id,
}) => {
  const handleDelete = async () => {
    console.log(id);
    await fetch(`/api/equipment/${id}`, {
      method: 'DELETE',
    });
  };

  return (
    <button
      className={` rounded-full px-4 py-1 ${
        primary ? 'bg-white text-black' : 'bg-black text-white'
      } ${style} ${size}`}
      onClick={handleDelete}
    >
      {label}
    </button>
  );
};

export default DeleteButton;
