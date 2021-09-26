import * as React from 'react';

interface IHeader {
  title?: string;
}
export const Header: React.FC<IHeader> = ({
  title,
}: IHeader): React.ReactElement => (
  <p className='headerItem'>{title || 'Orders'}</p>
);
