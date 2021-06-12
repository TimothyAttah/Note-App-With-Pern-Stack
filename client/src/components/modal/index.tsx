import React, { FC, Fragment, ReactNode } from 'react'
import ReactDom from 'react-dom';
import styled from 'styled-components';

const ModalContainer = styled.div`
  width: 400px;
  height: 500px;
  border: 2px solid blue;
`;

type ModalProps = {
  children: ReactNode;
}

// const Modal: FC = () => {
//   return ReactDom.createPortal((children: ReactNode, container: Element, key?: null | string) => (
//     <Fragment>
//       <ModalContainer>
//         {children}
//       </ModalContainer>
//     </Fragment>
//   ),
//     document.getElementById('modal')
//   )
// }


const Modal: FC<ModalProps> = ({children}) => {
  // return ReactDom.createPortal(
  //   <Fragment>
  //     <ModalContainer>
  //       {children}
  //     </ModalContainer>
  //   </Fragment>,
  //   document.getElementById('modal')
  return (
    <Fragment>
      <h1>Modal page </h1>
    </Fragment>
  )
}


export default Modal;
