import {Button} from 'antd';
import * as React from 'react';
import {CloseCircleOutlined} from '@ant-design/icons';
import { firstLetterToUpper } from '../helpers';

interface IOrderStatus {
  orderStatus: Required<string[]>;
  handleClick: (status: string) => void;
  handleResetIcon: (status: string) => void;
}

export const OrderStatus: React.FC<IOrderStatus> = ({
  orderStatus,
  handleClick,
  handleResetIcon,
}: IOrderStatus): React.ReactElement => {
  const [type, setType] = React.useState('');

  const handlePress = React.useCallback(
    (status: string) => {
      handleClick(status);
      setType(status);
    },
    [handleClick]
  );

  return (
    <div>
      {Array.from(new Set(orderStatus)).map((status, index) => (
        <Button
          onClick={() => handlePress(status)}
          className='button'
          type={status === type ? 'primary' : 'default'}
          key={index}
        >
          {firstLetterToUpper(status)}
        </Button>
      ))}
      {type && (
        <CloseCircleOutlined
          onClick={() => {
            setType('');
            handleResetIcon('All');
          }}
        />
      )}
    </div>
  );
};
