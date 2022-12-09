import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from "formik"

export const Forma = styled(Form)`
 border: 3px solid #6B99C3;
 display: flex;
 flex-direction: column;
 gap: 15px;
 padding: 40px;
 align-items: center;
 background-color: #D2D2D4;
`;
export const Input = styled(Field)`
padding: 10px;
min-width: 300px;
border: 1px solid #6B99C3;
`;
export const Error = styled(ErrorMessage)`
font-size: 15px;
color: red;
`
export const Button = styled.button`
width: 200px;
height: 50px;
color: #16354D;
border: 1px solid #6B99C3;
font-size: 20px;
font-weight: bold;
&:hover,
&:focus {
  background-color: #6B99C3;
}
`
export const Label = styled.label`
display: flex;
flex-direction: column;
gap: 10px;
text-align: center;
font-size: 30px;
font-weight: bold;
color: #16354D;
`