import { SVGProps } from 'react';
import {
	Container,
	TabContainer,
	Tab,
	TabText,
	CountText,
	CountView,
} from './TabNav.styles';
import colors from '../../constants/colors';

interface TabNavigationProps {
	tabs: {
		title: string;
		Icon: (props: SVGProps<any>) => JSX.Element;
		count?: number;
	}[];
	activeTab: string;
	onChange?: (title: string) => void;
}

const TabNavigation = ({ tabs, activeTab, onChange }: TabNavigationProps) => {
	return (
		<Container>
			<TabContainer>
				{tabs.map(({ title, Icon, count }, index) => (
					<Tab
						key={index}
						isActive={activeTab === title}
						onClick={() => onChange?.(title)}
					>
						<Icon color={activeTab === title ? colors.gray700 : colors.gray500} />
						<TabText isActive={activeTab === title}>{title}</TabText>
						{typeof count === 'number' && count > 0 && (
							<CountView>
								<CountText>{count}</CountText>
							</CountView>
						)}
					</Tab>
				))}
			</TabContainer>
		</Container>
	);
};

export default TabNavigation;
