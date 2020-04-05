import React, { Component } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Lobby from '../../../components/online/Lobby'
import Test from '../../../components/online/Test'
// import Header from '../../../components/header'

// const Lobby = () => {
//   const router = useRouter()
//   const { lobby } = router.query

//   const playerInput = React.createRef()

//   return (
//     <>
//       <h1>Lobby: {lobby}</h1>
//       <span>
//         <a href='#'>Spectate</a> or{' '}
//         <a href={`/online/${lobby}/${playerInput.current.value}`}>Load Deck</a>
//         <input ref={playerInput}></input>
//       </span>
//       <hr />
//     </>
//   )
// }

// export default Lobby

// const TestWithRouter = props => {
//   const router = useRouter()
//   return <Test {...props} router={router} />
// }

export default class indexLobby extends Component {
  constructor (props) {
    super(props)
    this.state = {
      playerInputBox: 'player1'
    }
  }

  changeInputBox = e => {
    console.log(e)
  }

  render () {
    // const router = useRouter()
    return <div>Lobby</div>
  }
}
