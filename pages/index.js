import React, { Component } from 'react';
import Layout from '../components/Layout';
import CardTemplate from '../components/card/CardTemplate';
import cardMock from '../assets/mock/card.json';
import kirby from '../assets/mock/kirby.json';
import chief from '../assets/mock/chief.json';

export default function Index({ hi, preview }) {
  return (
    <Layout>
      <div id='nav'>
        <div className='nav-left'>
          <span>Make a Deck</span>
        </div>
        <div className='nav-right'>
          <span>Offline</span>
          <span>Online</span>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const hi = 'hi';

  return {
    props: { hi },
  };
}
