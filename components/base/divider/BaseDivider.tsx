export interface IBaseDivider {}

const BaseDivider: React.FC<IBaseDivider> = () => {
  return (
    <div className="flex justify-center mt-6">
      <div className="w-64 border-b border-secondary-100" />
    </div>
  );
};

export default BaseDivider;
