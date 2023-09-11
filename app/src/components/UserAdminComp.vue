<template>
  <div class="containter-fluid">
    <div v-if="users">
      <div class="container">
        <div class="row table-container">
          <div class="col-12">
            <h1>Users</h1>
           <AddUserComp/>
          </div>
          <div class="col ">
            <div class="userTable">
            <table
              class="table is-striped is-bordered mt-2 is-fullwidth array-lists"
            >
              <thead>
                <tr>
                  <th>#</th>
                  <th>FullName</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Age</th>
                  <th>Role</th>
                  <th>Image</th>
                  <th>Edit/Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in users" :key="user.userID" class="bord">
                  <td>{{ user.userID }}</td>
                  <td>{{ user.Fullname }}</td>
                  <td>{{ user.emailAdd }}</td>
                  <td>{{ user.Gender }}</td>
                  <td>{{ user.Age }}</td>
                  <td>{{ user.userRole }}</td>
                  <td><img class="tableImg" :src="user.userImg" alt="" /></td>
                  <td>
                    <button type="button" class="btn btn-primary" @click="setId(user.userID)" data-bs-toggle="modal" data-bs-target="#Update" data-bs-whatever="@mdo">Update</button>
                    <button type="button" class="btn btton" @click="deleteUser(user.userID)" data-bs-toggle="modal" data-bs-target="#exampleModal" id="delete-row" >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </div>
        <div class="modal fade" id="Update" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Add user</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" @submit.prevent="updateUser">
              <form>
                <div class="mb-3">
                  <label for="Firstname" class="col-form-label">First name:</label>
                  <input type="text"  v-model="data.firstName" class="form-control" id="Firstname"  placeholder="FirstName" required>
                </div>
                <div class="mb-3">
                  <label for="Surname" class="col-form-label">Last name:</label>
                  <input type="text"  v-model="data.lastName" class="form-control" id="Surname"  placeholder="Surname" required>
                </div>
                <div class="mb-3">
                  <label for="Email" class="col-form-label">Email:</label>
                  <input type="email"  v-model="data.emailAdd" class="form-control" id="Email"  placeholder="Email" required>
                </div>
                <div class="mb-3">
                  <label for="gender" class="col-form-label">Gender:</label>
                  <input type="text"  v-model="data.Gender" class="form-control" id="gender"  placeholder="Gender" required>
                </div>
                <div class="mb-3">
                  <label for="age" class="col-form-label">Age:</label>
                  <input type="text"  v-model="data.Age" class="form-control" id="age"  placeholder="Age" required>
                </div>
                <div class="mb-3">
                  <label for="Role" class="col-form-label">Role:</label>
                  <input type="text"  v-model="data.userRole" class="form-control" id="Role"  placeholder="Role" required>
                </div>
                <div class="mb-3">
                  <label for="password" class="col-form-label">Password:</label>
                  <input type="password"  v-model="data.userPwd" class="form-control" id="password"  placeholder="Password" required>
                </div>
                <div class="mb-3">
                  <label for="image" class="col-form-label">Your image:</label>
                  <input type="text"  v-model="data.userImg" class="form-control" id="image"  placeholder="Image url" required>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button class="btn btn-success mt-3"  type="submit" @click="updateUser" data-bs-dismiss="modal">Update user </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    <div v-else>
      <SpinnerComp/>
    </div>
  </div>
  </template>
  <script>
   import AddUserComp from './AddUserComp.vue';
  import SpinnerComp from './SpinnerComp.vue';
  export default {
      components:{
        AddUserComp,
        SpinnerComp
      },
      data(){
            return{
              payload:{},
              userID:null,
              data:{
                firstName:"",
                lastName:"",
                Age:null,
                Gender:"",
                userRole:"",
                emailAdd:"",
                userPwd:"",
                userImg:""
              }
              
            }
      },
      computed: {
          users() {
              return this.$store.state.users
          },
        preFilledItem() {
          return this.users.find(user => user.userID == this.userID) || {};
         }
      },
      mounted() {
          this.$store.dispatch("getUsers")
      },
      watch: {
          userID() {
            this.data.firstName = this.preFilledItem.Fullname.split(" ")[0]
            this.data.lastName = this.preFilledItem.Fullname.split(" ")[1]
            this.data.Age =this.preFilledItem.Age
            this.data.Gender = this.preFilledItem.Gender
            this.data.userRole =this.preFilledItem.userRole
            this.data.emailAdd = this.preFilledItem.emailAdd
            this.data.userPwd = this.preFilledItem.userPwd 
            this.data.userImg= this.preFilledItem.userImg
          }
        },
      methods:{
        setId(x){
          this.userID =x
        },
        updateUser(){
          this.payload.data = this.data
          this.payload.userID =this.userID
          this.$store.dispatch("updateUser",this.data)
        },
        deleteUser(X){
          this.$store.dispatch("deleteUser",X)
        } 
      }
     
  }
  </script>
  
  <style scoped>
  button{
    margin: 0.5rem;
    padding: 0.5rem;
    background:#2c3e50;
    color:white;
    border-radius: 1rem;
    font-family: 'REM', sans-serif;
}
button:hover{
  background: #f1d7b7;
  color:#2c3e50
}
  .tableImg {
      width: 120px;
      height: auto;
  }
  table{
    width: 90%;
  }
  .userTable{
  overflow-x: scroll;
  padding: 2rem;
  max-width: 100%;
}
  </style>