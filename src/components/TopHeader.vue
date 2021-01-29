<template>
    <h1> {{ header }} </h1>
</template>

<script>
export default {
    props: {
        header: {
            type: String,
            requierd: true
        }
    }
}
</script>

<style scoped lang="scss">

</style>