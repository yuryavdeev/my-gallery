import { useNavigate } from 'react-router-dom'

import './Header.scss'
import CustomLink from '../CustomLink/CustomLink'
import brush from '../../assets/images/brush.svg'

const Header: React.FC = () => {
  const navigate = useNavigate()

  return (
    <header className='header'>
      <div className='header__box'>
        <img className='header__logo' src={brush} alt='logo' onClick={() => navigate('my-gallery')} />
        <nav className='header__nav'>
          <ul className='header__nav-list'>
            <li>
              <CustomLink to='my-gallery'>Main</CustomLink>
            </li>
            <li>
              <CustomLink to='my-gallery/gallery'>Gallery</CustomLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
