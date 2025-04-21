import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({$id,title, featuredImage}) {
  return (
    <Link to={`/psot/${$id}`}>
        <div className='w-full bg-gray-500 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl'
                >
                </img>
            </div>
            <h2
            className='text-xl font-bold'>
                {title}
            </h2>
        </div>
    </Link>
  )
}

export default PostCard