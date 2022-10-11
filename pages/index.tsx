import type { NextPage } from 'next'
import Card from '../components/Card'

const Home: NextPage = () => {
  const cardData = [
    {
      id: 1,
      backgroundColor: 'hsl(31, 77%, 52%)',
      title: 'sedans',
      image: '/images/icon-sedans.svg',
      description: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    },
    {
      id: 2,
      backgroundColor: 'hsl(184, 100%, 22%)',
      title: 'suvs',
      image: '/images/icon-suvs.svg',
      description: "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
    },
    {
      id: 3,
      backgroundColor: 'hsl(179, 100%, 13%)',
      title: 'luxury',
      image: '/images/icon-luxury.svg',
      description: "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
    }
  ]

  return (
    <main className='flex items-center justify-center lg:h-screen p-0 m-0'>
      <div className='flex flex-col justify-start items-center w-3/4 rounded-lg lg:flex-row lg:overflow-hidden lg:h-2/3 '>
        {cardData.map((card) =>(
          <Card background={card.backgroundColor} title={card.title} image={card.image} description={card.description} key={card.id}/>
        ))}
      </div>
    </main>
  )
}

export default Home
