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
    stakePoolAddress: new PublicKey(
      '34Mu6xQSWzJDwyXrQcbmuRA6JjJQEWwwzhFubmrGD2qx'
    ),
    websiteUrl: 'https://okaybulls.com/',
    receiptType: ReceiptType.Original,
    imageUrl:
      'https://rawcdn.githack.com/okaybulls/token/a3dc077179ac9e3f0aa1a784ef839af0f35e3f2e/bull.png',
    maxStaked: 10000,
    colors: {
      primary: '#1C1C1C',
      secondary: '#F4431C',
      accent: '#434343',
      fontColor: '#FFFFFF',
    },
  },
  {
    name: 'friendly-frogs',
    displayName: 'Friendly Frogs',
    stakePoolAddress: new PublicKey(
      'AHighyKxRsD6oo6SebbW6nQfuJ1GQBSmU2BnVFbtcFmz'
    ),
    websiteUrl: 'https://ffsc.io/',
    receiptType: ReceiptType.Original,
    maxStaked: 2121,
    imageUrl: 'https://arweave.net/MYKL6LSm8JFdqqfARCDqpmFBUlfkRplneVgIkBqyZE4',
    colors: {
      primary: '#698a5e',
      secondary: '#74c48e',
      fontColor: '#f2edd4',
    },
  },
  {
    name: 'gemmy',
    displayName: 'Gemmy',
    stakePoolAddress: new PublicKey(
      'GFT4PQfgB1ySCr826GhdstzTMndwvoqkBJuZsG7Uxrw1'
    ),
    websiteUrl: 'https://gemmy.club/',
    receiptType: ReceiptType.Original,
    maxStaked: 5000,
    imageUrl: 'https://arweave.net/sjCF_O89hlwQkMts0XHxoLSXGqVdZfy7PlymRvh_FgY',
    colors: {
      primary: '#7D89D8',
      secondary: '##131418',
      accent: '#1fcfb11c',
      fontColor: '#FFFFFF',
    },
  },
]
