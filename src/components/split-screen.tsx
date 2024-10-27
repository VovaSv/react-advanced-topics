import React from 'react';
import { styled } from 'styled-components';

interface PanelProps {
	flex?: number;
}

const Container = styled.div`
	display: flex;
`;

const Panel = styled.div<PanelProps>`
	flex: ${(props) => props?.flex};
`;

export const SplitScreen = ({
	Left,
	Right,
	leftWidth = 1,
	rightWidth = 1,
	children,
}: //children,
{
	Left: any;
	Right: any;
	leftWidth: number;
	rightWidth: number;
	children: React.ReactNode[];
}) => {
	const [left, right] = children;
	return (
		<Container>
			{/* <Panel flex={leftWidth}>
				<Left title={'asdd'} />
			</Panel>
			<Panel flex={rightWidth}>
				<Right />
			</Panel> */}
			<Panel flex={leftWidth}>{left}</Panel>
			<Panel flex={rightWidth}>{right}</Panel>
		</Container>
	);
};
