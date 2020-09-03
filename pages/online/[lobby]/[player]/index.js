import React, { Component } from 'react';
import { withRouter } from 'next/router';
import Layout from '../../../../components/Layout';
import OnlineWrapper from '../../../../components/online/OnlineWrapper';
import { getDeck } from '../../../../assets/js/lib/ucards';

function onlinePlayer({ deck, urlParams }) {
  return (
    <Layout title={`Online @${urlParams.lobby}/${urlParams.player}`}>
      {console.log('9999', deck)}
      <OnlineWrapper data={deck} urlParams={urlParams} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  let deck = false;
  const urlParams = context.query;

  if (urlParams.deck) {
    deck = await getDeck(urlParams.deck);
  }

  return {
    props: { deck, urlParams }, // will be passed to the page component as props
  };
}

export default withRouter(onlinePlayer);
