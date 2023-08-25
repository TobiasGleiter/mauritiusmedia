export interface IBaseIcon {
  sampleTextProp: string;
}

const BaseIcon: React.FC<IBaseIcon> = ({ sampleTextProp }) => {
  return (
    <div className="bg-gradient-to-t from-cyan-500 to-blue-500">
      {sampleTextProp}
    </div>
  );
};

export default BaseIcon;
