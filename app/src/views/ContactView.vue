<template>
    <div class="container-fluid">
         
        <div class="row justify-content-center my-5">
            <div class="col-6 mt-3 fs-4 fw-semibold   ">
                <p class=" mt-5">Get in Touch with us!
                 <br>
                 You will be contacted soon for any additional infomation or feedback regarding our products or delivery service.
                </p>
                <br>
                <h5 class="display-6 fw-bold m-2">Contact Information</h5>
                <p class="m-2"><i class="bi bi-house-door-fill "></i> Cape Town,South Africa</p>
                <p class="m-2"><i class="bi bi-envelope-at "></i> admin@geniushouse.com</p>
                <p class="m-2"><i class="bi bi-telephone-inbound-fill "></i>+021 638 0658</p>
            
            </div>
            <div class="col-6 justify-content-center p-5">
                <form class="form  fw-semibold" action="https://formspree.io/f/mvojaave" method="POST">
                    <p class="title">Leave your Details</p>
                       <div class="flex">
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
   
  }
  button:hover{
  background:#2c3e50  ;
  padding: 1rem;
  color:rgb(200,160,4);
}
  .title {
    font-size: 28px;
    color: rgb(200,160,4);
    font-weight: 600;
    letter-spacing: -1px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 30px;
  }
  
  .flex {
    display: flex;
    width: 100%;
    gap: 6px;
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
  
  .form label .input:valid + span {
    color:black;
  }
  
  .submit {
    border: none;
    outline: none;
    background: rgb(200,160,4);
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    transform: .3s ease;
  }
  
  .submit:hover {
    background-color: black;
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