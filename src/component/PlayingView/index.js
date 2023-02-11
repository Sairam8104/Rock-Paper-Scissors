import {Component} from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {RiCloseLine} from 'react-icons/ri'
import {
  MainContainer,
  RulesContainer,
  PopUpView,
  PopUpImage,
  TriggerButton,
  TriggerButtonClose,
} from './styledComponent'
import ScoreView from '../GameScoreView'
import ResultView from '../GameResultView'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class PlayingView extends Component {
  state = {
    score: 0,
    isShow: true,
    newArray: [choicesList[0], choicesList[1]],
    text: 'YOU WON',
  }

  getResult = (item1, item2) => {
    if (item1.id === 'ROCK') {
      switch (item2.id) {
        case 'PAPER':
          return 'YOU LOSE'
        case 'SCISSORS':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else if (item1.id === 'PAPER') {
      switch (item2.id) {
        case 'SCISSORS':
          return 'YOU LOSE'
        case 'ROCK':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (item2.id) {
        case 'ROCK':
          return 'YOU LOSE'
        case 'PAPER':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    }
  }

  checkResult = id => {
    const {score} = this.state
    const choice2 = choicesList[Math.floor(Math.random() * choicesList.length)]
    const choice1 = choicesList.filter(eachValue => eachValue.id === id)
    const result = this.getResult(choice1[0], choice2)
    let newScore = score
    if (result === 'YOU WON') {
      newScore = score + 1
    } else if (result === 'YOU LOSE') {
      newScore = score - 1
    } else {
      newScore = score
    }

    this.setState({
      isShow: false,
      score: newScore,
      newArray: [choice1[0], choice2],
      text: result,
    })
  }

  restartGame = () => {
    this.setState({isShow: true})
  }

  render() {
    const {score, isShow, newArray, text} = this.state
    return (
      <MainContainer>
        <ScoreView score={score} />
        <ResultView
          choicesList={choicesList}
          checkResult={this.checkResult}
          isShow={isShow}
          newArray={newArray}
          text={text}
          restartGame={this.restartGame}
        />
        <RulesContainer>
          <Popup
            modal
            trigger={
              <TriggerButton type="button" className="trigger-button">
                RULES
              </TriggerButton>
            }
          >
            {close => (
              <PopUpView>
                <TriggerButtonClose
                  type="button"
                  className="trigger-button-close"
                  onClick={() => close()}
                >
                  <RiCloseLine />
                </TriggerButtonClose>
                <PopUpImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </PopUpView>
            )}
          </Popup>
        </RulesContainer>
      </MainContainer>
    )
  }
}

export default PlayingView
