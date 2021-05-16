import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/style.css';
import { DefaultMenus } from '../../router';
import { Header } from './styled';

const HeaderComponent: React.FC = () => {
  return (
    <Header>
      <nav>
        <ul>
          {DefaultMenus.map((item, index) => (
            <li key={`li-${index}`}>
              <Link title={item.text} to={item.path}>
                <span>{item.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Header>
  );
};

export default HeaderComponent;
