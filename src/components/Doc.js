import React from 'react'
import doc from "../image/docs_2020q4_48dp.png"
import vaish from "../image/20230227_080829-01.jpg"
import TextEditor from './TextEditor'


function Doc() {
    const logout=()=>{
        localStorage.clear();
        window.location.reload();
    }
    return (
        <div>
            <header className='flex justify-between items-center p-3 pb-1'>
                <span className='cursor-pointer'><img src={doc} alt='doc' /></span>
                <div className='flex-grow px*2'>
                    <h2>Untitled documnet</h2>
                    <div className='flex items-center text-sm space-x-1 -ml-1 h-8 text-gray
                    '>
                        <p className='cursor-pointer hover:bg-gray-100 transition duration-200 ease-out p-2 rounded-lg'>File</p>
                        <p className='cursor-pointer hover:bg-gray-100 transition duration-200 ease-out p-2 rounded-lg'>Edit</p>
                        <p className='cursor-pointer hover:bg-gray-100 transition duration-200 ease-out p-2 rounded-lg'>View</p>
                        <p className='cursor-pointer hover:bg-gray-100 transition duration-200 ease-out p-2 rounded-lg'>Insert</p>
                        <p className='cursor-pointer hover:bg-gray-100 transition duration-200 ease-out p-2 rounded-lg'>Format</p>
                        <p className='cursor-pointer hover:bg-gray-100 transition duration-200 ease-out p-2 rounded-lg'>Tools</p>
                        <p className='cursor-pointer hover:bg-gray-100 transition duration-200 ease-out p-2 rounded-lg'>Extensions</p>
                        <p className='cursor-pointer hover:bg-gray-100 transition duration-200 ease-out p-2 rounded-lg'>Help</p>

                        .


                    </div>


                </div>
                <button className='hidden md:!inline-flex h-10 mt-5 bg-blue-400 hover:bg-Lightblue-400 text-white 
             py-2 px-4 rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                    </svg>SHARE

                </button>
                <div onClick={logout} title='logout'>
                    <img className='rounded-full cursor-pointer h-12 w-12 ml-2 mt-3' src={vaish} />
                    

                </div>
                
            </header>
            <TextEditor />
        </div>
    )
}

export default Doc;