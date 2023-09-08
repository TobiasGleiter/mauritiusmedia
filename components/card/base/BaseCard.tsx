export interface IBaseCard {
  sampleTextProp: string;
}

const BaseCard: React.FC<IBaseCard> = ({ sampleTextProp }) => {
  return (
    <div className="bg-gradient-to-t from-cyan-500 to-blue-500">
      {sampleTextProp}
    </div>
  );
};

export default BaseCard;
