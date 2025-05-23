import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({$id,title, featuredImage}) {
  console.log(appwriteService.getFilePreview(featuredImage));
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-200 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl'
                >
                </img>
            </div>
            <h2
            className='text-xl font-bold break-words line-clamp-2'>
                {title}
            </h2>
        </div>
    </Link>
  )
}

export default PostCard