const fetchAllPosts = async () => {
 let data;

 try{
 const res = await fetch('http://localhost:5000/getAllPosts', )
 data = await res.json();
 console.log(data);
 showAllPosts(data);
 }
 catch(ree){
  console.log("Error fetching data from server")
 }

};

const showAllPosts = (allPosts) => {
      const postsContainer = document.getElementById('post-container');
      postsContainer.innerHTML = ''; // Clear existing posts

      allPosts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add ('post');

        postDiv. innerHTML = ` 
         <div class="post-header">
            <div class="post-user-image">
                <img src=${post.postedUserImage}
            </div>
            <div class="post-username-time">
                <p class="post-username">${post.postedUserName}</p>
                <div class="post-time">
                    <span>${post.postedTime}</span>
                    <span>hours ago</span>

                </div>
            </div>
         </div>
         <div class="post-text">
            <p class="post-text-content">
            ${post.postText}
            </p>
         </div>
         <div class="post-image">
            <img src=${post.postImageUrl} alt="Post Image">
         </div> 
        `;
        postsContainer.appendChild(postDiv);
})
};

fetchAllPosts();
