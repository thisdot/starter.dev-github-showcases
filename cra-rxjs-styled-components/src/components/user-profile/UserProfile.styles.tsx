import styles, { css } from 'styled-components';
import { StyledIconBase } from '@styled-icons/styled-icon';
import { TwitterIcon } from '../icons/TwitterIcon';
import { LinkIcon } from '../icons/LinkIcon';
export const UserProfileContainer = styles.div`
	max-width: 90%;
	grid-area: aside;
`;

export const Avatar = styles.img`
  border-radius: 50%;
  z-index: 30;
`;

export const NameContainer = styles.h1`
  margin-top: 0.5rem;
`;

export const Name = styles.div`
  font-size: 1.5rem;
  line-height: 2rem;
  color: rgb(31 41 55);
  font-weight: 700;
  line-height: 1.25;
`;

export const Username = styles.div`
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: rgb(107 114 128);
  font-weight: 300;
`;

export const Bio = styles.div`
  color: rgb(31 41 55);
  margin-top: 1rem;
`;

export const IconStyleWrapper = styles.div`
  ${StyledIconBase} {
    width: 1rem;
    height: 1rem;
    margin-bottom: 0.125rem;
    margin-right: 0.25rem;
    display: inline;
  }
`;

export const SpanCount = styles.span`
  display: inline-block;
`;

export const Count = styles.span`
  font-weight: 500;
  color: rgb(17 24 39);
`;

export const SpaceSpan = styles.span`
  margin-left: 0.25rem;
  margin-right: 0.25rem;
`;

export const Socials = styles.div`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: rgb(75 85 99);
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const Fields = styles.div`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: rgb(31 41 55);
& > :not([hidden]) ~ :not([hidden]) {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}
`;

export const AnchorLink = styles.a`
  text-decoration: none;
  color: rgb(17 24 39);
  &:hover {
    color: rgb(37 99 235);
    text-decoration-line: underline;
  }
`;
const svgStyles = () => css`
	width: 1rem;
	height: 1rem;
	margin-bottom: 0.125rem;
	margin-right: 0.25rem;
	display: inline;
	vertical-align: middle;
`;

export const TwitterIconStyles = styles(TwitterIcon)`
  ${() => svgStyles()}
`;
export const LinkIconStyles = styles(LinkIcon)`
  ${() => svgStyles()}
`;
