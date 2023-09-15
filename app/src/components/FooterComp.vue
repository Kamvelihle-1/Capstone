<template>
    <footer class="container-fluid mt-5">
        <div class="row contacts p-1 ">
            
            <div class="col">
                <img class="fw-4" src="https://i.postimg.cc/9XvnVMnV/Your-Source-for-Smart-Home-Wizardry-2-removebg-preview.png" alt="" style="width:15rem;">
            </div>
            <div class="col pt-3">
                <h5 class="display-5 m-2">Contact Information</h5>
                <p class="m-2"><i class="bi bi-house-door-fill "></i> Cape Town,South Africa</p>
                <p class="m-2"><i class="bi bi-envelope-at "></i> admin@geniushouse.com</p>
                <p class="m-2"><i class="bi bi-telephone-inbound-fill "></i>+021 638 0658</p>
            </div>
            
        </div>
        <div class="row copy ">
            <div class="col-sm-6 col-12  p-0">
                <p>Copyright &copy; {{ cYear}} by Kamvelihle Sikalana</p>
             
            </div>
            <div class="col-sm-6 col-12 p-0">
                <ul>
                    <li class="list-inline-item "><a target="_blank" href="https://www.linkedin.com/in/kamvelihle-sikalana-4884a4198" class="btn-floating btn-sm  " style="font-size: 24px; color:#0e255a;"><i class="bi bi-linkedin"></i></a></li>
                    <li class="list-inline-item"><a target="_blank" href="https://github.com/SmasherK" class="btn-floating btn-sm " style="font-size: 24px; color:#0e255a;"><i class="bi bi-github"></i></a></li>
                </ul>
            </div>
        </div>

    </footer>
</template>

<script>
    export default {
        data(){
            return{
                cYear:new Date().getFullYear()
            }
        }
        
    }
</script>

<style scoped>
.copy{
    background-color: #c0d0d5;
    color: #0e255a;
}
footer{
    background-image: url("https://i.postimg.cc/VLpBXMz0/modern-technologies-rear-view-of-woman-that-is-ind-9-WG3-CGN-1.jpg");
    background-size: cover;
    background-position-y: center;
    background-repeat: no-repeat;
 
   
}
.contacts{
    background-color: rgba(252, 252, 252, 0.742);
}
.list-inline-item:hover{
    transform: translateY(0.5rem);
    transition: top 0.5s, opacity 0.5s ;
    color: #0e255a;
}

</style>