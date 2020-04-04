import { useRouter } from 'next/router'
import Link from 'next/link'
// import Header from '../../../components/header'

const Player = () => {
  const router = useRouter()
  const { lobby, player } = router.query

  return (
    <>
      <h1>
        Lobby: {lobby} - Player: {player}
      </h1>
      <span>
        <a href='#'>Spectate</a> or <a href='#'>Load Deck</a>
      </span>
      <hr />
    </>
  )
}

export default Player
