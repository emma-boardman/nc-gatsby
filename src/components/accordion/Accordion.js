import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { setColor, breakpoint } from "../../styles/styleHelpers"
import AccordionSection from "./AccordionSection"

const Accordion = ({ children }) => {
  const [expandedSections, setExpandedSections] = useState({})
  const [expandAll, setExpandAll] = useState(false)

  useEffect(() => {
    let availableSections = {}
    let reducer = (returnedObject, sectionIndex) => {
      if (!returnedObject[sectionIndex.props.title]) {
        returnedObject[sectionIndex.props.title] = false
      }
      return returnedObject
    }
    children.reduce(reducer, availableSections)
    setExpandedSections(availableSections)
  }, [])

  const handleClick = index => {
    setExpandedSections({
      ...expandedSections,
      [index]: !expandedSections[index],
    })
  }

  const toggleAll = () => {
    let updatedSections = {}
    let reducer = (returnedObject, sectionIndex) => {
      returnedObject[sectionIndex.props.title] = !expandAll
      return returnedObject
    }
    children.reduce(reducer, updatedSections)
    setExpandedSections(updatedSections)
    setExpandAll(!expandAll)
  }

  return (
    <AccordionWrapper>
      <AccordionToggle
        role="switch"
        aria-pressed={expandAll}
        onClick={toggleAll}
        className={expandAll ? "pressed-in" : "popped-out"}
      >
        {expandAll === true ? "Collapse All" : "Expand All"}
      </AccordionToggle>
      <AccordionMain>
        {children.map((child, index) => (
          <AccordionSection
            key={index}
            title={child.props.title}
            onClick={() => handleClick(child.props.title)}
            expanded={expandedSections[child.props.title]}
          >
            {child.props.children}
          </AccordionSection>
        ))}
      </AccordionMain>
    </AccordionWrapper>
  )
}

const AccordionWrapper = styled.div`
  width: 100%;
  ${breakpoint.md`
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  `}
`
const AccordionMain = styled.div`
  border-radius: 6px;
  border: 2px solid ${setColor.brandPrimary};
  margin: 0.75rem 0;
`

export const setPressed = () => {
  return `box-shadow: inset 0 0 0 0.15rem #000, 
  inset 0.25em 0.25em 0 #fff;`
}

const AccordionToggle = styled.button`
  border-radius: 3px;
  border: 2px solid ${setColor.brandPrimary};
  box-shadow: 2px 2px 0 0 ${setColor.brandBlack};
  margin-bottom: 0.15rem;
  margin-right: 0.5rem;
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
  background-color: ${setColor.brandWhiteOffset};
  min-width: fit-content;
  &.pressed-in {
    box-shadow: -2px -2px 0 0 ${setColor.brandPrimary},
      inset 0 0 0.15rem ${setColor.brandSecondaryDark},
      inset 0.25em 0.25em 0 ${setColor.brandWhite};
  }
`

export default Accordion
