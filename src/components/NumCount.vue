<template>
    <div>
        <Btn @click="dec" name="-" />
        <label>{{count}}</label>
        <Btn @click="add"name="+" />
    </div>

</template>

<script>
    import Btn from './Btn.vue';
    export default {

        props: ["name"],
        methods: {
            dec(){
                this.count--;
            },
            add(){
                this.count++;
            },
        },
        data() {
            return {
                count: 0
            }
        },
        components: {
            Btn
        }

    }

</script>