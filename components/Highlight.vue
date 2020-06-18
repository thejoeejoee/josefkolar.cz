<template>
    <client-only
    ><span
            v-observe-visibility="{once: true, throttle: 400, callback: changed}"
    ><RoughNotation
            :type="type"
            :color="color"
            :animate="true"
            :strokeWidth="2"
            :is-show="is"
    ><slot name="default"></slot></RoughNotation></span></client-only>
</template>

<script>
    import _ from 'lodash'

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
                color: _.sample([
                    '#4a148c', '#8D0981', '#637B00', '#807600'
                ]),
                type: _.sample([
                    'box', 'box'// , 'circle'
                ]),
            }
        }
    }
</script>

<style scoped>

</style>
