import { css } from 'styled-components';

export const setColor = {
    brandPrimary: "#2F549C",
    brandSecondary: "#E7131D",
	brandWhite: "#FFF",
	brandWhiteOffset: "#f8f8f8",
	brandBlack: "#000",
	brandGreyDark: "#2f2f2f",
	gradientPurple: "#434599",
	gradientCyan: "cyan",
	gradientCyanLight: "#7fffff",
	gradientGreen: "#00cd00",
	gradientGreenLight: "#66e166",
	gradientYellow: "yellow",
	gradientYellowLight: "#ffff32",
	gradientOrange: "orange",
	gradientRed: "#ED2530"
}

export const setFlex = ({x='center',y='center'} = {}) => {
    return `display: flex;align-items:${y};justify-content:${x}`;
}

export const setSharedSpacing = {
    sectionPadding: "1rem",
    sectionPaddingDesktop: "3rem",
    heroRightOffset: "4rem",
}

export const setSharedBorderRadius = {
	radiusInput: "0.4rem",
	radiusMedium: "1rem",
	radiusLarge: "2rem",
	radiusSpeechBubble: "4rem",
}


export const breakpoints = {
	xs: '480px',
	sm: '768px',
	md: '992px',
	lg: '1200px'
};

export const setSharedHeights = {
    navHeight: "8vh"
}

export const breakpoint = Object.keys(breakpoints).reduce((accumulator, label) => {
	accumulator[label] = (...args) => css`
		@media (min-width: ${breakpoints[label]}) {
			${css(...args)};
		}
	`;
	return accumulator;
}, {});

