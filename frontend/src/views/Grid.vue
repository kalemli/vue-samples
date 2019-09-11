<template>
    <div>
        <Pagination 
            size="small"
            :pageCount="10" 
            :numberCount="7"
            :pageIndex="pageIndex" 
            @change="pageChange"
        ></Pagination>
    </div>
</template>

<script>
import Pagination from '@/components/Pagination'

export default {
    name: 'Grid',
    components: { Pagination },
    data() {
        return {
            pageIndex: 1
        }
    },
    methods: {
        pageChange(index) {
            this.pageIndex = index
        }
    }
}
</script>