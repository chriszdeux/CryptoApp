import React from "react"

// const min = 60000

const convertApprove = ( data ) => {
  const min = 60000
  let approvedTime 
  data < 5 ? approvedTime = ( data * min ) - min : approvedTime = ( data * min ) - min * 3
  return approvedTime 
}

export const earn_data = [
  {
    id: 1,
    title: 'What is Cryptocurrency?',
    description: 'A digital or virtual currency that uses cryptography for security. A cryptocurrency is difficult to counterfeit because of this security feature.',
    image_background: `https://www.howtogeek.com/wp-content/uploads/2021/08/shutterstock_1434643079.jpg?width=1198&trim=1,1&bg-color=000&pad=1,1`,
    video: <iframe className="quiz__video"  width="560" height="315" src="https://www.youtube.com/embed/6Gu2QMTAkEU" title="What is Cryptocurrency?" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
    duration: 2.58,
    approved_at: convertApprove(2.58),
    earn_dollars: 10,
    cryptocurrency: 'bitcoin',
  },

  {
    id: 2,
    title: 'What is Ethereum?',
    description: `Ethereum is a technology that's home to digital money, global payments, and applications. The community has built a booming digital economy, bold new ways for creators to earn online, and so much more. It's open to everyone, wherever you are in the world  -all you need is the internet.`,
    image_background: 'https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/L424HUS65FGRVFPTYYPG24CIYI.jpg',
    video: <iframe className="quiz__video"  width="560" height="315" src="https://www.youtube.com/embed/IsXvoYeJxKA" title="What is Ethereum?" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
    duration: 3.09,
    approved_at: convertApprove(3.09),
    earn_dollars: 10,
    cryptocurrency: 'ethereum',
  },

  {
    id: 3,
    title: `What is Blockchain Technology?`,
    description: `A blockchain is a distributed database that is shared among the nodes of a computer network. As a database, a blockchain stores information electronically in digital format. Blockchains are best known for their crucial role in cryptocurrency systems, such as Bitcoin, for maintaining a secure and decentralized record of transactions.`,
    image_background: `https://blogs.iadb.org/caribbean-dev-trends/wp-content/uploads/sites/34/2017/12/Blockchain1.jpg`,
    video: <iframe className="quiz__video"  width="560" height="315" src="https://www.youtube.com/embed/xBXSKQEjmY0" title="What is Blockchain Technology?" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
    duration: 2.28,
    approved_at: convertApprove(2.28),
    earn_dollars: 10,
    cryptocurrency: 'bitcoin',
  },

  {
    id: 4,
    title: `What is Decentraland (MANA)?`,
    description: `Decentraland is a virtual world similar to Second Life and the Sims built on blockchain. Venture with us as we take a look at what makes Decentraland gameplay standout from the rest.  `,
    image_background: `https://www.comocompraracciones.es/wp-content/uploads/2021/05/Invertir-en-Decentraland-MANA-Todo-lo-que-necesita-saber.jpg`,
    video: <iframe className="quiz__video"  width="560" height="315" src="https://www.youtube.com/embed/qGgYEwJrw0w" title="What is Decentraland (MANA)?" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
    duration: 8.46,
    approved_at: convertApprove(8.46),
    earn_dollars: 30,
    cryptocurrency: 'decentraland',
  },

  {
    id: 5,
    title: `What is a Crypto Wallet?`,
    description: `What is a crypto wallet, you ask? Simply stated, a crypto wallet is a digital safe for your crypto. More accurately, it’s an interface for interacting with the blockchain. But what makes a crypto wallet special and truly YOUR wallet?`,
    image_background: `https://images.squarespace-cdn.com/content/v1/53fe4a70e4b0a2293ab0e42a/1632316430628-XOYL69RBH33DSRQMRU7B/Header+Blog.png`,
    video: <iframe className="quiz__video"  width="560" height="315" src="https://www.youtube-nocookie.com/embed/zUco2NcrPlc" title="What is a Crypto Wallet?" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
    duration: 3.32,
    approved_at: convertApprove(3.32),
    earn_dollars: 10,
    cryptocurrency: 'bitcoin',
  },

  {
    id: 6,
    title: `What is Uniswap? `,
    description: `Uniswap is the world’s largest decentralized exchange (DEX). Uniswap UNI is the Uniswap token. `,
    image_background: `https://portaldobitcoin.uol.com.br/wp-content/uploads/2021/05/shutterstock_1962634279-750x431.jpg`,
    video: <iframe className="quiz__video"  width="560" height="315" src="https://www.youtube-nocookie.com/embed/5sVwLCEtcnk" title="What is Uniswap?" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
    duration: 4.43,
    approved_at: convertApprove(4.43),
    earn_dollars: 10,
    cryptocurrency: `uniswap`,
  },

  {
    id: 7,
    title: `What is Solana?`,
    description: `What is Solana? Solana is a high-performance scalable blockchain that can support crypto applications.  Solana can currently handle 50k transactions per second with an average 400ms block time. Blazing fast. The Solana coin is the native cryptocurrency of the Solana network. `,
    image_background: `https://forkast.news/wp-content/uploads/2021/08/Solana-1260x787.png`,
    video: <iframe className="quiz__video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/s8M73S6Dde8" title="What is Solana?" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
    duration: 5.30,
    approved_at: convertApprove(5.30),
    earn_dollars: 10,
    cryptocurrency: 'solana',
  },
]