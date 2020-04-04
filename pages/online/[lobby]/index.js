import { useRouter } from 'next/router'
import Link from 'next/link'
// import Header from '../../../components/header'

const Lobby = () => {
  const router = useRouter()
  const { lobby } = router.query

  return (
    <>
      <h1>Post: {lobby}</h1>
    </>
  )
}

export default Lobby
