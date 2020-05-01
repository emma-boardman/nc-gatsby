import styled, { css } from "styled-components"
import React from "react"
import { setColor } from "../../styles/styleHelpers"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Button = ({
  children,
  link,
  isCentered,
  onClick,
  isExternal,
  isAction,
  isCTA,
  type
}) => {
  return (
    <>
      {isAction ? (
        <ActionWrapper onClick={onClick} isCentered={isCentered} type={type}>
          <span>{children}</span>
        </ActionWrapper>
      ) : (
        <LinkWrapper isCentered={isCentered} isCTA={isCTA}>
          {isExternal ? (
            <a href={link} target="_blank">
              {children}
            </a>
          ) : (
            <Link to={link}>{children}</Link>
          )}
        </LinkWrapper>
      )}
    </>
  )
}

const ActionButtonStyles = css`
  background-color: ${setColor.brandWhite};
  border: 2px solid ${setColor.brandBlack};
  a, span {

    color: ${setColor.brandBlack};
  }
  &:hover {
    background-color: ${setColor.brandWhiteOffset};
    border: 2px solid ${setColor.brandPrimary};
  }
  /* Remove Later */
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

const CTAButtonStyles = css`
  background-color: ${setColor.brandSecondary};
  border: 2px solid ${setColor.brandSecondary};
  a {
    color: ${setColor.brandWhite};
  }
  &:hover {
    background-color: ${setColor.brandWhite};
    border: 2px solid ${setColor.brandSecondary};
    a {
      color: ${setColor.brandSecondary};
    }
  }
`

const sharedStyles = css`
  /* Common Styles */
  padding: 8px 10px;
  border-radius: 16px;
  width: 150px;
  min-height: 44px;
  font-family: "Poppins-SemiBold";
  font-size: 1rem;
  align-self: ${props => (props.isCentered ? "center" : "flex-end")};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  /* Default Styles (Primary) */
  background-color: ${setColor.brandPrimary};
  border: 2px solid ${setColor.brandPrimary};
  a, span {
    color: ${setColor.brandWhite};
    text-decoration: none;
    /* Correct Poppins bottom spacing */
    margin-top: 3px;
  }
  &:hover {
    background-color: ${setColor.brandWhite};
    a {
      color: ${setColor.brandPrimary};
    }
  }
`

const ActionWrapper = styled.button`
  ${sharedStyles};
  ${ActionButtonStyles};
`

const LinkWrapper = styled.div`
  ${sharedStyles};

  /* Variant Styles */
  ${props => props.isCTA && CTAButtonStyles};
  /* TODO: Remove Later */
  margin-right: 4%;
  margin-top: 5%;
  @media (max-width: 500px) {
    margin-top: 8%;
  }
  /* In event parent is not flex element */
  /* TODO: Move to underneath align-self once margin is removed  */
  margin-left: ${props => (props.isCentered ? "auto" : null)};
  margin-right: ${props => (props.isCentered ? "auto" : null)};
`

Button.propTypes = {
  link: PropTypes.string,
  isCentred: PropTypes.bool,
  onClick: PropTypes.func,
  isExternal: PropTypes.bool,
  isAction: PropTypes.bool,
  isCTA: PropTypes.bool,
}

export default Button
