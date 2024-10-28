import { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import React from 'react';
import ReactDOM from 'react-dom';

const ModalBackground = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	overflow: auto;
	background-color: #00000090;
	width: 100%;
	height: 100%;
`;
const ModalContent = styled.div`
	margin: 12% auto;
	padding: 24px;
	background-color: #f8d0d0;
	width: 50%;
`;

export const Modal = ({ children }: { children: React.ReactNode }) => {
	const [show, setShow] = useState(false);
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				setShow(false);
			}
		};
		window.addEventListener('keydown', handleKeyDown);
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, []);
	//if (!show) return null;

	return ReactDOM.createPortal(
		<>
			<button onClick={() => setShow(true)}>Show Modal</button>
			{show && (
				<ModalBackground onClick={() => setShow(false)}>
					<ModalContent onClick={(e) => e.stopPropagation()}>
						<button onClick={() => setShow(false)}>Hide Modal</button>
						{children}
					</ModalContent>
				</ModalBackground>
			)}
		</>,
		document.getElementById('modal-root')! // Assumes a 'modal-root' div exists in index.html
	);
};
