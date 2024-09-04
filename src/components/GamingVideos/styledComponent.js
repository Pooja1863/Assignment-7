import styled from 'styled-components'

export const GamingContainer = styled.div`
background-color: ${props => props.bgColor};
min-height: 100vh;
margin-top: 60px;
margin-bottom: 60px;
overflow-y: auto;
@media screen and (min-width: 768px) {
  margin-bottom: 0px;
  margin-left: 250px;
}
`
export const GamingVideoTitle = styled.div`
align-items: center;
display: flex;
`
export const GamingTitleIconContainer = styled.div`
width: 40px;
height: 40px;
border-radius: 80px;
margin-left: 10px;
margin-right: 10px;
display: flex;
justify-content: center;
align-items: center;
@media screen and (min-width: 768px) {
  margin-left: 40px;
}
`
export const GamingText = styled.h1`
font-size: 25px;
font-family: 'Roboto';
color: ${props => props.color};
@media screen and (min-width: 768px) {
  font-size: 35px;
}
`
export const GamingVideoList = styled.ul`
display: flex;
list-style-type: none;
flex-direction: row;
flex-wrap: wrap;
padding: 0px;
@media screen and (min-width: 768px) {
  margin-left: 40px;
}
`
export const LoaderContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
min-height: 80vh;
`
