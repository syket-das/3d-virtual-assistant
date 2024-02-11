import openai from 'openai';

export const OPENAI_API_KEY =
  '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';

const openaiConfig = new openai({ apiKey: OPENAI_API_KEY });

export default openaiConfig;
