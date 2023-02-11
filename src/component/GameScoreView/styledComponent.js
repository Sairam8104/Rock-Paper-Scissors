import styled from 'styled-components'

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  width: 80%;
  border-style: solid;
  border-color: #ffffff;
  border-width: 2px;
  border-radius: 10px;
  background-color: transparent;
  margin-top: 2%;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ScoreName = styled.h1`
  color: white;
  font-size: 20px;
  font-family: 'Bree Serif';
  margin-top: 0px;
  margin-bottom: 0px;
  line-height: 1.5;
  font-weight: 500;
  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`

export const ScoreBoard = styled(TextContainer)`
  background-color: white;
  width: 15%;
  height: 90%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 576px) {
    width: 25%;
  }
`
export const ScoreHeading = styled.p`
  color: #223a5f;
  font-size: 20px;
  margin-bottom: 0px;
  font-family: 'Bree Serif';
  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`
export const ScoreResult = styled.p`
  color: #223a5f;
  font-size: 42px;
  margin-top: 0px;
  font-family: 'Roboto';
  @media screen and (max-width: 576px) {
    font-size: 24px;
    margin-top: 10px;
  }
`
