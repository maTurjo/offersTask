import React from 'react'
import ReactDOM from 'react-dom';

import ShopPage from './ShopPage';

const Homepage = () => {
  return (
    <div>
        <ShopPage></ShopPage>
    </div>
  )
}

export default Homepage


if (document.getElementById('root')) {
    ReactDOM.render(<Homepage />, document.getElementById('root'));
}
