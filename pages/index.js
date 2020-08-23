import React, { Component } from 'react';
import Layout from '../components/Layout';
import CardTemplate from '../components/card/CardTemplate';
import cardMock from '../assets/mock/card.json';
import kirby from '../assets/mock/kirby.json';

export default function Index({ hi, preview }) {
  return (
    <Layout>
      <div className='flex'>
        <CardTemplate card={cardMock} />
        <CardTemplate card={kirby.deck_data.cards[4]} />
        <CardTemplate card={kirby.deck_data.cards[8]} /> <br />
        <CardTemplate card={kirby.deck_data.cards[10]} />
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
