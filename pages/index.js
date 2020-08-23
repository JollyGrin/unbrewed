import React, { Component } from 'react';
import Layout from '../components/Layout';
import CardTemplate from '../components/card/CardTemplate';
import cardMock from '../assets/mock/card.json';
import kirby from '../assets/mock/kirby.json';
import chief from '../assets/mock/chief.json';
import Navbar from '../components/dom/Navbar';
import Hero from '../components/dom/Hero';
import HomeBoxes from '../components/dom/HomeBoxes';

export default function Index({ hi, preview }) {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <HomeBoxes />
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const hi = 'hi';

  return {
    props: { hi },
  };
}
