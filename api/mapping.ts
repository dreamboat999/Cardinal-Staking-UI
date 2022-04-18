import { PublicKey } from '@solana/web3.js'

export const poolMapping: [{ name: string; pool: PublicKey }] = [
  {
    name: 'cardinal',
    pool: new PublicKey('A1h3AEScGehWAWdm3Q7uob8MGnhhkbB7FvH9gGhdzPC3'),
  },
  {
    name: 'portals',
    displayName: 'Portals',
    pool: new PublicKey('6H492AzY8eAS3VNjP7JpyurxCg17RH9wocBNfx4FAA6Q'),
  },
]
