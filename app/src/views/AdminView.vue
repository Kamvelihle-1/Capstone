<template>
    <div class="admin">
        <UserAdminComp/>
        <ProdAdminComp/>
    </div>
</template>

<script>
import ProdAdminComp from '@/components/ProdAdminComp.vue';
import UserAdminComp from '@/components/UserAdminComp.vue';
    export default {
        components:{
            ProdAdminComp,
            UserAdminComp
        }
    }
</script>

<style scoped>

</style>