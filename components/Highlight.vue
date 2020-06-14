<template>
    <client-only
    ><span
            v-observe-visibility="{once: true, throttle: 300, callback: changed}"
    ><RoughNotation
            type="box"
            color="#4A148C"
            :animate="true"
            :strokeWidth="2"
            :is-show="is"
    ><slot name="default"></slot></RoughNotation></span></client-only>
</template>

<script>
    export default {
        name: "Highlight",
        methods: {
            changed(is, entry) {
                this.is = is;
            }
        },
        data() {
            return {
                is: false,
            }
        }
    }
</script>

<style scoped>

</style>
