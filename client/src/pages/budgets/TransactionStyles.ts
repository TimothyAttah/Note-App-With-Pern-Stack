import styled from 'styled-components';
import {images} from '../../components/Images'

export const TransactionsContainer = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${images.BackgroundPic});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  object-fit: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TotalBalances = styled.div`
  background-color: var(--white);
  position: relative;
  max-width: 550px;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  font-size: 22px;
  margin-bottom: 20px;
  span {
    position: absolute;
    right: 20px;
  }
  @media (max-width: 414px){
    font-size: 16px;
  }
  @media (max-width: 320px){
    font-size: 14px;
  }
`;

export const TotalsWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const TotalIncomes = styled.div`
	background-color: green;
	color: var(--white);
	position: relative;
	max-width: 500px;
	width: 100%;
	padding: 10px 20px;
	display: flex;
	justify-content: space-between;
	font-size: 18px;
	margin: 0 auto;
	span {
		position: absolute;
		right: 20px;
		opacity: 0.8;
	}
`;

export const TotalExpenses = styled.div`
	background-color: var(--crimson);
	color: var(--white);
	position: relative;
	max-width: 500px;
	width: 100%;
	padding: 10px 20px;
	display: flex;
	justify-content: space-between;
	font-size: 18px;
	margin: 0 auto;
	span {
		position: absolute;
		right: 20px;
		opacity: 0.8;
	}
`;