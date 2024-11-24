const t=`<template>
    <div class="rect"></div>
</template>
<style>
.rect {
    width: 300px;
    height: 300px;
    background: linear-gradient(to left, #196aa8, #196aa8) left top no-repeat,
        linear-gradient(to bottom, #196aa8, #196aa8) left top no-repeat,
        linear-gradient(to left, #196aa8, #196aa8) right top no-repeat,
        linear-gradient(to bottom, #196aa8, #196aa8) right top no-repeat,
        linear-gradient(to left, #196aa8, #196aa8) left bottom no-repeat,
        linear-gradient(to bottom, #196aa8, #196aa8) left bottom no-repeat,
        linear-gradient(to left, #196aa8, #196aa8) right bottom no-repeat,
        linear-gradient(to left, #196aa8, #196aa8) right bottom no-repeat;
    background-size: 1px 20px, 20px 1px, 1px 20px, 20px 1px;
}
</style>`;export{t as default};
