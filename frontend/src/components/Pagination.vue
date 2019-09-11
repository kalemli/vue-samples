<template>
  <ul class="pagination" :class="{ 'pagination-sm': (size == 'small') }">
    <li class="page-item" :class="{ disabled: pageIndex == 1 }">
      <a class="page-link" href="#" aria-label="Previous" @click="prevClicked">
        <span aria-hidden="true">&laquo;</span>
        <span class="sr-only">Previous</span>
      </a>
    </li>
    <li class="page-item" :class="{ active: i == pageIndex }"
        v-for="i in pageCount" :key="i">
        <a class="page-link" href="#" @click="$emit('change', i)">
            {{i}} <span class="sr-only" v-if="i == pageIndex">(current)</span>
        </a>
    </li>
    <li class="page-item" :class="{ disabled: pageIndex == pageCount }">
      <a class="page-link" href="#" aria-label="Next" @click="nextClicked">
        <span aria-hidden="true">&raquo;</span>
        <span class="sr-only">Next</span>
      </a>
    </li>
  </ul>    
</template>

<script>
export default {
    name: 'Pagination',
    props: ['pageCount', 'pageIndex', 'size', 'numberCount' ],
    data() {
        return {
            
        }
    },
    methods: {
        nextClicked() {
            var index = this.pageIndex + 1;
            if (index > this.pageCount) index = 1;
            this.$emit('change', index);
        },
        prevClicked() {
            var index = this.pageIndex - 1;
            if (index < 1) index = this.pageCount;
            this.$emit('change', index);
        }
    }
}
</script>