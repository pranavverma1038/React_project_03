import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";
import { useSelector } from "react-redux";


function AllPosts() {
  const [posts, setPosts] = useState([]);
  const isLoggedIn = useSelector((state) => state.auth.status); // or use userData

  useEffect(() => {
    if (isLoggedIn) {
      appwriteService.getPosts([]).then((posts) => {
        if (posts) {
          setPosts(posts.documents);
        }
      });
    } else {
      setPosts([]);
    }
  }, [isLoggedIn]);



  return (
    <div className="w-full py-8">
      <Container>
      {!isLoggedIn &&
        <div className="text-center text-xl font-semibold text-gray-700">
          Please login to view posts
        </div>
      }
        
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
            <PostCard {...post}/>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
