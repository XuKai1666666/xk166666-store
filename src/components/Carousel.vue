<template>
    <a-carousel arrows autoplay>
        <template #prevArrow>
            <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
                <left-circle-outlined />
            </div>
        </template>
        <template #nextArrow>
            <div class="custom-slick-arrow" style="right: 10px">
                <right-circle-outlined />
            </div>
        </template>
        <div v-for="banner in banners" :name=banner.name :url=banner.url>
            <img :src=banner.url :alt=banner.name height="480"/>
        </div>
    </a-carousel>
</template>
<script lang="ts" setup>
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';

const banners = [
    { name: 'one', url: '../../src/assets/image/banner/1.jpg' },
    { name: 'two', url: '../../src/assets/image/banner/2.jpg' },
    { name: 'three', url: '../../src/assets/image/banner/3.jpg' },
    { name: 'four', url: '../../src/assets/image/banner/4.jpg' },
];
</script>
<style scoped>
/* For demo */
.ant-carousel :deep(.slick-slide) {
    text-align: center;
    height: 480px;
    line-height: 480px;
    background: #364d79;
    overflow: hidden;
}

.ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
    width: 25px;
    height: 25px;
    font-size: 25px;
    color: #fff;
    background-color: rgba(31, 45, 61, 0.11);
    opacity: 0.3;
    z-index: 1;
}

.ant-carousel :deep(.custom-slick-arrow:before) {
    display: none;
}

.ant-carousel :deep(.custom-slick-arrow:hover) {
    opacity: 0.5;
}

.ant-carousel :deep(.slick-slide h3) {
    color: #fff;
}
</style>