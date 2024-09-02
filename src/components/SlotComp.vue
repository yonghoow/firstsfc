<template>
    <slot 
        name="leftSlot"
        :text="leftText">
    </slot>
    <slot
        name="rightSlot"
        :text="rightText">
    </slot>
</template>

<script>
    export default {
        data() {
            return {
                leftText: 'This text belongs to the LEFT slot.',
                rightText: 'This text belongs to the RIGHT slot.'
            }
        }
    }
</script>

<style></style>