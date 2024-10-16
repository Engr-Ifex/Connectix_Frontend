import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FcApproval } from "react-icons/fc";
import { Link } from 'react-router-dom'

const ArtistDetails = () => {
  return (
    <div className='font-general m-6'>
        <div>
            <Link className='no-underline' to='#'>
                <FaArrowLeftLong className='text-xl' />
            </Link>
            <p className='font-bold text-xl pt-8 pb-10'>Artist details</p>
        </div>
        <div className='bg-[#f7d7854f] rounded-2xl border-[#0000001a] border p-4 shadow-lg '>
            <div className='bg-[#F4F4F4] rounded-2xl p-3'>
                <div className='flex justify-between items-center'>
                  <div className='bg-[#D9D9D9] w-10 h-10 rounded-full'></div>
                    <div>
                      <div className='flex justify-center items-center'>
                      <p className='font-black text-[15px]'>Micheal Smith </p>
                      <FcApproval className='ml-1 text-[#55D519]' />
                      </div>
                      <p className='text-sm'>Gosple artist</p>
                    </div>
                    <div className='text-right'>
                      <p className='text-sm'>stage name</p>
                      <p className='font-black text-[15px]'>Christ Tunez</p>
                    </div>
                </div>
                <div className='mt-6 text-sm'>
                      <p className='font-black text-[15px]'>Bio:</p>
                      <p className=''>
                        i am a rising star in the pop and R&B scene. With her soulful voice and captivating stage presence, she has been turning heads and winning hearts across the globe. Her debut album "Midnight Echoes" has been praised for its unique blend of pop rhythms and emotional depth. Jayne is not just a singer; she’s a storyteller who connects deeply with her audience through her powerful lyrics and mesmerizing performances.
                      </p>
                      <p className='text-[18px] font-semibold pt-4'>Gender: Male</p>
                      <p className='text-[18px] font-semibold pt-4'>Age: 19</p>
                      <p className='text-[18px] font-semibold pt-4'>State of residence: Kaduna</p>

                      <p className='pt-4 font-extrabold'>View songs</p>
                      <p>Song Title: <span className='font-bold'>Midnight Dreams</span></p>
                      <p>Link: <span className='text-[#124EE9]'>Listen on Apple music</span></p>
                      <p>Description:</p>
                      <p>A hauntingly beautiful track that takes you on a journey through
                      the bittersweet moments of love and longing</p>
                      
                      <p className='pt-4'>Song Title: <span className='font-bold'>Heartbeat</span></p>
                      <p>Link: <span className='text-[#124EE9]'>Listen on Spotify</span></p>
                      <p>Description:</p>
                      <p>An upbeat and catchy song that showcases Jayne's vocal prowess
                      and infectious energy. Perfect for getting you in a dancing mood</p>
                </div>
            </div>
            <div className='flex justify-between items-center p-1 py-5'>
              <button className='bg-transparent border border-black font-bold rounded-lg p-3 px-10 hover:bg-black hover:text-white'>Reject</button>
              <button className='bg-black text-white font-bold rounded-lg p-3 px-10 hover:bg-transparent hover:text-black hover:border-black border'>Accept</button>
            </div>
        </div>
    </div>
  )
}

export default ArtistDetails