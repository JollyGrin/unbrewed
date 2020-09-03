import React, { Component } from 'react';
import { withRouter } from 'next/router';
import wsClient from '../../assets/js/ws/websocketClient';
import Layout from '../../components/Layout';
import { getDeck } from '../../assets/js/lib/ucards';
import OfflineWrapper from '../../components/offline/OfflineWrapper';

function offlinePlayer({ deck }) {
  return (
    <Layout title={'Test Offline'}>
      <OfflineWrapper data={deck} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  let deck = false;
  const urlParams = context.query;

  if (urlParams.deckid) {
    deck = await getDeck(urlParams.deckid);
  }

  return {
    props: { deck }, // will be passed to the page component as props
  };
}

export default withRouter(offlinePlayer);
