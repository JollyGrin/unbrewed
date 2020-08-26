import fetch from 'axios';
import ucardMock from '../../mock/ucards.json';

export const getDeck = async (deckid) => {
  // return await ucardMock;

    const url = `https://unmatched.cards/api/decks/${deckid}`;

    try {
      const result = await fetch(url);
      return result.data;
    } catch {
      return ucardMock;
    }
};
