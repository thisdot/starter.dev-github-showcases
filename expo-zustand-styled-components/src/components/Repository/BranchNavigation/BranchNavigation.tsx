import { Text, useWindowDimensions } from 'react-native';
import React, { Fragment } from 'react';
import { Link } from '@react-navigation/native';

import { GitBranchIcon } from '../../Icons';
import { colors } from '../../../utils/style-variables';

import {
  RootLink,
  CrumbEnd,
  CrumbLink,
  ButtonStyled,
  CrumbsContainer,
  NavViewContainer,
  ButtonTextStyled,
} from './BranchNavigation.styles';

interface IProps {
  name: string;
  owner: string;
  path?: string;
  branch?: string;
}

const BranchNavigation = ({ path, owner, name, branch }: IProps) => {
  const { width } = useWindowDimensions();
  const crumbs = () => path?.split('/').filter(Boolean) || [];

  // creates a proper GitHub url path from a repo path
  const hrefPath = (index: number) => {
    const crumbPath = path
      ?.split('/')
      .filter(Boolean)
      .slice(0, index + 1)
      .join('/');
    return `/${owner}/${name}/tree/${branch}/${crumbPath}`;
  };

  return (
    <NavViewContainer screenWidth={width}>
      <ButtonStyled>
        <GitBranchIcon color={colors.gray600} width={20} height={20} />
        <ButtonTextStyled>{branch}</ButtonTextStyled>
        <Text>{'\u25BC'}</Text>
      </ButtonStyled>

      {crumbs().length > 0 ? (
        <CrumbsContainer>
          <Link to={`/${owner}/${name}`}>
            <RootLink screenWidth={width}>{name}</RootLink>
          </Link>
          <Text>/</Text>

          {crumbs().map((crumb, index) => {
            if (index === crumbs().length - 1) {
              return (
                <CrumbEnd key={index} screenWidth={width}>
                  {crumb}
                </CrumbEnd>
              );
            }
            return (
              <Fragment key={index}>
                <Link to={hrefPath(index)}>
                  <CrumbLink screenWidth={width}>{name}</CrumbLink>
                </Link>
                <Text>/</Text>
              </Fragment>
            );
          })}
        </CrumbsContainer>
      ) : null}
    </NavViewContainer>
  );
};

export default BranchNavigation;
