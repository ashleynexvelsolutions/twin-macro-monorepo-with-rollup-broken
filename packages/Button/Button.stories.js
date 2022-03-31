import React from 'react';
import { Button } from './Button'

export default {
	title: 'Component Story Format/Button',
	component: Button,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
	  backgroundColor: { control: 'color' }
	},
  };
  const Template = (args) =>{
  return <Button data={args}  />;
  } 
  const Template2 = (args) =>{
  return <Button data={args} primary />;
  } 

  function buttonFunction(){
	
	return(
	  {
	  backgroundColor: "orange",
	  text: "This is just a starter component. Hello"
	  }
	  
	)
  }

  export const Basic = Template.bind({});
Basic.args = buttonFunction();

export const Primary = Template2.bind({});
Primary.args = buttonFunction();

