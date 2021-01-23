import styled from "styled-components";

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
  font-family:sans-serif;
  color: rgb(255, 255, 255);
  border: 0;
  transition: box-shadow 0.2s ease-in-out 0s;
`;

export const SignupButton = styled(Button)`
  margin: 0 2rem 0 0;
  background-color: #fff;
  line-height: 1.333;
  min-height: 42px;
  letter-spacing: 0.6px;
  font-size: 14px;
  font-family:sans-serif;
  user-select: none;
  white-space: nowrap;
  min-width: 120px;
  color: #131415;
  border: 2px solid #131415;
`;

export const Title = styled.h1`
  text-transform: uppercase;
  color: #007991;
  line-height: 30px;
  font-size: 25px;
  font-weight: 700;
  margin: 0 0 1rem 0;
`;

export const Addbutton = styled.button`
  padding: 8px 18px;
  background-color: #7366ff;
  color: #fff;
  display: block;
  text-align: center;
  border-radius: 5px;
  border: none;
  line-height: 1.333;
  text-transform: uppercase;
  min-height: 42px;
  cursor: pointer;
  min-width: 120px;
  letter-spacing: 1px;
  font-size: 14px;
  transition: box-shadow 0.2s ease-in-out 0s;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: #5246eb;
    border-color: #473bea;
  }
`;

export const Filterbutton = styled.button`
  padding: 8px 18px;
  color: #7269ef;
  min-width: 110px;
  margin: 0 2rem 0 0;
  text-align: center;
  border: 2px solid #7269ef;
  border-radius: 5px;
  transition: box-shadow 0.2s ease-in-out 0s;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  background: transparent;
  text-transform: uppercase;
  min-height: 42px;
  letter-spacing: 1px;
  font-size: 14px;
  &:hover {
    border-color: #5246eb;
    color: #5246eb;
  }
`;

export const SidebarMain = styled.section`
  z-index: 999;
  width: 200px;
  height: 100vh;
  flex-direction: column;
  display: flex;
  align-items: center;
  z-index: 1;
  box-shadow: -1px 0px 40px -20px rgba(0, 0, 0, 0.33);
  background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
`;

