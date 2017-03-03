<template>
    <div class="panel">
        <div class="panel__head">
            <div @click="active = tab.id" :class="{tab:true, cb:true, active: active == tab.id}" v-for="tab in tabs">{{tab.name}}</div>
        </div>
        <div class="panel__body">
            <ElementPanel v-if="active == 0"></ElementPanel>
            <ClassPanel v-if="active == 1"></ClassPanel>
        </div>
    </div>
</template>
<style>
    .tab{
        float: left;
        padding: 0 10px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        cursor: pointer;
    }
    .tab.active{
        color: #fff;
        cursor: default;
    }
    .panel{
        position: absolute;
        top: 50px;
        right: 0;
        width: 280px;
        bottom: 0;
        background: #776a6a;
    }
    .panel__head{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 50px;
    }
    .panel__body{
        position: absolute;
        top: 50px;
        left: 0;
        right: 0;
        bottom: 0;
    }
</style>
<script>
    import ElementPanel from "@/components/ElementPanel"
    import ClassPanel from "@/components/ClassPanel"
    
    export default {
        name: "Panel",
        data: function () {
            return {
                tabs: [
                    {id: 0, name: "Element"},
                    {id: 1, name: "Class"}
                ],
                active: 0
            };
        },
        components: {
            ElementPanel,
            ClassPanel
        }
    }
</script>