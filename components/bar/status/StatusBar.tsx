import BaseIcon from '@/components/icons/base/BaseIcon';
import { onSubmitStatusCodes } from '@/helpers/enums';

export interface IStatusBar {
  status: any;
}

const StatusBar: React.FC<IStatusBar> = ({ status }) => {
  return (
    <div className="flex flex-row font-bold h-6 items-center">
      {status.code === onSubmitStatusCodes.NOTHINGCHANGED && (
        <div className="flex items-center">
          <p className="text-zinc-500">Nothing changed</p>
          <BaseIcon icon="check" style="w-6 h-6 text-zinc-500" />
        </div>
      )}
      {status.code === onSubmitStatusCodes.EDITED && (
        <div className="flex items-center">
          <p className="text-zinc-500">Edited</p>
          <BaseIcon icon="edited" style="w-6 h-6 text-zinc-500" />
        </div>
      )}
      {status.code === onSubmitStatusCodes.UPDATING && (
        <div className="flex items-center">
          <p className="text-warning-500">Updating</p>
          <BaseIcon icon="check" style="w-6 h-6 text-warning-500" />
        </div>
      )}
      {status.code === onSubmitStatusCodes.UPDATED && (
        <div className="flex items-center">
          <p className="text-success-500">Updated</p>
          <BaseIcon icon="checkdouble" style="w-6 h-6 text-success-500" />
        </div>
      )}
      {status.code === onSubmitStatusCodes.ERROR && (
        <div className="flex items-center">
          <p className="text-danger-500">Error</p>
          <BaseIcon icon="error" style="w-6 h-6 text-danger-500" />
        </div>
      )}
    </div>
  );
};

export default StatusBar;
