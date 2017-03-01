<template>
    <div class="el-tree tree">
        <TreeNode @change="onChange" :key="item.id" v-for="item in data" :data="item" :level="0"></TreeNode>
    </div>
</template>
<script>
    import TreeNode from './TreeNode'
    export default {
        props: {
            data: {
                type: Array,
                default: () => {
                    return [{
                        label: "",
                        children: [],
                        id: ""
                    }];
                }
            }
        },
        
        methods: {
            onChange: function (id) {
                this.$emit('change', id);
            }
        },
        
        components: {
            TreeNode
        }
    }
</script>