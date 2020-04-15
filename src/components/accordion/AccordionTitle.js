import React from "react"
import styled from "styled-components"
import { setColor } from "../../styles/styleHelpers"

const AccordionTitle = ({ expanded, onClick, title }) => {
  return (
    <AccordionTitleWrapper expanded={expanded}>
      <AccordionTitleContent expanded={expanded}>
        {title}{" "}
        <button aria-expanded={expanded} onClick={onClick}>
          <svg
            aria-hidden="true"
            focusable="false"
            width="20"
            height="20"
            viewBox="0 0 10 10"
          >
            {!expanded && <rect height="8" width="2" y="1" x="4" />}
            <rect height="2" width="8" y="4" x="1" />
          </svg>
        </button>
      </AccordionTitleContent>
    </AccordionTitleWrapper>
  )
}

const AccordionTitleWrapper = styled.div`
  background-color: transparent;
  border-bottom: 2px solid ${setColor.brandPrimary};
  padding: 0.5rem;
`

const AccordionTitleContent = styled.h3`
  text-transform: none;
  display: flex;
  font-size: 1.2rem;
  padding: 0.25rem 0;
  justify-content: space-between;
  align-items: center;
  color: ${props =>
    props.expanded ? setColor.brandWhite : setColor.brandPrimary};
  margin: 0;
  button {
    width: auto;
    min-width: 45px;
    min-height: 45px;
    all: inherit;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    &:focus svg {
      outline: 0;
      box-shadow: 0 0 0 3px ${setColor.brandSecondaryDark};
    }
    svg {
      margin-left: 1rem;
      fill: currentColor;
    }
  }
`

export default AccordionTitle
