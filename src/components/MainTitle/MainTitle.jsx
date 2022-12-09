import React from 'react';
import PropTypes from 'prop-types';
import { Title } from './MainTitle.styled';


export const MainTitle = ({title}) => {
 return (
    <Title>{title}</Title>
    )
}

MainTitle.propTypes = {
    title: PropTypes.string.isRequired,
  };