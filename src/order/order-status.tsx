import {Button} from 'antd';
import * as React from 'react';
import {CloseCircleOutlined} from '@ant-design/icons';

interface IOrderStatus {
  handleClick: (status: string) => void;
  handleResetIcon: (status: string) => void;
}

interface ButtonTypes {
  color: Colors;
  status: string;
}

type Colors = 'gray' | 'orange' | 'green';

export const OrderStatus: React.FC<IOrderStatus> = ({
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
  const buttonTypes: ButtonTypes[] = [
    {color: 'gray', status: 'Accepted'},
    {color: 'orange', status: 'InProgress'},
    {color: 'green', status: 'Complete'},
  ];
  return (
    <div>
      {buttonTypes.map(({status, color}, index) => (
        <Button
          onClick={() => handlePress(status)}
          className='button'
          color={color}
          type={status === type ? 'primary' : 'default'}
          key={String(index)}
        >
          {status}
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
