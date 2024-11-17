<template>
    <div style="margin-top: 24px">
        <Giscus
            id="comments"
            repo="ddcheng2017/ddcheng2017.github.io"
            repoid="MDEwOlJlcG9zaXRvcnkxNzk4MjI4MzA="
            category="Announcements"
            categoryid="DIC_kwDOCrfg7s4CkV5O"
            mapping="title"
            term="说点什么..."
            reactionsenabled="1"
            emitmetadata="0"
            inputposition="top"
            loading="lazy"
            :theme="isDark ? 'dark' : 'light'"
            :key="route.path"
        ></Giscus>
    </div>
</template>

<script setup>
import Giscus from '@giscus/vue';
import { useRoute, useData } from 'vitepress';

const route = useRoute();
const { isDark } = useData();
</script>