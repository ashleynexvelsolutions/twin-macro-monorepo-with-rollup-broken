import React from 'react' 
import tw, { styled, css, theme } from 'twin.macro'

const Button = (props) =>{
    

 const ButtonStyled = styled.button([
     css`
     background-color: ${props.data.backgroundColor};
     border: 7px solid black;
     `,
    // The common button styles added with the tw import
    tw`
    appearance-none
    p-4
    text-test-one
    `,

    // Combine regular css with tailwind classes within backticks
    props.primary === true && [
     
      tw`
      p-8
      text-test-two
      `,
    ],
  ])
    return(
        <ButtonStyled>
        {props.data.text}
        <p>test test two test three four</p>
        </ButtonStyled>
    )
}

export { Button }