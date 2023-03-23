import React, { Fragment } from 'react';
import { Text, TouchableOpacity, useWindowDimensions } from 'react-native';

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

const BranchNavigation = () => {
  const { width } = useWindowDimensions();
  const { path, name, branch } = useRepoInfoStore();

  const crumbs = () => path?.split('/').filter(Boolean) || [];

  // creates a proper GitHub url path from a repo path
  const hrefPath = (index: number) => {
    return path
      ?.split('/')
      .filter(Boolean)
      .slice(0, index + 1)
      .join('/');
  };

  return (
    <NavViewContainer screenWidth={width}>
      <ButtonStyled>
        <GitBranchIcon color={colors.gray600} />
        <ButtonTextStyled>{branch}</ButtonTextStyled>
        <Text>{'\u25BC'}</Text>
      </ButtonStyled>

      {crumbs().length > 0 ? (
        <CrumbsContainer>
          <TouchableOpacity
            onPress={() => {
              useRepoInfoStore.setState({ path: undefined, isBlob: false  });
            }}>
            <RootLink screenWidth={width}>{name}</RootLink>
          </TouchableOpacity>
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
                <TouchableOpacity
                  onPress={() => {
                    useRepoInfoStore.setState({ path: hrefPath(index), isBlob: false });
                  }}>
                  <CrumbLink screenWidth={width}>{crumb}</CrumbLink>
                </TouchableOpacity>
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
