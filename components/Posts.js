import React from 'react';
 


const Posts = ({posts}) => (
 <div class="flex flex-wrap  justify-center">
    { 
      posts.teams.map(post => {
        const fx =Math.round(post.leads_count)/ 1000 ;  
     
        return  (
       
          <div key={post.id} class="flex flex-wrap md:flex bg-white rounded-lg w-1/4 p-6 m-6">
                   
                 
                  <img class="h-10 w-10 md:h-10 md:w-10 rounded-full mx-auto md:mx-0 md:mr-6" src={post.image}/>
                  <div class="text-center md:text-left">
                  <h2 class="text-lg font-semibold">{post.name}</h2>
                   <div class="text-gray-500">Created {post.created_at}</div>
                  <p>{post.description}</p>
                  
                    
                    
                 
                  <div class="flex text-md">
                     Leads 
                   <div class="m-1 rounded-full h-4 w-8 flex items-center bg-orange-300 justify-center" >
                   <h class="text-xs justify-center"> {fx}K</h> 
                  </div>
                  </div>

                  <div class="flex text-md">
                    Campaigns
                   <div class="m-1 rounded-full h-5 w-5 flex items-center bg-green-300 justify-center" >
      <h class="text-xs justify-center">{post.campaigns_count} </h>

               
                  </div>

                    {post.is_favorited ? "T" : "F"}
                    
                    {post.is_archived ? "T" : "F"}
      
                  </div>
           </div>
   </div>
   
                )
         } )
     
}
  </div>
);
 
export default Posts;