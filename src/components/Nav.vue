<template>
    <nav>
        <router-link to="/money" class="item" active-class="selected">
            <Icon name="money"/>
            记账
        </router-link>
        <router-link to="/labels" class="item" active-class="selected">
            <Icon name="labels"/>
            标签
        </router-link>
        <router-link to="/statistics" class="item" active-class="selected">
            <Icon name="statistics"/>
            统计
        </router-link>
    </nav>
</template>

<script lang="ts">
    export default {
        name: "Nav"
    };
</script>

<style lang="scss" scoped>

    nav {
        display: flex;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
        flex-direction: row;

        > .item {
            display: flex;
            width: 33.33333%;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            .icon {
                height: 32px;
                width: 32px;
            }
        }
        > .item.selected{
            background: gainsboro;
            color: red;
        }
    }
</style>