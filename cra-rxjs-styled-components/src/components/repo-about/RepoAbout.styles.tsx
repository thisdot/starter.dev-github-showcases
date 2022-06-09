import styled from 'styled-components';

export const AboutContainer = styled.div`
  border-bottom: 2px solid var(--gray-300);
  width: 100%;
`;

export const Header = styled.h3`
  font-weight: 600;
  color: var(--gray-700);
  font-size: 1.1em;
`;

export const SpacingContainer = styled.div`
  margin-top: 1rem;
`;

export const DefaultRepoText = styled.span`
  font-style: italic;
  color: var(--gray-600);
`;

export const DescriptionText = styled.span`
  font-size: inherit;
  line-height: 1.4em;
  color: var(--gray-600);
`;

export const LinkContainer = styled.div`
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 2rem 0;
`;

export const WebsiteLink = styled.a`
  & {
    margin-left: 1rem;
    text-decoration: none;
    color: var(--blue-600);
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const TagsContainer = styled.div`
  margin-top: 1rem;
`;

export const Tag = styled.span`
  margin: 0.2rem;
  display: inline-block;
  cursor: pointer;
  border-radius: 0.75rem;
  --tw-bg-opacity: 1;
  --slight-gray: 219 234 254;
  background-color: rgb(var(--slight-gray) / var(--tw-bg-opacity));
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 500;
  --tw-text-opacity: 1;
  --light-blue: 37 99 235;
  color: rgb(var(--light-blue) / var(--tw-text-opacity));

  &:hover {
    background-color: var(--blue-600);
    color: white;
  }
`;

export const ReadmeHoverEffect = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: var(--gray-500);

  &:hover {
    text-decoration: underline;
    color: var(--blue-400);
  }
`;

export const ReadmeText = styled.p`
  margin-left: 0.8rem;
`;

export const ReadmeIconStyles = styled.p`
  font-size: 1.5em;
`;
