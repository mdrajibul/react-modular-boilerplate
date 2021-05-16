import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import AppContext from '../../contexts/appContext';
import { IAppContext } from '../../typings/common';
import { H2, MainWrapper, Wrapper } from '../styled';

const PageTwoComponent: React.FC = () => {
  const contextValues: IAppContext = useContext(AppContext);

  return (
    <MainWrapper>
      <H2>{contextValues.headerText} :: Page two </H2>
      <Wrapper>
        <section>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim expedita magnam molestias, odit rem
            repellendus tempore <span className="blue-color">tenetur ullam</span>. Aspernatur dignissimos eum ipsam
            labore laudantium molestiae quisquam repudiandae tempore veritatis voluptate?
          </p>
        </section>
      </Wrapper>
    </MainWrapper>
  );
};
export default withRouter(PageTwoComponent);
