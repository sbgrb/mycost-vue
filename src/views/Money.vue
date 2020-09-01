<template>
    <Layout class-prefix="layout">
        <NumberPad @update:value='onUpdateAmount' @submit="saveRecord"/>
        <!--        <Types :value.sync="record.type"  />-->
        <Tabs :data-source="recordTypeList" :value.sync="record.type"/>
        <div class="notes">
            <FormItem field-name="备注" placeholder="在这里输入备注" :value.sync="record.notes"/>
        </div>
        <Tags @update:value="record.tags = $event"/>
    </Layout>
</template>

<script lang="ts">
    import Vue from "vue";
    import Tags from "@/components/Money/Tags.vue";
    import NumberPad from "@/components/Money/NumberPad.vue";
    import {Component} from "vue-property-decorator";
    import FormItem from "@/components/Money/FormItem.vue";
    import typeList from "@/consts/typeList";
    import Tabs from "@/components/Tabs.vue";

    // window.localStorage.setItem('version', '0.0.1');

    @Component({components: {Tabs, Tags, FormItem, NumberPad}})
    export default class Money extends Vue {
        get recordList() {
            return this.$store.state.recordList
        }

        recordTypeList = typeList
        record: RecordItem = {tags: [], notes: '', type: '-', amount: 0};

        created() {
            this.$store.commit('fetchRecords')
        }

        onUpdateNotes(value: string) {
            this.record.notes = value
        }

        onUpdateAmount(value: string) {
            this.record.amount = parseFloat(value)
        }

        saveRecord() {
            if (!this.record.tags || this.record.tags.length === 0) {
                return window.alert('请至少选择一个标签')
            }
            this.$store.commit('createRecord', this.record)
            if (this.$store.state.creatRecordError === null) {
                window.alert('保存成功')
                this.record.notes = ''
                this.record.tags = []
            }

        }

    }
</script>
<style lang="scss" scoped>
    ::v-deep .layout-content {
        display: flex;
        flex-direction: column-reverse;
    }

    .notes {
        padding: 12px 0;
    }
</style>

