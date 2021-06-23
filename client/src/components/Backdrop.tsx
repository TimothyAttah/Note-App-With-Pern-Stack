import { FC, MouseEvent, MouseEventHandler } from 'react';
import styled from 'styled-components';

interface Props {
	//close: MouseEvent<HTMLButtonElement>;
	//close: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
	// close: (e: MouseEvent<HTMLButtonElement>) => void
	// close: (e: MouseEvent<HTMLDivElement, MouseEvent>) => void;
	// close:  MouseEventHandler<HTMLDivElement>
	 close:  MouseEventHandler<HTMLButtonElement>
}



const BackdropWrapper = styled.div`
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	/* display: flex; */
	/* z-index: 500; */
	position: fixed;
	/* align-items: center;
	justify-content: center; */
	background-color: rgba(0, 0, 0, 0.5);
	-webkit-tap-highlight-color: transparent;
`;


export const Backdrop: FC = () => {
  return (
		<div>
			<BackdropWrapper></BackdropWrapper>
		</div>
	);
}

 