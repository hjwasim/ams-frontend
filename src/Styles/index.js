import styled from 'styled-components'


export const Button = styled.button`
  font-size: 16px;
  font-weight: 600;
  border-radius: 32px;
  padding: 10px 16px;
  background: linear-gradient(to bottom, #7f7fd5, #86a8e7, #91eae4);
  display: flex;
  flex: 0 0 auto;
  min-height: 42px;
  width: 100%;

  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  cursor: pointer;
  opacity: 1;
  line-height: 1.2;
  color: rgb(255, 255, 255);
  border: 0;
  transition: box-shadow 0.2s ease-in-out 0s;
  `;

export const SignupButton = styled(Button)`
  margin:0 2rem 0 0;
  background-color:#fff;
  line-height: 1.333;
  min-height: 42px;
  letter-spacing: 0.6px;
  font-family: "Euclid Circular A Semibold";
  font-size: 14px;
  user-select: none;
  white-space: nowrap;
  min-width: 120px;
  color: #131415;
  border: 2px solid #131415;
  `;

export const Title = styled.h1`
  text-transform: uppercase;
  font-family: "Euclid Circular A Semibold";
  color: #007991;
  line-height: 30px;
  font-size: 25px;
  font-weight: 700;
  margin: 0 0 1rem 0;
`;



