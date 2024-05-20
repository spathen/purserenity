<!-- components/ExpandableSection.vue -->
<template>
    <div class="expandable-section">
        <div class="header" @click="toggle">
            <h3>{{ title }}</h3>
            <button class="toggle-button" :class="{ open: isOpen }">
                <span v-if="!isOpen">&#9654;</span>
                <span v-else>&#9660;</span>
            </button>
        </div>
        <div v-if="isOpen" class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            isOpen: false,
        };
    },
    methods: {
        toggle() {
            this.isOpen = !this.isOpen;
        },
    },
};
</script>

<style scoped>
.expandable-section {
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
    margin-left: 5%;
    margin-right: 5%;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75em;
    background-color: #f4f4f4;
    cursor: pointer;
    font-size: 1.3em;
}

.toggle-button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    padding: 0;
    transform: rotate(90deg);
    transition: transform 0.2s ease;
}

.toggle-button.open {
    transform: rotate(-180deg);
}

.content {
    padding: 10px;
    border-top: 1px solid #ccc;
}
</style>
