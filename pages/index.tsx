import { useWallet } from '@solana/wallet-adapter-react'
import { Header } from 'common/Header'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useUserTokenData } from 'providers/TokenDataProvider'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'

function Home() {
  const { setAddress, tokenDatas, loaded, refreshing } = useUserTokenData()
  const wallet = useWallet()

  useEffect(() => {
    if (wallet && wallet.connected && wallet.publicKey) {
      setAddress(wallet.publicKey.toBase58())
    }
  }, [wallet.publicKey])

  const filteredNFTs = tokenDatas.filter((token) => token.metadata.data)

  return (
    <div>
      <Head>
        <title>Cardinal Staking UI</title>
        <meta name="description" content="Generated by Cardinal Staking UI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div className="container mx-auto max-h-[90vh] w-full bg-[#1a1b20]">
          <Header />
          <div className="my-2 grid h-full grid-cols-2 gap-4">
            <div className="flex max-h-[85vh] flex-col rounded-md bg-white bg-opacity-5 p-10 text-gray-200">
              <p className="mb-3 text-lg">Select your NFTs</p>
              {wallet.connected && (
                <div className="flex-auto my-3 overflow-auto">
                  <div className="my-auto mb-4  rounded-md bg-white bg-opacity-5 p-5">
                    {loaded ? (
                      <div className="grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-2 lg:grid-cols-3">
                        {tokenDatas.map((td) => (
                          <div className="overflow-hidden">
                            <img src={td.metadata.data.image} />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p>Loading your NFTs...</p>
                    )}
                  </div>
                </div>
              )}
              <div className="flex flex-row-reverse">
                <button className="rounded-md bg-blue-700 px-4 py-2">
                  Stake NFTs
                </button>
              </div>
            </div>
            <div className="rounded-md bg-white bg-opacity-5 p-10 text-gray-200">
              <p className="text-lg">View Staked NFTs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
