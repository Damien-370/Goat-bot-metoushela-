const axios = require('axios');
const UPoLPrefix = [
  '-ai',
  'ai',
  '/ai',
  'bot',
  'ask'
]; 

  module.exports = {
  config: {
    name: 'ai',
    version: '1.2.1',
    role: 0,
    category: 'AI',
    author: 'Raphael scholar',
    shortDescription: '',
    longDescription: '',
  },
  
  onStart: async function () {},
  onChat: async function ({ message, event, args, api, threadID, messageID }) {
      
      const ahprefix = UPoLPrefix.find((p) => event.body && event.body.toLowerCase().startsWith(p));
      if (!ahprefix) {
        return; 
      } 
      
     const upol = event.body.substring(ahprefix.length).trim();
   if (!upol) {
        await message.reply('𝙨𝙖𝙡𝙪𝙩! 𝙘𝙤𝙢𝙢𝙚𝙣𝙩 𝙥𝙪𝙞𝙨-𝙟𝙚 𝙫𝙤𝙪𝙨 𝙖𝙨𝙨𝙞𝙨𝙩𝙚𝙧 𝙖𝙪𝙟𝙤𝙪𝙧𝙙`𝙝𝙪𝙞..?');
        return;
      }
      
      const apply = ['Awww🥹, maybe you need my help', 'How can i help you?', 'How can i assist you today?', 'How can i help you?🙂'];
      
     const randomapply = apply[Math.floor(Math.random() * apply.length)];

     
      if (args[0] === 'hi') {
          message.reply(`${randomapply}`);
          return;
      }
      
    const encodedPrompt = encodeURIComponent(args.join(" "));

   await message.reply('thinking..');
  
    const response = await axios.get(`https://sandipbaruwal.onrender.com/gemini?prompt=${encodedPrompt}`);
 
     const UPoL = response.data.answer; 

      const upolres = `${UPoL}`;
      
        message.reply(upolres);
  }
};
