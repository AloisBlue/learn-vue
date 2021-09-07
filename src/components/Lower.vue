<template>
    <div>
        <div class="buttons">
            <button @click="$store.dispatch('decreaseCounter')">-</button>
            <button @click="$store.dispatch('increaseCounter')">+</button>
            </div>
            <div class="inputs">
            <input
                v-model="colorCode"
                placeholder="Enter color code"
                type="text"
            />
            </div>
    </div>
</template>

<script>
export default {
    name: 'Lower',
     computed: {
        colorCode: {
            get() {
                return this.$store.state.colorCode;
            },
            set(newValue) {
                return this.$store.dispatch('setColorCode', newValue)
            }
        }
    },
}
</script>

<style>
    
</style>