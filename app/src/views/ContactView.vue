<template>
    <div class="container-fluid contact">
         
        <div class="row justify-content-center py-5">
            <div class="col-6 mt-3 p-0  git fs-4 fw-semibold " >
              <div class="info pt-5">
                <p class=" mt-5 ">Get in Touch with us!
                 <br>
                 You will be contacted soon for any additional infomation or feedback regarding our products or delivery service.
                </p>
                <br>
                <h5 class="display-6 fw-bold m-2">Contact Information</h5>
                <p class="m-2"><i class="bi bi-house-door-fill "></i> Cape Town,South Africa</p>
                <p class="m-2"><i class="bi bi-envelope-at "></i> admin@geniushouse.com</p>
                <p class="m-2"><i class="bi bi-telephone-inbound-fill "></i>+021 638 0658</p>
              </div>
            </div>
            <div class="col-5 justify-content-center  mt-3  p-5" style="background-color:#c0d0d5; border-radius:.5rem">
                <form class="form  fw-semibold" action="https://formspree.io/f/xleynvdd" method="POST">
                    <p class="title">Leave your Details</p>
                       <div class="row">
                           <label>
                               <span>Firstname:</span>
                               <input  placeholder="" type="text" class="input">
                           </label>
                           <label>
                               <span>Lastname:</span>
                               <input placeholder="" type="text" class="input">
                           </label>
                       </div> 
                       <label>
                           <span>Email:</span>
                           <input placeholder="" type="email" class="input ">
                       </label> 
                           <label class="">
                          <span> Message:</span> 
                           <textarea name="message" class="input"></textarea>
                           </label>
                       <button class="submit">Submit</button>
                       
               </form>
            </div>
            
        </div>
    
    </div>
      
    </template>
    <script>
     export default{

    }
    </script>
    <style scoped>
    .git{
      background-image: url("https://i.postimg.cc/cCPK5Mv2/Collage-Smart-Homes-2543428667.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: .5rem;
    }
    .info{
      height: 100%;
      background-color: rgba(252, 252, 252, 0.742);
    }
   
      .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    gap: 10px;
    max-width: 350px;
    background-color: #fff;
    padding: 20px;
    border-radius: 20px;
    border: 1px solid black ;
    position: relative;
    margin-left: 5rem;
   
  }
  button:hover{
  background:#0e255a ;
  padding: 1rem;
  color:#f1d7b7;
}
  .title {
    font-size: 28px;
    color: #0e255a;;
    font-weight: 600;
    letter-spacing: -1px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 30px;
  }
  

  .form label {
    position: relative;
  }
  
  .form label .input {
    width: 100%;
    padding: 10px 10px 20px 10px;
    outline: 0;
    border: 1px solid rgba(105, 105, 105, 0.397);
    border-radius: 10px;
  }
  
  .form label .input + span {
    position: absolute;
    left: 10px;
    top: 15px;
    color: grey;
    font-size: 0.9em;
    cursor: text;
    transition: 0.3s ease;
  }
  
  .form label .input:placeholder-shown + span {
    top: 15px;
    font-size: 0.9em;
  }
  
  .form label .input:focus + span,.form label .input:valid + span {
    top: 30px;
    font-size: 0.7em;
    font-weight: 600;
  }
  

  
  .submit {
    border: none;
    outline: none;
    background: #c0d0d5;
    padding: 10px;
    border-radius: 10px;
    color: #0e255a;
    font-size: 16px;
    transform: .3s ease;
  }
  
  .submit:hover {
    background-color: #0e255a;
    color: #f3f2e9;
  }
  
  @keyframes pulse {
    from {
      transform: scale(0.9);
      opacity: 1;
    }
  
    to {
      transform: scale(1.8);
      opacity: 0;
    }
  }
    </style>