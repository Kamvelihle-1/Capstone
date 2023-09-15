<template>
    <div class="col">
        <div class="row">
            <div class="col-sm-3 mx-1  text-center">
                <div class="row">
                    <label for="Categories" class="my-1">Categories</label>
                </div>
                <div class="row  justify-content-center">
                    <select v-model="fCategory" id="categories" name="Categories">
                    <option value="Security Cameras & Systems">Security Cameras & Systems</option>
                    <option value="Smart Entry">Smart Entry</option>
                    <option value="Smart Detectors and Sensors">Smart Detectors and Sensors</option>
                    <option value="Vacuums and Mops">Vacuums and Mops</option>
                    <option value="Doorbells & Cameras">Doorbells & Cameras</option>
                </select>
                </div>

            </div>
            <div class="col-sm-2 mt-2">
                <button class="fw-bold" @click="filter(products)">Filter</button>
            </div>
        </div>

        

    </div>
</template>
<script>
export default{
    data(){
        return{
            fCategory: null,
        }
    },
    computed: {
        products() {
            return this.$store.state.products;
        } 
    },
    methods:{
        filter(data){
           if(this.fCategory){
               const dt = data.filter(item => {
               if (item.Category == this.fCategory) {
                return item.Category
               }
            })
                console.log(dt);
                this.$emit("apply-filter", dt)
                
            }else {
               alert("Please choose a category you would like to filter by")
            }
            
        }
    },
    mounted() {
        this.$store.dispatch("getProducts");
    }
}

</script>
<style scoped>
select,label{
    font-family: 'REM', sans-serif;
}
select{
    width: 50%;
    border-radius: .5rem;
}
button{
    padding: .5rem;
    background:#2c3e50;
    color:#f3f2e9;
    border-radius: 1rem;
    font-family: 'REM', sans-serif;
}
button:hover{
  background: #f3f2e9;
  padding: 10px;
  color:#2c3e50
}
</style>