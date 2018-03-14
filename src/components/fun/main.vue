<template>
    <div class="all">
        <li>
            <router-link to="/main/a1">添加申请列表</router-link>
        </li>
        <li>
            <router-link to="/main/a2">申请列表</router-link>

        </li>
        <li>
            <router-link to="/main/a3">好友列表</router-link>
        </li>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {

    }

</script>


<style scoped>
.all{
    width: 300px;
    float: left
}

</style>