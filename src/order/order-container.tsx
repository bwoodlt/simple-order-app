import React, {useEffect, useState, useCallback, useMemo} from 'react';
import {Row, Badge, Space, Col} from 'antd';
import orders from '../orders.json';
import {Header} from './header';
import {OrderStatus} from './order-status';

export enum ORDER_STATUS_ENUM {
  ACCEPTED = 'accepted',
  INPROGRESS = 'inProgress',
  COMPLETE = 'complete',
}

interface OrderItem {
  id: string;
  productName: string;
  dateOrdered: string;
  orderStatus: string;
}

export const OrderContainer: React.FC = () => {
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);

  useEffect(() => {
    setOrderItems(orders);
  }, []);

  useEffect(() => {
    document.title = `(${String(orderItems.length)}) My Orders`;
  }, [orderItems]);

  const handleClick = useCallback((status: string) => {
    const updatedOrderItems: OrderItem[] = orders
      .filter((f) => f.orderStatus.toLowerCase() === status.toLowerCase())
      .map((x) => x);
    setOrderItems(updatedOrderItems);
  }, []);

  const orderCount = useMemo(() => orderItems.length, [orderItems]);
  return (
    <div className='container'>
      <Row>
        <Space>
          <Header />
          <OrderStatus
            handleClick={handleClick}
            handleResetIcon={() => setOrderItems(orders)}
          />
        </Space>
      </Row>
      <Row>
        <Col>
          <p>Number of Orders:&nbsp;</p>
        </Col>
        <Col>
          {/* Known warning with findDOMNode in StrictMode when using some antd component such as Badges */}
          <Badge count={orderCount} />
        </Col>
      </Row>
      <Row className='orders'>
        {orderItems.map(
          ({id, dateOrdered, orderStatus, productName}: OrderItem, index) => (
            <Row className='orderItem' key={String(id)}>
              <Col>
                <p className='productName'>{productName}</p>
              </Col>
              <div className='orderInfo'>
                <Row justify='start'>
                  <Col>Order Date</Col>
                  <Col>
                    <p>{formatDate(dateOrdered)}</p>
                  </Col>
                </Row>

                <Row justify='end'>
                  <Col color='red'>Order Status</Col>
                  <Col>
                    <p
                      style={{
                        color: orderStatus === 'complete' ? 'green' : 'blue',
                      }}
                    >
                      {firstCharToUpper(orderStatus)}
                    </p>
                  </Col>
                </Row>
              </div>
            </Row>
          )
        )}
      </Row>
    </div>
  );
};

const firstCharToUpper = (value: string) =>
  value[0].toUpperCase() + value.slice(1);

const formatDate = (value: string) => {
  var strArray = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const d = new Date(value);
  const month = strArray[d.getMonth()];
  const day = d.getDate();
  const year = d.getFullYear();

  return `${getOrdinal(day)} ${month}  ${year}`;
};

const getOrdinal = (day: number) => {
  let val = '';
  if (day > 3 && day < 21) {
    val = 'th';
  }

  switch (day % 10) {
    case 1:
      val = 'st';
      break;
    case 2:
      val = 'nd';
      break;
    case 3:
      val = 'rd';
      break;
    default:
      val = 'th';
  }

  return `${day}${val}`;
};
