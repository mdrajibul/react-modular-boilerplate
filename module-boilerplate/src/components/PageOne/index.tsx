import React, { useContext } from 'react';
import AppContext from '../../contexts/appContext';
import { IAppContext } from '../../typings/common';
import { H2, MainWrapper, Wrapper } from '../styled';

const PageOneComponent: React.FC = () => {
  const contextValues: IAppContext = useContext(AppContext);

  return (
    <MainWrapper>
      <H2>{contextValues.headerText} :: Page one </H2>
      <Wrapper>
        <section>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, dolor earum inventore molestiae quam qui vel!
            Atque corporis, deserunt facere fuga hic labore maiores nulla odio provident quasi, sed vel!
          </p>
        </section>
      </Wrapper>
    </MainWrapper>
  );
};

export default PageOneComponent;
