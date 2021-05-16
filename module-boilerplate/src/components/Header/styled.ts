import styled from 'styled-components';

export const Header = styled.header`
  background-color: #cccccc;
  ul {
    list-style: none;
    padding: 16px;
    margin: 0;
    display: flex;

    li {
      margin-right: 32px;
      &:first-child {
        margin-right: 0;
      }

      a {
        color: #333333;
        text-decoration: none;
        font-size: 16px;

        &:hover {
          color: #111111;
        }
      }
    }
  }
`;
