import styled from "styled-components"
import React from 'react';
import PropTypes from 'prop-types'
import { setColor } from "../../utils/styleHelpers"


const FormEmphasis= ({children}) => {
    return(
        <FormEmphasisWrapper>
            {children}
        </FormEmphasisWrapper>
    )
}

const FormEmphasisWrapper = styled.div`
/* background:#FF5861; */
border-radius: 6px;
border: 1px dashed #FF5861;
padding: 5%;
`

export default FormEmphasis