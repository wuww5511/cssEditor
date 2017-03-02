<template>
    <div class="panel">
        <div class="panel__eles">
            <Tree  :data="tree"></Tree>
        </div>
        <div class="panel__controls">
            <button @click="$store.commit('addNode')">Add</button>
            <button @click="$store.commit('deleteNode')">Delete</button>
            <button @click="undo()">undo</button>
            <button @click="redo()">redo</button>
        </div>
    </div>
</template>
<script>
    import {node2state} from '@/util/tree'
    import Tree from '@/components/Tree'
    import {redo, undo} from '@/util/action'
    
    export default {
        data: function () {
            return {
                
            }
        },
        
        methods: {
            redo,
            undo
        },
        
        computed: {
            tree: function () {
                var res = [node2state(this.$store.state.ele.tree.head)];
                return res;
            }
        },
        
        components: {
            Tree
        }
    }
</script>
<style>
    .panel{
        position: absolute;
        top: 50px;
        right: 0;
        width: 280px;
        bottom: 0;
        background: #776a6a;
    }
    .panel__eles{
        position: absolute;
        top: 0;
        bottom: 50px;
        left: 0;
        right: 0;
    }
    .panel__controls{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0px;
        height: 50px; 
    }
</style>
