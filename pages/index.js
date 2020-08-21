import React, { Component } from 'react';

export default function Index({ hi, preview }) {


    return (
        <div>
            <span>hi</span>
        </div>
    );
}

export async function getStaticProps({ preview = false }) {
    const hi = 'hi'

    return {
        props: { hi },
    };
}