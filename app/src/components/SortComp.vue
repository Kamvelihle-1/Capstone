<template>
    <div class="col">
        <div class="row">
            <div class="col-sm-4">
                <div class="row">
                    <label for="Names" class="my-1">Sort by: </label>
                </div>
                <div class="row justify-content-center">
                    <select v-model="sName" id="pName" name="Names">
                        <option value="Price">Price</option>
                        <option value="Name">Name</option>
                    </select>
                </div> 
            </div>
            <div class="col-sm-4">
                <div class="row">
                    <label for="AscDesc" class="my-1">Ascending/Descending</label>
                </div>
                <div class="row justify-content-center">
                    <select v-model="sDirection" id="sName" name="AscDesc">
                        <option value="Descending">Descending</option>
                        <option value="Ascending">Ascending</option>
                    </select>
                </div> 
            </div>
            <div class="col-sm-2 mt-2">
                <button class="fw-bold" @click="sortData(products)">Sort</button>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            sName: null,
            sDirection:null
        }
    },
    computed: {
        products() {
            return this.$store.state.products;
        }
        
    },
    methods:{ 
        sortData(){
            const sData =[...this.products]
            if (this.sName == "Price") {
                if(this.sDirection =="Descending"){
                    sData.sort((a,b)=>
                    b.Price - a.Price)
      
                    this.$emit("apply-sort", sData)
                }else if(this.sDirection =="Ascending"){
                 sData.sort((a,b)=>
                        a.Price - b.Price 
                    )
                    console.log(sData);
                    this.$emit("apply-sort", sData)
                }
            } else if(this.sName == "Name") {
                if(this.sDirection =="Descending"){
                    sData.sort((a,b)=>
                    b.prodName.localeCompare(a.prodName))
      
                    this.$emit("apply-sort", sData)
                }else if(this.sDirection =="Ascending"){
                 sData.sort((a,b)=>
                 a.prodName.localeCompare(b.prodName)
                    )
                    console.log(sData);
                    this.$emit("apply-sort", sData)
                }
            }
           
            
           
         
        } 
    },
    mounted() {
        this.$store.dispatch("getProducts");
    }

}

</script>
<style scoped>
select{
    width: 50%;
}
button{
    padding: 0.5rem;
    background:#2c3e50;
    color:white;
    border-radius: 1rem;
    font-family: 'REM', sans-serif;
}
button:hover{
  background: #f1d7b7;
  padding: 1rem;
  color:#2c3e50
}
</style>