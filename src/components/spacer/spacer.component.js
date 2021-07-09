import React from 'react';
import { View } from 'react-native';
import styled, { useTheme } from 'styled-components/native';

const sizeVariant = {
    small: 1,
    medium: 2,
    large: 3
}

const positionVariant = {
    top: 'marginTop',
    left: 'marginLeft',
    right: 'marginRight',
    bottom: 'marginBottom'
}

const getVariant = (position, size, theme) => {
    const sizeIndex = sizeVariant[size];
    const property = positionVariant[position]
    const value = theme.space[sizeIndex]
    return `${property}:${value}`
} 

const SpcerView = ({ position, size, children }) => {
    const theme = useTheme();
    const vairant = getVariant(position, size, theme);

    return(
        <SpacerView vairant={vairant}>
            {children}
        </SpacerView>
    )
}

export const Spacer = styled.View`
    ${({ position, size, theme }) => getVariant(position, size, theme) }
`;

Spacer.defaultProps = {
    position: 'top',
    size: 'small'
}