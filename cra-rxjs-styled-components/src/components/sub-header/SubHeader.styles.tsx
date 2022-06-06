import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SubHeaderWrapper = styled.div`
  --tw-border-opacity: 1;
  border-bottom: 1px solid rgb(209 213 219 / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
  padding: 1.5rem 3rem 0;
`;

export const SubHeaderTopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1025px) {
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const SubHeaderH1Section = styled.h1`
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  line-height: 1.75rem;
`;

export const BookIconStyles = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
`;

export const SubHeaderSpanContainer = styled.span`
  margin-bottom: 0.125rem;
  --tw-space-x-reverse: 0;
  margin-right: calc(0.625rem * var(--tw-space-x-reverse));
  margin-left: calc(0.625rem * calc(1 - var(--tw-space-x-reverse)));
`;

export const SubHeaderUserLink = styled.a`
  cursor: pointer;
  font-weight: 400;
  margin-bottom: 0.125rem;
  --tw-text-opacity: 1;
  color: rgb(37 99 235 / var(--tw-text-opacity));

  &:hover {
    text-decoration: underline;
  }
`;

export const SubHeaderSeperator = styled.span`
  font-weight: 400;
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
  --tw-space-x-reverse: 0;
  margin-right: calc(0.375rem * var(--tw-space-x-reverse));
  margin-left: calc(0.375rem * calc(1 - var(--tw-space-x-reverse)));
`;

export const SubHeaderRepoLink = styled.a`
  cursor: pointer;
  font-weight: 600;
  --tw-text-opacity: 1;
  color: rgb(37 99 235 / var(--tw-text-opacity));
  --tw-space-x-reverse: 0;
  margin-right: calc(0.375rem * var(--tw-space-x-reverse));
  margin-left: calc(0.375rem * calc(1 - var(--tw-space-x-reverse)));

  &:hover {
    text-decoration: underline;
  }
`;

export const SubHeaderPrivacyBadge = styled.span`
  border-radius: 0.75rem;
  border: 1px solid rgb(209 213 219 / var(--tw-border-opacity));
  --tw-border-opacity: 1;
  padding: 0.125rem 0.5rem;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 500;
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
  margin-left: 0.7rem;
`;

export const SubHeaderButtonsActionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  --tw-space-y-reverse: 0;
  margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0px * var(--tw-space-y-reverse));

  @media (max-width: 1025px) {
    margin-top: 1.2rem;
  }
`;

export const SubHeaderIndividualButtonContainer = styled.span`
  position: relative;
  z-index: 0;
  margin: 0.25rem 0.5rem;
  display: inline-flex;
  border-radius: 0.375rem;
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0/0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  border-color: var(--gray-300);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
`;

export const SubHeaderMainButtonSection = styled.button`
  cursor: pointer;
  position: relative;
  display: inline-flex;
  align-items: center;
  border-top-left-radius: 0.375rem;
  border-bottom-left-radius: 0.375rem;
  border: 1px solid var(--gray-300);
  --tw-border-opacity: 1;
  background-color: transparent;
  padding: 0.375rem 1rem;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 500;
  color: var(--gray-600);

  &:hover {
    background-color: rgb(238, 238, 238);
  }
`;

export const SubHeaderMainButtonCount = styled.button`
  cursor: pointer;
  position: relative;
  margin-left: -1px;
  display: inline-flex;
  align-items: center;
  border-top-right-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;
  border: 1px solid var(--gray-300);
  --tw-border-opacity: 1;
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  padding: 0.375rem 0.75rem;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 600;
  color: var(--gray-600);

  &:hover {
    color: var(--blue-500);
  }
`;

export const SubHeaderButtonsActionsIcon = styled.div`
  margin-left: -0.25rem;
  margin-right: 0.25rem;
  height: 1rem;
  width: 1rem;
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
`;

export const SubHeaderBottomRow = styled.div`
  margin-top: 1.5rem;
`;

export const TabNavigation = styled.nav`
  margin-bottom: -1px;
  display: flex;
`;

export const TabNavigationLink = styled(NavLink)`
  cursor: pointer;
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
  display: inline-flex;
  align-items: center;
  padding: 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  text-decoration: none;

  &.active {
    border-bottom: 2px solid rgb(234 179 8 / var(--tw-border-opacity));
    font-weight: 600;
    --tw-text-opacity: 1;
    color: rgb(17 24 39 / var(--tw-text-opacity));
  }

  &:hover {
    border-bottom: 2px solid var(--gray-300);
  }
`;

export const TabNavigationInactiveLinks = styled(NavLink)`
  cursor: pointer;
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
  display: inline-flex;
  align-items: center;
  padding: 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;

  &:hover {
    border-bottom: 2px solid var(--gray-300);
  }
`;

export const TabNavigationActive = styled(NavLink)`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  --tw-border-opacity: 1;
  border-bottom: 2px solid rgb(234 179 8 / var(--tw-border-opacity));
  padding: 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
`;

export const TabNavigationIcon = styled.div`
  margin-left: -0.125rem;
  margin-right: 0.5rem;
  height: 1.25rem;
  width: 1.25rem;
  border-style: none;
`;

export const TabNavigationCount = styled.span`
  margin-left: 0.5rem;
  border-radius: 0.75rem;
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
  padding: 0.125rem 0.5rem;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 500;
  --tw-text-opacity: 1;
  color: rgb(31 41 55 / var(--tw-text-opacity));
`;
