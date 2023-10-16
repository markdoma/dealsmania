import Tabs from '../components/Tabs'
import Head from 'next/head'

import { Header } from '../components/Header'
import DealCategory from '../components/DealCategory'
import Dropdown from '../components/Dropdown'
import { AuthLayout } from '@/components/AuthLayout'

import { useStage } from '../context/StageContext'

export default function Deals() {
  const { selectedStage, setSelectedStage } = useStage()
  console.log(selectedStage)
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-4">
      <Head>
        <title>DealsMania - Sales made simple for small businesses</title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>
      <Header />

      <Tabs />
      <Dropdown />

      {selectedStage && <DealCategory category={selectedStage} />}
    </div>
  )
}
