import { useRouter } from 'next/router'
import Link from 'next/link'
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils'

const Lobby = props => {
  //   loadGetInitialProps(props)
  const router = useRouter()
  const { lobby } = router.query
  return (
    <>
      <h1>Lobby: {lobby}</h1>
      <span>
        <a href='#'>Spectate</a> or{' '}
        <input onChange={e => props.change(e)}></input>{' '}
        <a href='#'>Join as Player</a>
      </span>
      <hr />
    </>
  )
}

export default Lobby
