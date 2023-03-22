import { useEffect, useState } from 'react';
import { useWindowDimensions } from 'react-native';

import PrivacyBadge from '../PrivacyBadge';
import PrivacyIcon from './PrivacyIcon';

import {
  Heading,
  NameLink,
  OwnerLink,
  Separator,
  HeadingContent,
  BadgePlaceholder,
  RepoContentWrapper,
} from './RepoHeading.styles';

import { useRepoInfoStore } from '../../hooks/stores';

const RepoHeading = () => {
  const [flexDirection, setFlexDirection] = useState<'row' | 'column'>();
  const [widths, setWidths] = useState({ A: 0, B: 0 });
  const { name, owner, info } = useRepoInfoStore();
  const { width } = useWindowDimensions();

  const onLayoutA = (A: number) => setWidths((p) => ({ ...p, A }));
  const onLayoutB = (B: number) => setWidths((p) => ({ ...p, B }));

  useEffect(() => {
    if (!flexDirection && widths.A && widths.B) {
      if (widths.B >= widths.A) {
        setFlexDirection('column');
      } else {
        setFlexDirection('row');
      }
    }
  }, [widths, flexDirection]);

  return (
    <Heading screenWidth={width} onLayout={(e) => onLayoutA(e.nativeEvent.layout.width)}>
      <PrivacyIcon visibility={info?.visibility} />
      <RepoContentWrapper
        screenWidth={width}
        style={{ flexDirection }}
        onLayout={(e) => onLayoutB(e.nativeEvent.layout.width + 100)}>
        <HeadingContent>
          <OwnerLink screenWidth={width}>{owner}</OwnerLink>
          <Separator>/</Separator>
          <NameLink screenWidth={width} numberOfLines={1}>
            {name}
          </NameLink>
        </HeadingContent>
        {info?.visibility ? <PrivacyBadge visibility={info?.visibility} /> : <BadgePlaceholder />}
      </RepoContentWrapper>
    </Heading>
  );
};

export default RepoHeading;
