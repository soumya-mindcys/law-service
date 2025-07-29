import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(6px);
  background: rgba(15, 15, 15, 0.65);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`;

const ModalContainer = styled.div`
  background: #ffffff;
  max-width: 720px;
  width: 100%;
  padding: 2.2rem 2rem;
  border-radius: 16px;
  box-shadow: 0 18px 55px rgba(0, 0, 0, 0.25);
  font-family: 'Segoe UI', sans-serif;
  text-align: justify;
  border: 1px solid #e0e0e0;
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.98);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const Title = styled.h2`
  color: #b71c1c;
  text-align: center;
  font-weight: 700;
  margin-bottom: 1.4rem;
  font-size: 1.7rem;
  letter-spacing: 0.5px;
  position: relative;

  &::after {
    content: '';
    display: block;
    height: 3px;
    width: 80px;
    background: #b71c1c;
    margin: 0.8rem auto 0;
    border-radius: 2px;
  }
`;

const Content = styled.div`
  color: #444;
  font-size: 1rem;
  line-height: 1.7;

  a {
    color: #1976d2;
    font-weight: 600;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  ul {
    margin: 1.2rem 0 0.5rem 0;
    padding-left: 1.2rem;
  }

  li {
    margin-bottom: 0.75rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2.5rem;
  flex-wrap: wrap;
`;

const ActionButton = styled.button`
  background: ${(props) => (props.disagree ? '#f1f1f1' : '#c62828')};
  color: ${(props) => (props.disagree ? '#444' : '#fff')};
  padding: 0.7rem 1.8rem;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${(props) =>
    props.disagree
      ? 'inset 0 0 0 2px #ddd'
      : '0 6px 12px rgba(198, 40, 40, 0.3)'};

  &:hover {
    background: ${(props) => (props.disagree ? '#e0e0e0' : '#b71c1c')};
    transform: translateY(-1px);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const DisclaimerModal = ({ onAgree, onDisagree }) => {
  return (
    <Overlay>
      <ModalContainer>
        <Title>Disclaimer & Confirmation</Title>
        <Content>
          <p>
            The rules of the Bar Council of India impose restrictions on maintaining a web page and do not permit lawyers to provide information concerning their areas of practice. DKP & Associates is, therefore, constrained from providing any further information on this web page.
          </p>
          <p>
            The rules of the Bar Council of India prohibit law firms from soliciting work or advertising in any manner. By clicking on ‘I Agree to Proceed’, the user acknowledges that:
          </p>
          <ul>
            <li>
              The user wishes to gain more information about DKP & Associates, its practice areas, and its attorneys for his/her own information and use.
            </li>
            <li>
              The information is made available/provided to the user only on his/her specific request and any information obtained or material downloaded from this website is completely at the user’s volition and any transmission, receipt or use of this site is not intended to, and will not, create any lawyer-client relationship.
            </li>
            <li>
              None of the information contained on the website is in the nature of a legal opinion or otherwise amounts to any legal advice.
            </li>
            <li>
              DKP & Associates is not liable for any consequence of any action taken by the user relying on material/information provided under this website. In cases where the user has any legal issues, he/she in all cases must seek independent legal advice.
            </li>
          </ul>
        </Content>
        <ButtonGroup>
          <ActionButton onClick={onAgree}>I Agree to Proceed</ActionButton>
          <ActionButton disagree onClick={onDisagree}>Decline</ActionButton>
        </ButtonGroup>
      </ModalContainer>
    </Overlay>
  );
};

export default DisclaimerModal;
