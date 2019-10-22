<template>
     <div class="w-full">
         <nav class="">
            <div class="bg-transparent border-b py-5">
                <a v-for="tab in tabs"
                   class="no-underline border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-6 mr-8"
                   :class="{ 'text-blue-600 active':tab.isActive, 'text-gray-600' :! tab.isActive}"
                   :href="tab.href" @click="selectTab(tab)"
                   :key="tab.name"
                >
                    {{ tab.name }}
                </a>
            </div>
            <div class="tabs-details py-8">
            <slot></slot>
        </div>
        </nav>
        
        
    </div>
</template>

<script>
export default {
    data() {
        return { tabs: []         
        };

    },
    created() {
        this.tabs = this.$children;
    },
    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.href == selectedTab.href);
            });
        }
    }
}
</script>

<style>

</style>