import { useWindowDimensions } from 'react-native';
import LoaderErrorView from '../LoaderErrorView';
import PRAndIssueHeader from '../PRAndIssueHeader';
import { ContentContainer, MainContainer } from './PRAndIssueLoaderSkeleton.styles';

interface PRAndIssueLoaderSkeletonProps {
  error: string;
  cardType: 'pr' | 'issue';
}

const PRAndIssueLoaderSkeleton = ({ error, cardType }: PRAndIssueLoaderSkeletonProps) => {
  const { width } = useWindowDimensions();
  return (
    <MainContainer screenWidth={width}>
      <ContentContainer>
        <PRAndIssueHeader cardType={cardType} openCount={0} closedCount={0} />
        <LoaderErrorView error={error} />
      </ContentContainer>
    </MainContainer>
  );
};

export default PRAndIssueLoaderSkeleton;
