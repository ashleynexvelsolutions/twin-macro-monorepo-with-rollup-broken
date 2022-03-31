import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import { addDecorator } from '@storybook/react'
import { GlobalStyles } from 'twin.macro'




addDecorator(style => <><GlobalStyles />{style()}</>);

const customViewports = {
	threeSeventyFive: {
	  name: '375px',
	  styles: {
		width: '375px',
		height: '568px',
	  },
	},
	sevenSixtyEight: {
		name: '768px',
		styles: {
		  width: '768px',
		  height: '1080px',
		},
	  },
	  nineNinetyTwo: {
		name: '992px',
		styles: {
		  width: '992px',
		  height: '1080px',
		},
	  },
	twelveHundred: {
name: '1200px',
styles: {
	width: '1200px',
	height: '1080px',
  }
	},
	nineteenTwenty: {
		name: '1920px',
		styles: {
			width: '1920px',
			height: '1080px',
		  }
			}
  };

export const parameters = {

	layout: 'fullscreen',
	viewport: {
    viewports: {
      ...customViewports,
	},
	defaultViewport: 'threeSeventyFive'
  },
  }
