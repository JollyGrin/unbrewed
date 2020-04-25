import React, { Component } from 'react'
import Layout from '../../components/online/HowTo/IndexOnlineLayout'
import HowToHero from '../../components/online/HowTo/HowToHero'
import HowToBody from '../../components/online/HowTo/HowToBody'
import HowToBoard from '../../components/online/HowTo/HowToBoard'
import HowToFooter from '../../components/online/HowToFooter'

export default class newIndex extends Component {
  render () {
    return (
      <Layout>
        <HowToHero />
        <HowToBody />
        <HowToBoard />
        <HowToFooter />
      </Layout>
    )
  }
}
