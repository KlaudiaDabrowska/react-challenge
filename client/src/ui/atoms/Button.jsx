import * as React from 'react';
import { Button as MuiButton } from '@mui/material';
import styled from 'styled-components';
import { theme } from 'theme';

const StyledMuiButton = styled(MuiButton)`
  background: ${({ color, variant }) => {
    if (color === 'primary' && variant === 'contained')
      return theme.palette.primary.main;
    if (color === 'primary' && variant === 'outlined')
      return theme.palette.secondary.main;
    if (color === 'error' && variant === 'contained')
      return theme.palette.error.light;

    if (color === 'success' && variant === 'contained')
      return theme.palette.success.light;
    if (color === 'warning' && variant === 'contained')
      return theme.palette.warning.light;
    if (
      (color === 'warning' && variant === 'outlined') ||
      (color === 'error' && variant === 'outlined') ||
      (color === 'success' && variant === 'outlined')
    )
      return theme.palette.background.default;
  }};

  color: ${({ color, variant }) => {
    if (color === 'primary' && variant === 'contained')
      return theme.palette.primary.contrastText;
    if (color === 'primary' && variant === 'outlined')
      return theme.palette.primary.main;
    if (color === 'error') return theme.palette.error.main;
    if (color === 'success') return theme.palette.success.main;
    if (color === 'warning' && variant === 'contained')
      return theme.palette.warning.text;
    if (color === 'warning' && variant === 'outlined')
      return theme.palette.warning.main;
  }};

  border: ${({ color, variant }) => {
    if (color === 'primary' && variant === 'outlined') return 'none';
  }};

  margin-left: 20px;
  box-shadow: none;

  &:hover {
    background: ${({ color, variant }) => {
      if (color === 'primary' && variant === 'contained')
        return theme.palette.primary.dark;
      if (color === 'primary' && variant === 'outlined')
        return theme.palette.secondary.dark;
      if (color === 'error' && variant === 'contained')
        return theme.palette.error.main;
      if (color === 'error' && variant === 'outlined')
        return theme.palette.error.hover;
      if (color === 'success' && variant === 'contained')
        return theme.palette.success.main;
      if (color === 'success' && variant === 'outlined')
        return theme.palette.success.light;
      if (color === 'warning' && variant === 'contained')
        return theme.palette.warning.main;
      if (color === 'warning' && variant === 'outlined')
        return theme.palette.warning.light;
    }};

    color: ${({ color, variant }) => {
      if (color === 'primary' && variant === 'contained')
        return theme.palette.secondary.main;
      if (color === 'primary' && variant === 'outlined')
        return theme.palette.primary.dark;
      if (color === 'error' && variant === 'contained')
        return theme.palette.error.contrastText;
      if (color === 'error' && variant === 'outlined')
        return theme.palette.error.main;
      if (color === 'success' && variant === 'contained')
        return theme.palette.success.contrastText;
      if (color === 'success' && variant === 'outlined')
        return theme.palette.success.main;
      if (color === 'warning' && variant === 'contained')
        return theme.palette.warning.contrastText;
      if (color === 'warning' && variant === 'outlined')
        return theme.palette.warning.main;
    }};

    border: ${({ color, variant }) => {
      if (color === 'primary' && variant === 'outlined') return 'none';
    }};
    box-shadow: none;
  }

  &:active {
    background: ${({ color, variant }) => {
      if (color === 'primary' && variant === 'contained')
        return theme.palette.primary.dark;
      if (color === 'primary' && variant === 'outlined')
        return theme.palette.secondary.dark;
      if (color === 'error' && variant === 'contained')
        return theme.palette.error.light;
      if (color === 'error' && variant === 'outlined')
        return theme.palette.error.hover;
      if (color === 'success') return theme.palette.success.light;
      if (color === 'warning') return theme.palette.warning.light;
    }};

    color: ${({ color, variant }) => {
      if (color === 'primary' && variant === 'contained')
        return theme.palette.primary.light;
      if (color === 'primary' && variant === 'outlined')
        return theme.palette.primary.dark;
      if (color === 'error') return theme.palette.error.main;
      if (color === 'success') return theme.palette.success.main;
      if (color === 'warning' && variant === 'contained')
        return theme.palette.warning.text;
      if (color === 'warning' && variant === 'outlined')
        return theme.palette.warning.main;
    }};
    box-shadow: none;
  }

  &:disabled {
    border: ${({ color, variant }) => {
      if (color === 'primary' && variant === 'outlined') return 'none';
    }};

    background: ${({ color, variant }) => {
      if (
        (color === 'primary' && variant === 'contained') ||
        (color === 'primary' && variant === 'outlined') ||
        (color === 'error' && variant === 'contained') ||
        (color === 'success' && variant === 'contained') ||
        (color === 'warning' && variant === 'contained')
      )
        return 'rgba(51, 51, 51, 0.07)';
    }};

    color: ${({ color, variant }) => {
      if (
        (color === 'primary' && variant === 'contained') ||
        (color === 'primary' && variant === 'outlined') ||
        (color === 'error' && variant === 'contained') ||
        (color === 'error' && variant === 'outlined') ||
        (color === 'success' && variant === 'contained') ||
        (color === 'success' && variant === 'outlined') ||
        (color === 'warning' && variant === 'contained') ||
        (color === 'warning' && variant === 'outlined')
      )
        return 'rgba(51, 51, 51, 0.25)';
    }};
  }
`;
export function Button({ children, ...props }) {
  return <StyledMuiButton {...props}>{children}</StyledMuiButton>;
}
