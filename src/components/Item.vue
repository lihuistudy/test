<template>
    <div>
        <label>{{name}}</label>
        <label>{{price}}</label>
        <button @click="dec">-</button>
        <label>{{num}}</label>
        <button @click="add">+</button>
        <label>{{price*num}}</label>
        <label @click="del">删除</label>
        
    </div>
    
</template>

<script>
    export default {
        
        props:["name","price","num","id"],
        methods:{
            dec(){
                console.log(this)
                this.$emit("decClick",this.id)
            },
            add(){
                this.$emit("addClick",this.id)
            },
            del(){
                this.$emit("delClick",this.id)
            }
        },

    }
</script>