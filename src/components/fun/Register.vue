<template>
    <form>
        <div>
                <label>用户名：</label>
                <input ref="acc" type="text">
        </div>
        <div>
                <label>密码：</label>
                <input ref="pwd" type="password">
        </div>
        <div>
                <label>手机号：</label>
                <input ref="phone" type="text">
        </div>
        <button @click="reg" >注册</button>
    </form>
</template>

<script>
   import axios from 'axios';
   export default {
       methods:{
           reg(){
               console.log(this.$refs)

               axios.post('http://127.0.0.1:3000/reg',{
                   acc:this.$refs.acc.value,
                   pwd:this.$refs.pwd.value,
                   phone:this.$refs.phone.value
               }).then(()=>{
                   
               })
               this.$router.push("login")

           }
       }
       
   }
</script>