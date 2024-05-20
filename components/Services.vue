<!-- components/Services.vue -->
<template>
    <section id="services">
        <h2>Our Services</h2>
        <ExpandableSection title="Management">
            <ul>
                <li>
                    Full property management services, including tenant
                    screening, rent collection, and handling maintenance
                    requests.
                </li>
                <li>
                    Preparing and staging apartments for viewings and new
                    tenants.
                </li>
            </ul>
        </ExpandableSection>
        <ExpandableSection title="Cleaning">
            <p>
                Full property management services, including tenant screening,
                rent collection, and handling maintenance requests.
            </p>
        </ExpandableSection>
    </section>
</template>
<style scoped>
@import "../assets/styles/services.css";
</style>

<script>
import ExpandableSection from "@/components/ExpandableSection.vue";

export default {
    components: {
        ExpandableSection,
    },
};
</script>
