<template>
    <div id="app">
        <NavBar></NavBar> 
        <Board></Board>
        <Panel></Panel>
    </div>
</template>

<script>
    import Board from '@/components/Board'
    import NavBar from '@/components/Nav'
    import Panel from '@/components/Panel'

    export default {
        name: 'app',
        components: {
            Board,
            NavBar,
            Panel
        }
    }
</script>

<style>
    #app {}
</style>
