import styled from "styled-components"
import React from "react"
import { setColor } from "../../styles/styleHelpers"
import PropTypes from "prop-types"



const Button = ({bgColor, link, linkText, isCentered }) => {
  return(
      <ButtonWrapper bgColor={bgColor} link={link} linkText={linkText} isCentered={isCentered}>
          <a href={link}><span>{linkText}</span></a>
      </ButtonWrapper>
  )
}

const ButtonWrapper = styled.div`
  background-color: ${props => props.bgColor};
  padding: 8px 10px;
  border-radius: 16px;
  color: white;
  width: 150px;
  align-self: ${props => props.isCentered ? "center" : "flex-end"};
  margin-right: 4%;
  margin-top: 5%;
  @media (max-width: 500px){
    margin-top: 8%;
  }
  border: 2px solid ${props => props.bgColor};
  display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
  a {
    color: white;
    text-decoration: none;
    padding-top: 5px;
    &:hover {
      color: ${props => props.bgColor};
    }
  }
  &:hover {
    background-color: white;
    a {
      color: ${props => props.bgColor};

    }
  }
`

Button.propTypes = {
  bgColor: PropTypes.string,
  bgImg: PropTypes.string,
}

Button.defaultProps = {
  bgColor: setColor.brandPrimary,
}

export default Button