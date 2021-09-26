import {Button} from 'antd';
import {useHistory} from 'react-router-dom';

const App = () => {
  const history = useHistory();
  return (
    <div id='container'>
      <Button type='primary' onClick={() => history.push('/orders')}>
        Go to Order Page
      </Button>
      <br />
    </div>
  );
};

export default App;
