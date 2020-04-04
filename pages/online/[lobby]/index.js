import { useRouter } from 'next/router'
import Link from 'next/link'
// import Header from '../../../components/header'

const Lobby = () => {
  const router = useRouter()
  const { lobby } = router.query

  const playerInput = React.createRef()

  return (
    <>
      <h1>Lobby: {lobby}</h1>
      <span>
        <a href='#'>Spectate</a> or{' '}
        <a href={`/online/${lobby}/${playerInput.current.value}`}>Load Deck</a>
        <input ref={playerInput}></input>
      </span>
      <hr />
    </>
  )
}

export default Lobby
