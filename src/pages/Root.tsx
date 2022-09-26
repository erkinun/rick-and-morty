import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

import Characters from './Characters';

function Root() {
  return (
    <div>
      <NavBar />
      <Characters />
    </div>
  );
}

export default Root;
