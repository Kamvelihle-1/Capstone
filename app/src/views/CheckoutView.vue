<template>
    <div class="checkout container-fluid justify-content-center pt-5">
        <div class="row mb-5 pt-5">
            <h2 class="display-2">Checkout</h2>
        </div>
        <div class="ck row  mt-5 pt-5 mx-0 ">
            <form class="form " @submit.prevent="output">
              <div class="payment--options">
                <button name="paypal" type="button">
             
                </button>
                <button name="apple-pay" type="button">
                
                </button>
                <button name="google-pay" type="button">
            
                </button>
              </div>
              <div class="separator">
                <hr class="line">
                <p>or pay using credit card</p>
                <hr class="line">
              </div>
              <div class="credit-card-info--form">
                <div class="input_container">
                  <label for="password_field" class="input_label">Card holder full name</label>
                  <input id="password_field" class="input_field" type="text" name="input-name" title="Inpit title" placeholder="Enter your full name" minlength="3">
                </div>
                <div class="input_container">
                  <label for="password_field" class="input_label">Card Number</label>
                  <input id="password_field" class="input_field" type="number" name="input-name" title="Inpit title" placeholder="0000 0000 0000 0000" minlength="16" maxlength="16">
                </div>
                <div class="input_container">
                  <label for="password_field" class="input_label">Expiry Date / CVV</label>
                  <div class="split">
                  <input id="password_field" class="input_field" type="text" name="input-name" title="Expiry Date" placeholder="01/23">
                  <input id="password_field" class="input_field" type="number" name="cvv" title="CVV" placeholder="CVV" minlength="3" maxlength="3">
                </div>
                </div>
              </div>
                <button class="purchase--btn submit" @click="output">Checkout</button>
            </form>
        </div>
            
    </div>
</template>

<script>
import { useCookies } from 'vue3-cookies';
const {cookies} = useCookies()
    export default {
        computed:{
          user() {
            return this.$store.state.user ||
            cookies.get("CurrentUser")
          },
          userId(){
            if(this.user?.result?.length>0){
                return this.user?.result[0].userID
            }else{
                return  cookies.get("CurrentUser")?.result[0].userID
            }
          }
        },
        methods:{
            output(){
                swal({
                    title: "Checkout",
                    text: "You have checked out",
                    icon: "success",
                    timer: 3000
                 })
                //  this.dispatch("deleteCart",this.userId)
            }
        }
        
    }
</script>

<style scoped>
.ck {
    width: fit-content;
    height: fit-content;
    background: #FFFFFF;
    box-shadow: 0px 187px 75px rgba(0, 0, 0, 0.01), 0px 105px 63px rgba(0, 0, 0, 0.05), 0px 47px 47px rgba(0, 0, 0, 0.09), 0px 12px 26px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
    border-radius: 26px;
    max-width: 450px;
   
  }
  
  .form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
  }
  
  .payment--options {
    width: calc(100% - 40px);
    display: grid;
    grid-template-columns: 33% 34% 33%;
    gap: 20px;
    padding: 10px;
  }
  
  .payment--options button {
    height: 55px;
    background: #F2F2F2;
    border-radius: 11px;
    padding: 0;
    border: 0;
    outline: none;
  }
  
  .payment--options button svg {
    height: 18px;
  }
  
  .payment--options button:last-child svg {
    height: 22px;
  }
  
  .separator {
    width: calc(100% - 20px);
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 10px;
    color: #8B8E98;
    margin: 0 10px;
  }
  
  .separator > p {
    word-break: keep-all;
    display: block;
    text-align: center;
    font-weight: 600;
    font-size: 11px;
    margin: auto;
  }
  
  .separator .line {
    display: inline-block;
    width: 100%;
    height: 1px;
    border: 0;
    background-color: #e8e8e8;
    margin: auto;
  }
  
  .credit-card-info--form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  .input_container {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  
  .split {
    display: grid;
    grid-template-columns: 4fr 2fr;
    gap: 15px;
  }
  
  .split input {
    width: 100%;
  }
  
  .input_label {
    font-size: 10px;
    color: #8B8E98;
    font-weight: 600;
  }
  
  .input_field {
    width: auto;
    height: 40px;
    padding: 0 0 0 16px;
    border-radius: 9px;
    outline: none;
    background-color: #F2F2F2;
    border: 1px solid #e5e5e500;
    transition: all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1);
  }
  
  .input_field:focus {
    border: 1px solid transparent;
    box-shadow: 0px 0px 0px 2px #242424;
    background-color: transparent;
  }
  
  .purchase--btn {
    height: 55px;
    background: #F2F2F2;
    border-radius: 11px;
    border: 0;
    outline: none;
    color: #ffffff;
    font-size: 13px;
    font-weight: 700;
    background: linear-gradient(180deg, #363636 0%, #1B1B1B 50%, #000000 100%);
    box-shadow: 0px 0px 0px 0px #FFFFFF, 0px 0px 0px 0px #000000;
    transition: all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1);
  }
  
  .purchase--btn:hover {
    box-shadow: 0px 0px 0px 2px #FFFFFF, 0px 0px 0px 4px #0000003a;
  }
  
  /* Reset input number styles */
  .input_field::-webkit-outer-spin-button,
  .input_field::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  /*.input_field[type=number]{
   -moz-ap: textfield;
  } */
</style>