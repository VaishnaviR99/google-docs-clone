import React from 'react'
import doc from '../image/docs_2020q4_48dp.png'
import vaish from "../image/20230227_080829-01.jpg"
import blank from "../image/docs-blank-googlecolors.png"
import { getSession, useSession } from 'next-auth/react'
import Login from './Login'
import { signOut } from 'next-auth/react'

import { useState } from 'react'
import Doc from "../components/Doc"






function Header() {
    const { data: session } = useSession()
    const [doc, setDoc] = useState(false)
    
    // if(!session) return <Login/>
     if(doc) return <Doc/>


    return (
        <>
            <div className='sticky top-0 z-50 flex items-center px-4 py-2 shadow-md bg-white'>
                <button className=' h-20 w-20 border-0  '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                        stroke="currentColor" className="w-6 h-6 mx-9">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>

                <img src={doc} alt="doc" className='ml-0 mx-3 ' />



                <h1 className='ml-2 text-gray-700 text-2xl'>Docs</h1>
                <div className='mx-6 flex flex-grow items-cennter px-5 py-2 bg-gray-100 text-gray-600 rounded-lg
            focus-within:text-white-600 focus-within:shadow-md'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-5 h-7">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    <input type='text' placeholder='Search'
                        className='flex-grow px-5 text-base bg-transparent outline-none' />

                </div>
                <button className=' mx-0 md:ml-20 h-20 w-20 border-0 '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6  ">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 
                    15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 
                    6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 
                    2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                    </svg>

                </button>
                <img
                    loading='lazy'
                    className='cursor-pointer h-12 w-12 rounded-full ml-2 mx-5'
                    src={session?.user?.image}
                    onClick={signOut}
                    alt="vaish" />
            </div>
            <section className='bg-[#f8f9fa] pb-10 px-10'>
                <div className='max-w-3xl mx-auto'>
                    <div className='flex items-center justify-between py-6'>
                        <h2 className='text-gray-700 tex-lg'> Start a new document</h2>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                            </svg>
                        </button>
                    </div>
                    <div >

                        <button className='relative h-52 w-40 border-2 cursor-pointer hover:border-blue-500' variant="gradient" onClick={setDoc(true)} >
                            <img src={blank} alt="blank" />
                        </button>

                        <p className='ml-2 mt-2 font-semibold text-sm text-gray-700'>Blank</p>
                    </div>
                </div>
            </section>


            <section className='bg-white px-10 md:px-0'>
                <div className='max-w-3xl mx-auto py-8 text-sm text-gray-700'>
                    <div className='flex items-center justify-between pb-5'>
                        <h2 className='font-medium flex-grow'> My Documents</h2>
                        <p className='mr-12'>Date Created</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                        </svg>

                    </div>
                </div>
            </section>
        </>

    )
}

export default Header;

// export async function getServerSideProps(context) {
//     const session = await getSession(context);

//     return {
//         props: {
//             session,
//         },
//     };
// }