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
    name: 'META',
    displayName: 'META collections',
    stakePoolAddress: new PublicKey(
      'BCtcLrKhiZbFTRMB2W8iQWttYF82cLJzo7ZnnnkqXnnC'
    ),
    hostname: 'stake.metaladsai.com',
    websiteUrl: 'https://metaladsai.com',
    imageUrl:
      'https://raw.githubusercontent.com/poisonlab/photo/main/WhatsApp%20Image%202022-10-05%20at%2017.53.36.jpeg',
    styles: {
      fontFamily: 'serif',
      fontWeight: 500,
    },
    colors: {
      primary: '#27033d',
      secondary: '#27033d',
      accent: '#a3219f',
      fontColor: '#FFFFFF',
      fontColorSecondary: '#000000',
      backgroundSecondary: '#000000',
    },
  },
  {
    name: 'METALADS',
    displayName: 'META LADS',
    stakePoolAddress: new PublicKey(
      'CQK61z8JRqoaowTLXhM61vY2bwLct2L2fiHdTNcZZx4v'
    ),
    hostname: 'stake-lads.metaladsai.com',
    websiteUrl: 'https://metaladsai.com',
    imageUrl:
      'https://raw.githubusercontent.com/poisonlab/photo/main/WhatsApp%20Image%202022-10-06%20at%2019.58.33.jpeg',
    styles: {
      fontFamily: 'serif',
      fontWeight: 500,
    },
    colors: {
      primary: '#27033d',
      secondary: '#27033d',
      accent: '#a3219f',
      fontColor: '#FFFFFF',
      fontColorSecondary: '#000000',
      backgroundSecondary: '#000000',
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
    name: 'monsta-scientist',
    displayName: 'Monsta Scientist',
    stakePoolAddress: new PublicKey(
      '4hYMymEkyvBvY5ipLjiedvZu7Dp7oTshAsXcFVJZ9Bhv'
    ),
    websiteUrl: 'https://www.monstascientist.io/',
    receiptType: ReceiptType.Original,
    maxStaked: 4444,
    imageUrl: 'https://raw.githubusercontent.com/monstadao/logo/main/monsta-scientist.jpg',
    colors: {
      primary: '#211F20',
      secondary: '#211F20',
      accent: '#000',
    },
  },
  {
    name: 'monsta-potion',
    displayName: 'Monsta Potion',
    stakePoolAddress: new PublicKey(
      'FXuwtxvrL8BsTmW9ZBpYHyntKYciBRz9KX9z19iQjn8h'
    ),
    websiteUrl: 'https://www.monstascientist.io/',
    receiptType: ReceiptType.Original,
    maxStaked: 150,
    imageUrl: 'https://c4cbdhxzucki34e4lofteofqngjip3dznomj22ui4en5kukyhi.arweave.net/FwQRnvmglI3wnFuLMjiwaZK_H7HlrmJ1qiOEb1VFYOs?ext=png',
    colors: {
      primary: '#211F20',
      secondary: '#211F20',
      accent: '#000',
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
