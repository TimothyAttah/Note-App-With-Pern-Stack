import { FC, Fragment, ReactNode } from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';

const ModalContainer = styled.div`
	position: absolute;
	top: 150px;
	left: 50%;
	transform: translateX(-50%);
	max-width: 600px;
	width: 100%;
	background-color: var(--white);
	z-index: 999;
	box-sizing: border-box;
	padding: 10px 30px;
	border-radius: 10px;
	@media (max-width: 600px){
		max-width: 400px;
	}
	@media (max-width: 415px){
		max-width: 350px;
	}
	@media (max-width: 360px){
		max-width: 300px;
		top: 120px;
	}
	@media (max-width: 290px){
		max-width: 250px;
	}
`;

type ModalProps = {
	children: ReactNode;
};

export const Modal: FC<ModalProps> = ({ children }) => {
	const modalRoot = document.getElementById('modal') as HTMLElement;
	return ReactDom.createPortal(
		<Fragment>
			<ModalContainer>{children}</ModalContainer>
		</Fragment>,
		modalRoot
	);
};

