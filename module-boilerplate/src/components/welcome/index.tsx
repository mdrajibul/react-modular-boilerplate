import React, { useContext } from 'react';
import AppContext from '../../contexts/appContext';
import { IAppContext } from '../../typings/common';
import { H2, MainWrapper, Wrapper } from '../styled';

const WelcomeComponent: React.FC = () => {
  const contextValues: IAppContext = useContext(AppContext);

  return (
    <MainWrapper>
      <H2>Welcome to {contextValues.headerText}</H2>
      <Wrapper>
        <section>
          <p>Welcome to the React module boilerplate. This boilerplate contains the basic structure for your module.</p>
          <p>
            For more information please have a look at the <b>readme</b> file.
          </p>
        </section>
      </Wrapper>
    </MainWrapper>
  );
};
export default WelcomeComponent;
