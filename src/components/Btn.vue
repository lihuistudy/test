<template>
    <button @click="click">{{name}}</button>
    
</template>

<script>
    export default {
        
        props:["name"],
        methods:{
            click(){
                this.$emit("click")
            }
        }
    }
</script>