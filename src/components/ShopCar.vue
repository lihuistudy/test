<template>
    <ul>
        <li v-for="(value,index) in list">
            <Item v-bind:id="value.id" v-bind:name="value.name" v-bind:price="value.price" v-bind:num="value.num" @decClick="decClick" @addClick="addClick" @delClick="delClick"></Item>
        </li>
    </ul>
    
</template>

<script>
    import Item from './Item'
    export default {
        
        methods:{
            decClick(id){
                for(let itm of this.list){
                    if(id==itm.id){
                        itm.num--
                    }
                }
            },
            addClick(id){
                for(let itm of this.list){
                    if(id==itm.id){
                        itm.num++
                    }
                }
            },
            delClick(id){
                for(let i=0;i<this.list.length;i++){
                    if(this.list[i].id==id){
                        this.list.splice(i,1);
                    }
                }
            }
            
        },
        data(){
            return{
                list:[
                    {id:1,name:"洗衣机",price:4300,num:2},
                    {id:2,name:"冰箱",price:3280,num:4},
                    {id:3,name:"电磁炉",price:430,num:2},
                    {id:4,name:"烤箱",price:1200,num:5}

                ]
            }
        },
        components:{
            Item
        }
    }
</script>