import { Link } from 'react-router-dom';

import Characters from './Characters';

function Root() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Characters</Link>
          </li>
          <li>
            <Link to="/episodes">Episodes</Link>
          </li>
          <li>
            <Link to="/locations">Locations</Link>
          </li>
        </ul>
      </nav>
      <Characters />;
    </div>
  );
}

export default Root;
