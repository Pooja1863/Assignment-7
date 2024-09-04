import styled from 'styled-components'

export const NotFoundContainer = styled.div`
background-color: ${props => props.bgColor};
justify-content: center;
display: flex;
align-items: center;
min-height: 92vh;
margin-top: 60px;
margin-bottom: 60px;
overflow-y: auto;
@media screen and (min-width: 768px) {
  margin-left: 250px;
  margin-bottom: 0px;
}
`

export const NotFoundVideosView = styled.div`
background: none;
justify-content: center;
display: flex;
flex-direction: column;
align-items: center;
`

export const NotFoundVideosImage = styled.img`
width: 200px;
@media screen and (min-width: 768px) {
  width: 450px;
}
`
export const NotFoundVideosHeading = styled.h1`
color: ${props => props.headingColor};
font-family: 'Roboto';
text-align: center;
font-size: 25px;
`

export const NotFoundVideosNote = styled.p`
color: ${props => props.noteColor};
font-family: 'Roboto';
text-align: center;
font-size: 18px;
`
