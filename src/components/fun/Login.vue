<template>
    <form>
        <div>
            <label for="">用户名：</label>
            <input ref="acc" type="text">
        </div>
        <div>
            <label for="">密码：</label>
            <input ref="pwd" type="password">
        </div>
        <button @click="login">登录</button>
    </form>

</template>

<script>

    import axios from 'axios';
    export default {
        methods:{
            login(){
                console.log(this.$refs)

                axios.post('http://127.0.0.1:3000/login',{
                    acc:this.$refs.acc.value,
                    pwd:this.$refs.pwd.value

                }).then((msg)=>{
                    console.log(msg)
                    console.log(this.$router)
                    if(msg.data=="ok"){
                        this.$router.push("main")
                    }
                })
            }
        }
        
    }

</script>