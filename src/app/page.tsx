import styles from './styles.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <>
     {/* Landing Page */}
     <div className='w-full overflow-hidden'>
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-zinc-50'>
            <h1 className='text-4xl font-bold tracking-wide'>HAYATO FUJIWARA</h1>
            <h3 className='font-Roboto font-medium tracking-wide text-sm'>Web Developer</h3>
            <h3 className='font-Roboto font-medium tracking-wide text-sm'>Designer</h3>
            <h3 className='font-Roboto font-medium tracking-wide text-sm'>Editor</h3>
          </div>
          <div className={styles.lpbg}>
            {/* <Image
            src="/bg.jpg"
            alt="Background"
            quality={100}	
            layout='fill'
            objectFit='contain'
            className=""
            /> */}
          </div>

          <div className='absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'>
            <div className='flex justify-center'>
              <div className='rounded-full w-14 h-14 border border-x-zinc-50'>
                <a href="#" className='relative flex justify-center top-1/4 hover:translate-y-1 duration-300'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
