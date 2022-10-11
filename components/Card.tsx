interface Props {
    background: string;
    image: string;
    title: string;
    description: string;
}
export default function Card({background, title, description, image}: Props) {
  return (
    <div className='flex gap-4 justify-center h-full flex-col items-start p-8 sm:max-w-xs bg-orange'
    style={{backgroundColor:background}}>
        <img src={image}/>
        <h2 className='uppercase font-shoulder text-4xl text-gray-light mt-auto'>{title}</h2>
        <p className='font-lex text-white-transparent text-sm pb-8'>{description}</p>
        <button className='rounded-full bg-gray-light text-orange text-sm px-6 py-3 font-lex mt-auto mb-4' style={{color:background}}>Learn More</button>
    </div>
  )
}
