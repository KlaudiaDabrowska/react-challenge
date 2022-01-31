import { Box, Typography } from '@mui/material';
import styled from 'styled-components';
import ErrorImage from '../../assets/unknown_error.png';

const StyledError = styled.div`
  background-image: url(${ErrorImage});
  width: 248px;
  height: 248px;
  position: absolute;
  left: 50%;
  top: -5%;
  transform: translateX(-50%);
`;

const StyledTextError = styled.div`
  position: absolute;
  left: 50%;
  top: 34%;
  transform: translateX(-50%);
  font-family: 'Inter';
  font-size: 19.2px;
  font-weight: 400;
  line-height: 29px;
  color: rgba(51, 51, 51, 0.5);
`;

export const Error = ({ error }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {error?.message?.includes('Network Error') ? (
        <Typography>Uruchom Server!</Typography>
      ) : (
        <>
          <StyledError />
          <StyledTextError>Wystąpił nieoczekiwany błąd</StyledTextError>
        </>
      )}
    </Box>
  );
};
