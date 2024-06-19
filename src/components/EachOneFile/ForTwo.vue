<template>

  

    <div class="profile">
  
      <div class="form_box">
        <div >
            <h1>G-ထွက်</h1>
            <div v-for="post in posts" :key="post">
              <div class="router" :to="{name:'Detail',params: {id:post.id}}">
                <!-- Button trigger modal -->
                <div  data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                  <p>{{ post.name }}</p>
                </div>
  
                <!-- Modal -->
                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">{{ post.name }}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <SinglePost :post="post" :postTow="sales_in" :salesOut="sales_out"></SinglePost>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
  
  
          <div>
            <h1>လက်ကား</h1>
            <div v-for="post in sales_in" :key="post">
              <div class="router" :to="{name:'Detail',params: {id:post.id}}">
                <div  data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                  <p>{{ post.name }}</p>
                </div>
  
                <!-- Modal -->
                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">{{ post.name }}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <SinglePost :post="post" :postTow="sales_in" :salesOut="sales_out"></SinglePost>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
  
          
          <div>
            <h1>လက်လီ</h1>
            <div v-for="post in sales_out" :key="post">
              <div class="router" :to="{name:'Detail',params: {id:post.id}}">
                <div  data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                  <p>{{ post.name }}</p>
                </div>
  
                <!-- Modal -->
                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">{{ post.name }}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <SinglePost :post="post" :postTow="sales_in" :salesOut="sales_out"></SinglePost>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
  
              </div>
            </div>
          </div>
  
          <div>
            <h1>အဝင်ပိုင်း</h1>
            <div v-for="post in sales_in" :key="post">
              <div class="router" :to="{name:'Detail',params: {id:post.id}}">
                <div  data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                  <p>{{ post.name }}</p>
                </div>
  
                <!-- Modal -->
                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">{{ post.name }}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <SinglePost :post="post" :postTow="sales_in" :salesOut="sales_out"></SinglePost>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
  
              </div>
            </div>
          </div>
  
          <div>
            <h1>စာရင်းကိုင်</h1>
            <div v-for="post in sales_in" :key="post">
              <div class="router" :to="{name:'Detail',params: {id:post.id}}">
                <div  data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                  <p>{{ post.name }}</p>
                </div>
  
                <!-- Modal -->
                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">{{ post.name }}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <SinglePost :post="post" :postTow="sales_in" :salesOut="sales_out"></SinglePost>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
  
              </div>
            </div>
          </div>
          <div>
            <h1>စက်ကိုင်</h1>
            <div v-for="post in sales_in" :key="post">
              <div class="router" :to="{name:'Detail',params: {id:post.id}}">
                <div  data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                  <p>{{ post.name }}</p>
                </div>
  
                <!-- Modal -->
                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">{{ post.name }}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <SinglePost :post="post" :postTow="sales_in" :salesOut="sales_out"></SinglePost>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
      </div>
      
    </div>
  </template>
  
  <script>
  import getPosts from '@/composables/getPosts'
  import SinglePost from '@/components/SinglePost.vue';
  export default {
    components: { SinglePost },
    setup() {
      let {sales_in,posts,sales_out,error,load} = getPosts();
      load();
      return {sales_in,posts,sales_out,error}
    }
  }
  </script>
  
  <style scoped>
  .profile {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    /* align-items: center; */
    height: 100vh;
    width: 100%;
    font-size: 15px;
    color: rgb(10, 10, 10);
    font-weight: 500;
    
  }
  .form_box {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    max-width: 100%;
    height:auto;
    border: 1px solid gray;
    cursor: pointer;
  }
  .loop_name {
    display: flex;
  }
  .router {
    text-decoration: none;
  }
  </style>