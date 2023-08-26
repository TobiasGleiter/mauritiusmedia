import BaseIcon from '@/components/icons/base/BaseIcon';

export interface ISpinnerLoading {}

const SpinnerLoading: React.FC<ISpinnerLoading> = () => {
  return <BaseIcon icon="spinner" style="animate-spin" />;
};

export default SpinnerLoading;
