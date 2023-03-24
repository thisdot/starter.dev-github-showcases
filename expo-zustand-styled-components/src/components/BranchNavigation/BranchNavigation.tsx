import React, { Fragment } from 'react';
import { Text, useWindowDimensions } from 'react-native';

import { GitBranchIcon } from '../Icons';
import { colors } from '../../utils/style-variables';

import {
  RootLink,
  CrumbEnd,
  CrumbLink,
  ButtonStyled,
  CrumbsContainer,
  NavViewContainer,
  ButtonTextStyled,
} from './BranchNavigation.styles';
import { useRepoInfoStore } from '../../hooks/stores';
import LinkButton from '../LinkButton/LinkButton';

const BranchNavigation = (props: { path?: string; branch?: string }) => {
  const { width } = useWindowDimensions();
  const { name, owner, branch } = useRepoInfoStore();

  const crumbs = () => props.path?.split('/').filter(Boolean) || [];
  const _branch = props.branch || branch;

  // creates a proper GitHub url path from a repo path
  const hrefPath = (index: number) => {
    const crumbPath = props.path
      ?.split('/')
      .filter(Boolean)
      .slice(0, index + 1)
      .join('/');
    return `/${owner}/${name}/tree/${_branch}/${crumbPath}`;
  };

  return (
    <NavViewContainer screenWidth={width}>
      <ButtonStyled>
        <GitBranchIcon color={colors.gray600} />
        <ButtonTextStyled>{_branch}</ButtonTextStyled>
        <Text>{'\u25BC'}</Text>
      </ButtonStyled>

      {crumbs().length > 0 ? (
        <CrumbsContainer>
          <LinkButton to={`/${owner}/${name}`}>
            <RootLink screenWidth={width}>{name}</RootLink>
          </LinkButton>
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
                <LinkButton to={hrefPath(index)}>
                  <CrumbLink screenWidth={width}>{crumb}</CrumbLink>
                </LinkButton>
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
