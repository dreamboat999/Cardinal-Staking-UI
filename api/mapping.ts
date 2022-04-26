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
]
