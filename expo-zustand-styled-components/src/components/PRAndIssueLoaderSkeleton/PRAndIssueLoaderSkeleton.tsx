import { Text, useWindowDimensions } from 'react-native';
import PRAndIssueHeader from '../PRAndIssueHeader';
import {
  ContentContainer,
  MainContainer,
  LoadingContainer,
} from './PRAndIssueLoaderSkeleton.styles';

interface PRAndIssueLoaderSkeletonProps {
  cardType: 'pr' | 'issue';
}

const PRAndIssueLoaderSkeleton = ({ cardType }: PRAndIssueLoaderSkeletonProps) => {
  const { width } = useWindowDimensions();
  return (
    <MainContainer screenWidth={width}>
      <ContentContainer>
        <PRAndIssueHeader cardType={cardType} openCount={0} closedCount={0} />
        <LoadingContainer>
          <Text>Loading...</Text>
        </LoadingContainer>
      </ContentContainer>
    </MainContainer>
  );
};

export default PRAndIssueLoaderSkeleton;
