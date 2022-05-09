import { PublicKey } from '@solana/web3.js'

export const poolMapping: [{ name: string; pool: PublicKey }] = [
  {
    name: 'cardinal',
    pool: new PublicKey('A1h3AEScGehWAWdm3Q7uob8MGnhhkbB7FvH9gGhdzPC3'),
  },
  {
    name: 'portals',
    displayName: 'Portals',
    pubkey: new PublicKey('6H492AzY8eAS3VNjP7JpyurxCg17RH9wocBNfx4FAA6Q'),
  },
  {
    name: 'Blockasset',
    displayName: 'Blockasset',
    pubkey: new PublicKey('3BZCupFU6X3wYJwgTsKS2vTs4VeMrhSZgx4P2TfzExtP'),
    imageUrl:
      'https://blockasset.co/static/logo-e51ac9985ba7aef4ac8c1b1ae1c00511.png',
    maxStaked: 11791,
    colors: {
      primary: '#000000',
      secondary: '#4da1de',
      fontColor: '#1fcfb1',
    },
  },
  {
    name: 'okaybulls',
    displayName: 'Okaybulls',
    pubkey: new PublicKey('BoJSbpVoTGVJdjdRRSKnXPb4uUP2MvDwhT5bbpep3sGM'),
    websiteUrl: 'https://okaybulls.com/',
    receiptType: ReceiptType.Original,
    imageUrl:
      'https://rawcdn.githack.com/okaybulls/token/fb8f19a8139c0be093815f0b9fc0ff80133c0e36/token.png',
    maxStaked: 10000,
    colors: {
      primary: '#1C1C1C',
      secondary: '#F4431C',
      accent: '#F4431C',
      fontColor: '#FFFFFF',
    },
  },  
]
