import React from 'react';
import styled from 'styled-components';

const Alert = styled.div`
  padding: 0.6em 0.8em;
  margin: auto;
  text-align: left;
  width: 71%;
`;

const InfoAlert = Alert.extend`
  background-color: #edf8f8;
  color: #42a59f;
  border-left: 5px solid #d2edec;
`;

const ErrorAlert = Alert.extend`
  background-color: #fcd4dc;
  color: #9a0c28;
  border-left: 5px solid #f793a7;
`;

const AlertMessage = ({ status, message }) => {
  return status === 'info' ? <InfoAlert>{message}</InfoAlert> : <ErrorAlert>{message}</ErrorAlert>;
};

export default AlertMessage;
