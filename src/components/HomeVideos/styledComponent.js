import styled from 'styled-components'

export const NoVideosView = styled.div`
background: none;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`

export const NoVideosImage = styled.img`
width: 200px;
@media screen and (min-width: 768px) {
  width: 450px;
}
`
export const NoVideosHeading = styled.h1`
color: ${props => props.headingColor};
font-family: 'Roboto';
font-size: 15px;
`

export const NoVideosNote = styled.p`
color: ${props => props.noteColor};
font-family: 'Roboto';
font-size: 18px;
`

export const RetryButton = styled.button`
background-color: #4f46e5;
border: none;
border-radius: 3px;
color: #ffffff;
padding-left: 10px;
padding-right: 10px;
padding-top: 5px;
padding-bottom: 5px;
font-family: 'Roboto';
font-size: 15px;
`
export const VideoCardList = styled.ul`
display: flex;
padding: 0;
flex-wrap: wrap;
list-style-type: none;
justify-content: flex-start;
@media screen and (min-width: 768px) {
  margin-left: 20px;
}
`
