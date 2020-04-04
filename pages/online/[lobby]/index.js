import { useRouter } from 'next/router'
import Link from 'next/link'
// import Header from '../../../components/header'

const Lobby = () => {
  const router = useRouter()
  const { lobby } = router.query

  return (
    <>
      <h1>Lobby: {lobby}</h1>
      <span>
        <a href='#'>Spectate</a> or <a href='#'>Load Deck</a>
      </span>
      <hr />
    </>
  )
}

export default Lobby
