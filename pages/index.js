import React, { Component } from 'react';
import Layout from '../components/Layout';
import CardTemplate from '../components/card/CardTemplate';
import Navbar from '../components/dom/Navbar';
import Hero from '../components/dom/Hero';
import HomeBoxes from '../components/dom/HomeBoxes';
import BoardRec from '../components/dom/BoardRec';
import VideoSection from '../components/dom/VideoSection';
import { getVideos } from '../assets/js/lib/youtube';

export default function Index({ videos, preview }) {
  return (
    <Layout title={'Unbrewed: BoL deck simulator'}>
      <Navbar />
      <Hero />
      <HomeBoxes />
      <BoardRec />
      <VideoSection videos={videos} />
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const youtube = await getVideos();
  const videos = youtube.items;

  return {
    props: { videos },
  };
}
