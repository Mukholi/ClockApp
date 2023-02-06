<template>
    <div class="nav-bar-cont themeColorQuoter">
        <div class="nav-bar">
            <nav>
                <router-link to="/clock" class="router-link">Clock</router-link>
                <router-link to="/alarm" class="router-link">alarm</router-link>
                <router-link to="/timer" class="router-link">Timer</router-link>
                <router-link to="/stopwatch" class="router-link">Stopwatch</router-link>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppNavigation',
    props:['themeColor'],
}
</script>

<style>
.nav-bar-cont{
    position: fixed;
    bottom: 0px;
    left: 0px;
    z-index: 100;
    width: 100vw;
    height: 2cm;
    /* background: yellow; */
}
.nav-bar{
    position: relative;
    width: 100%;
    padding-top: 0.7cm;
}
.nav-bar nav{
    position: relative;
    display: flex;
    width: 100vw;
    padding: 0px;
}
.router-link{
    font-family: 'Poppins';
    font-size: 0.7em;
    position: relative;
    display: block;
    background: transparent;
    border-radius: 100cm;
    padding: 10px 15px;
    color: black;
    text-decoration: none;
    outline: none;
    text-transform: capitalize;
}
.router-link:nth-child(1){
    margin-left: auto;
}
.router-link:nth-last-child(1){
    margin-right: auto;
}
.router-link-active{
    border-radius: 100cm;
    padding: 10px 15px;
    color: white;
    font-weight: 900;
}
</style>