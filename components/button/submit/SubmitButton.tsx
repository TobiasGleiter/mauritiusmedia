export interface ISubmitButton {
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
  /**
   * How large should the button be?
   */
  style?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const SubmitButton: React.FC<ISubmitButton> = ({
  primary = false,
  size,
  style,
  label,
  ...props
}) => {
  return (
    <button
      type="submit"
      className={`flex rounded-full px-4 py-1 duration-200 justify-center ${
        primary
          ? ' bg-primary-500 text-black  hover:bg-primary-600 '
          : 'bg-black text-white'
      } ${style} ${size}`}
      {...props}
    >
      {label}
    </button>
  );
};

export default SubmitButton;
