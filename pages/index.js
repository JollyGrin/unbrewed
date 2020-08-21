import React, { Component } from 'react';
import Layout from '../components/Layout';
import CardTemplate from '../components/card/CardTemplate'

export default function Index({ hi, preview }) {


    return (
        <Layout>
            <div className="flex">
                <CardTemplate />
            </div>
        </Layout>
    );
}

export async function getStaticProps({ preview = false }) {
    const hi = 'hi'

    return {
        props: { hi },
    };
}