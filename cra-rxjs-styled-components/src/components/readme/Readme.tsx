import { useEffect, useState } from 'react';
import Markdown from 'markdown-to-jsx';
import {
	ReadmeHeader,
	ReadmeDiv,
	ReadmeContainer,
	ReadmeIconContainer,
	ReadmeText,
} from './Readme.styles';
import { ReadmeListIcon } from '../icons/ReadmeListIcon';

export default function Readme({
	username,
	repository,
	branch,
}: {
	username: string;
	repository: string;
	branch: string;
}) {
	const [readme, setReadme] = useState('');

	useEffect(() => {
		if (branch) {
			fetch(
				`https://raw.githubusercontent.com/${username}/${repository}/${branch}/README.md`
			)
				.then((res) => res.text())
				.then((data) => setReadme(data));
		}
	}, [branch, repository, username]);

	return (
		<ReadmeContainer>
			<ReadmeHeader>
				<ReadmeIconContainer>
					<ReadmeListIcon />
				</ReadmeIconContainer>
				<ReadmeText>README.md</ReadmeText>
			</ReadmeHeader>
			<ReadmeDiv>
				<Markdown children={readme} />
			</ReadmeDiv>
		</ReadmeContainer>
	);
}
