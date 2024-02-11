import {create} from 'zustand';
import OpenAI from 'openai';
const openAi = new OpenAI({
  apiKey: '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',
});
openAi.baseURL = 'https://api.openai.com/v1';
openAi.buildURL = path => `${openAi.baseURL}${path}`;

const useMessageStore = create((set, get) => ({
  messages: [],
  setMessages: messages => set({messages}),
  lastAiMessageUnread: '',
  setLastAiMessageUnread: lastAiMessageUnread => set({lastAiMessageUnread}),

  generateAiMessage: async () => {
    try {
      const completion = await openAi.chat.completions.create({
        messages: [...get().messages],
        model: 'gpt-3.5-turbo',
        temperature: 0.5,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });

      set({
        messages: [
          ...get().messages,
          {role: 'system', content: completion.choices[0].message.content},
        ],
      });

      set({lastAiMessageUnread: completion.choices[0].message.content});
    } catch (error) {
      set({
        messages: [
          ...get().messages,
          {role: 'system', content: "Sorry, I don't understand that yet."},
        ],
      });
    }
  },
}));

export default useMessageStore;
