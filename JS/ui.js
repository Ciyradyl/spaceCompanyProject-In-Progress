export class UI {
    constructor(){
        this.postsList = document.getElementById("posts");
        this.postContext = document.getElementById("contexts")
    }

    addAllPostToUI(posts){
        
        // <div class="item col-12 mb-2 col-lg-4">
        //     <a href="#"><img id="image" src="/MEDIA/test.jpg" alt=""></a>
        //     <a id="title" href="#">TITLE</a>
        //     <p id="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, illo!</p>
        //     <div class="item-footer">
        //       <span id="auther" class="auther" href="#">News</span>
        //       <span id="date">September 1, 2022</span>
        //       <span id= "id" style="display: none;"></span>
        //     </div>
        // </div>

        let result = "";
        
        posts.forEach(post => {
            result += `
            
            <div class="item col-12 mb-2 col-lg-4">
                <a href="context.html"><img id="image" src="${post.image}" alt=""></a>
                <a id="title" href="#">${post.title}</a>
                <p id="paragraph">${post.paragraph}</p>
                <div class="item-footer">
                    <span id="auther" class="auther" href="#">${post.auther}</span>
                    <span id="date">${post.date}</span>
                    <span id= "id" style="display: none;">${post.id}</span>
                </div>
            </div>
            
            
            `;
        });

        this.postsList.innerHTML = result;

    }

    addContextToUI(posts) {

            //  <div class="col-12 col-lg-2 mb-3 mb-lg-0">
            //     <div class="auther">News</div>
            //     <div class="date">September 1, 2022</div>
            // </div>
            // <div class="col-12 col-lg-8">
            //     <h1>Broadened HorizonZ</h1>
            // </div>
            // <div class="col-12 col-lg-8 offset-lg-2 mt-5">
            //     <img src="/MEDIA/test.jpg" width="100%" height="auto" class="mb-3" alt="">
            //     <div class="context-inner">
            //       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, quasi.</p> 
            //       <h3>Section Title</h3>
            //       <a id = "id" style="display: none;">${post.id}</a> 
            //     </div>
            // </div> 

            let result = "";            // Sorun çıkartabilir duruma göre adını değiştir.

            posts.forEach(post => {           // => öncesi post yazmak gerekebilir
                result = `                          
                
                 <div class="col-12 col-lg-2 mb-3 mb-lg-0">
                    <div class="auther">${post.auther}</div>
                    <div class="date">${post.date}</div>
                </div>
                <div class="col-12 col-lg-8">
                    <h1>${post.title}</h1>
                </div>
                <div class="col-12 col-lg-8 offset-lg-2 mt-5">
                    <img src="${post.image}" width="100%" height="auto" class="mb-3" alt="">
                    <div class="context-inner">
                      <p>${post.paragraph}</p> 
                      <h3>Section Title</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet omnis deleniti labore id? Ex quod fugit, nisi cum blanditiis praesentium odit vitae aliquam nobis alias provident, esse vero deserunt perspiciatis nam voluptatibus rerum eaque autem, facere asperiores? In amet ipsum exercitationem dolore sequi. Aut porro repellat doloremque. Commodi illo odio, delectus ratione ea molestiae rerum cum, nulla a accusantium aliquid dolore esse architecto molestias pariatur enim laborum sapiente repudiandae tempore magni. Tempora nulla molestiae quod ipsam ipsum modi ducimus dolores optio voluptas voluptate. Assumenda id aliquid, tempore consectetur veritatis ut saepe laudantium molestiae quaerat accusantium illo non laboriosam distinctio odio debitis eos molestias. Cumque dolorum tempora aut eos incidunt minima repellendus sint officiis aliquam sit provident, blanditiis atque voluptate perferendis beatae ab fuga consequuntur mollitia. Iusto laborum quaerat, ex veniam sapiente facilis voluptates dicta expedita magni natus excepturi cupiditate nam debitis alias, ipsa neque voluptatum, perferendis qui? Suscipit ab rem ullam. Repellat possimus minus odio beatae atque, earum velit ut id, repudiandae ad quia eius, dignissimos laudantium nesciunt fuga eveniet porro quae alias! Sit quasi eaque illum? Odio sed placeat cupiditate voluptatum ducimus praesentium obcaecati reprehenderit nulla ipsum culpa, sint aut perspiciatis vel, minus beatae doloribus nihil nesciunt consectetur facere dolor libero excepturi ipsa. Quas, non animi! Modi doloremque ipsam commodi tenetur asperiores fugiat quos, numquam nihil unde aspernatur laboriosam, blanditiis vel molestiae doloribus quasi pariatur totam officia quae nobis explicabo dolor dolores. Sapiente saepe iste sunt odio eligendi fugiat accusamus facilis neque vel ipsum quaerat numquam magnam, qui velit quis quo ea eaque quos accusantium quasi possimus. At voluptas tempore fuga, eius porro sequi similique magni? Alias unde beatae, ratione vel tempore a dolorem voluptate perspiciatis aut, dolores itaque dignissimos maxime voluptatem velit nisi suscipit nemo fugiat! Magnam neque velit at rem perferendis laborum explicabo natus doloribus esse asperiores.</p>
                      <a id = "id" style="display: none;">${post.id}</a> 
                    </div>
                </div> 
                
            
                `;
            });
    
            this.postContext.innerHTML = result;

    }
}