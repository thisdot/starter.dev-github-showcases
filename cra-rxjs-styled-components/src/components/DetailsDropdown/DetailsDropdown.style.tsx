import styled, { css } from 'styled-components';
import colors from '../../constants/colors';
interface CaretProps {
  active: Boolean;
}

const FlexBox = css`
  display: flex;
  align-items: center;
`;

export const DropdownContainer = styled.div`
  position: relative;
  margin-inline: 1rem;
`;

export const Details = styled.details`
  pointer-events: visible;
`;

export const Summary = styled.summary`
  ${FlexBox};
  cursor: pointer;
  font-size: 14px;
`;

export const CaretIcon = styled.span`
  height: 5px;
  width: 10px;
  display: inline-block;
  background: ${colors.gray600};
  margin: 0 7px;
  -webkit-clip-path: polygon(100% 0, 0 0, 50% 100%);
  clip-path: polygon(100% 0, 0 0, 50% 100%);
  ${(props: CaretProps) =>
    props.active
      ? css`
          transform: rotate(180deg);
        `
      : ''}
`;

export const Dropdown = styled.div`
  position: absolute;
  z-index: 90;
  right: 0;
  bottom: 0;
  -webkit-transform: translate(0, calc(100% + 10px));
  transform: translate(0, calc(100% + 10px));
  background-color: #fff;
  color: ${colors.gray800};
  border: 1px solid #e1e4e8;
  padding-top: 5px;
  padding-bottom: 5px;
  min-width: 250px;
  border-radius: 6px;
  -webkit-box-shadow: 0 0 20px rgba(19, 19, 19, 0.075);
  box-shadow: 0 0 20px rgba(19, 19, 19, 0.075);

  & p,
  & a {
    padding: 0.5rem 1rem;
    display: block;
    color: #24292e;
    text-decoration: none;
    border-top: 1px solid #eaecef;
    font-size: 0.9rem;
  }
`;

export const CloseDropdownContainer = styled.div`
  ${FlexBox};
  justify-content: space-between;
  padding: 0.3125rem 0.625rem;
  font-size: 0.9rem;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 0.07rem;
`;
