<template>
    <Layout>
        <Tabs class-prefix="type" :data-source="recordTypeList" :value.sync="type"/>
        <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component} from "vue-property-decorator";
    import Tabs from "@/components/Tabs.vue";
    import intervalList from "@/consts/intervalList";
    import typeList from "@/consts/typeList";

    @Component(
        {components: {Tabs}}
    )
    export default class Statistics extends Vue {
        type = '-';
        interval = 'day';
        intervalList = intervalList
        recordTypeList = typeList;
    }
</script>

<style scoped lang="scss">
    ::v-deep{
        .type-tabs-item {
            background: white;

            &.selected {
                background: #c4c4c4;
                &::after {
                    display: none;
                }
            }
        }
        .interval-tabs-item{
            height: 48px;
        }
    }
</style>