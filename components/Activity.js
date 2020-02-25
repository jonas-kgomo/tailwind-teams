import React from 'react';



const Activity = ({posts}) => (
 <div class="flex-inline  justify-center">
    { 
      posts.activities.map(post => {
        const stringy = post.action; 
        const stringx = stringy.split('_').join(' ');  
       
        
        return  (
       
          <div key={post.id} class="flex-wrap md:flex bg-white rounded-lg  p-6 m-6">
                   
               
                  <img class="h-10 w-10 mr-2 rounded-full " src={post.person.avatar}/>
                  <div class="text-xs ">
        <h>{post.person.name}</h> <h id="actions"> {stringx}</h> for <h class="font-semibold">{post.target}</h>
                    
                   <div class="flex-inline text-gray-500 text-xs item-start ">{post.created_at}</div>

                  </div>
                
            
   </div>
   
                )
         } )
     
}
  </div>
);
 
export default Activity;