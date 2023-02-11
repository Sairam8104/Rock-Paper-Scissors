import {
  ResultContainer,
  TextContainer,
  ScoreName,
  ScoreBoard,
  ScoreHeading,
  ScoreResult,
} from './styledComponent'

const ScoreView = props => {
  const {score} = props
  return (
    <ResultContainer>
      <TextContainer>
        <ScoreName>
          ROCK
          <br /> PAPER <br /> SCISSORS
        </ScoreName>
      </TextContainer>
      <ScoreBoard>
        <ScoreHeading>Score</ScoreHeading>
        <ScoreResult>{score}</ScoreResult>
      </ScoreBoard>
    </ResultContainer>
  )
}

export default ScoreView
