<template>
    <div>

    </div>
</template>

<script>
    export default {
        computed:{
            user(){
                return this.$store.state.user
            }
        },
        mounted(){
            this.$store.dispatch("getUser",id)
        },
        methods: {
            logOut() {
              this.$store.dispatch('logOut')
            }
    },
    }
</script>

<style scoped>

</style>