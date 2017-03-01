<style> 
    .tree .el-tree-node.is-expanded > .el-tree-node__children{
        height: auto;
    }
    .tree .el-tree-node__children{
        height: 0px;
    }
    .tree .el-tree-node.is-current > .el-tree-node__content{
        background: #e4e8f1;
        cursor: default;
    }
    .tree .el-tree-node__content{
        cursor: pointer;
    }
</style>
<template>
    <div :class="{'el-tree-node': true, 'is-expanded': isExpand, 'is-current': active}">
        <div @click="$store.commit('updateActive', data.id);" class="el-tree-node__content" :style="{'padding-left': level * 16 + 'px'}">
            <span v-if="data.children.length > 0" :class="{'el-tree-node__expand-icon': true, 'expanded': isExpand}" @click="toggle"></span>
            <span v-else style="margin-left: 32px"></span>
            <div class="el-tree-node__label">{{data.label}}</div>
        </div>
        <div class="el-tree-node__children">
            <TreeNode :level="level + 1" :key="child.id" v-for="child in data.children" :data="child"></TreeNode>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'TreeNode',
        
        data: function () {
            return {
                isExpand: true
            }
        },
        
        props: {
            data: {
                type: Object,
                default: () => {
                    return {
                        label: '',
                        children: [],
                        id: ''
                    };
                }
            },
            level: Number
        },
        
        methods: {
            toggle: function () {
                this.isExpand = !this.isExpand;
            }
        },
        
        computed: {
            active: function () {
                return this.$store.state.ele.active.content.id == this.data.id;
            }
        }
    }
</script>