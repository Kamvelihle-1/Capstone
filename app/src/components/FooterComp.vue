<template>
    <footer class="container-fluid ">
        <div class="row contacts p-1 ">
            <h5 class="display-5 m-2">Contact Information</h5>
            <p class="m-2"><i class="bi bi-house-door-fill "></i> Cape Town,South Africa</p>
            <p class="m-2"><i class="bi bi-envelope-at "></i> admin@geniushouse.com</p>
            <p class="m-2"><i class="bi bi-telephone-inbound-fill "></i>+021 638 0658</p>
        </div>
        <div class="row copy ">
            <div class="col-sm-6 col-12  p-0">
                <p>Copyright &copy; {{ cYear}} by Kamvelihle Sikalana</p>
             
            </div>
            <div class="col-sm-6 col-12 p-0">
                <ul>
                    <li class="list-inline-item "><router-link target="_blank" to="https://www.linkedin.com/in/kamvelihle-sikalana-4884a4198" class="btn-floating btn-sm text-white " style="font-size: 24px;"><i class="bi bi-linkedin"></i></router-link></li>
                    <li class="list-inline-item"><router-link target="_blank" to="https://github.com/SmasherK" class="btn-floating btn-sm text-white " style="font-size: 24px;"><i class="bi bi-github"></i></router-link></li>
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
    background-color: #f1d7b7;
    color: #0e255a;
}
.contacts{
    background-color: #f1d7b7;
    opacity: .75;
    color: #0e255a;
}
.list-inline-item:hover{
    transform: translateY(0.5rem);
    transition: top 0.5s, opacity 0.5s ;
    
}

</style>