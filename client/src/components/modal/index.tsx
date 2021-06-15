import React, { FC, Fragment, ReactNode } from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';

const ModalContainer = styled.div`
	width: 400px;
	height: 500px;
	border: 2px solid blue;
`;

type ModalProps = {
	children: ReactNode;
};

const Modal: FC<ModalProps> = ({ children }) => {
	const modalRoot = document.getElementById('modal') as HTMLElement;
	return ReactDom.createPortal(
		<Fragment>
			<ModalContainer>{children}</ModalContainer>
		</Fragment>,
		modalRoot
	);
};

export default Modal;
