<template>
  <table>
    <tr>
      <th v-for="(cell, index) in header" 
          :key="cell.id"
          :class="['cell-' + (index + 1), (rightAlignedColumns.includes(index) ? 'text-right' : '' )]" >
          {{ cell }}
      </th>
    </tr>
    <tr v-for="(row, index) in body" 
        :key="row.id"
        :class="['row-' + (index + 1)]" >
      <td v-for="(cell, index) in row" 
          :key="cell.id"
          :class="[
            'cell-' + (index + 1),
            (grayColumns.includes(index) ? 'gray-cell' : '' ),
            (rightAlignedColumns.includes(index) ? 'text-right' : '' )]" >
          {{ cell }}
      </td>
    </tr>
  </table>
</template>

<script>
  export default {
    props: {
      header: {
        type: Array,
        default: () => []
      },
      body: {
        type: Array,
        default: () => [
          []
        ]
      },
      grayColumns: {
        type: Array,
        default: () => [
          []
        ]
      },

      rightAlignedColumns: {
        type: Array,
        default: () => [
          []
        ]
      }
    }
  }
</script>

<style scoped lang="scss">

table {
    width: 100%;
    border-collapse: collapse;
    font-size: 1.25rem;

    @include breakpoint(small only) {
      @include table-scroll;
    }

    @include breakpoint(medium) {
      font-size: 18px;
    }

    tr { 
      height: 60px;      

      td, th {
        border-bottom: 2px solid #B9BFC2;
        padding: 2px 20px 0;
        max-width: 280px;
        font-weight: bold;
        text-align: left;
      }
      
      th {
        background: $grey-bg;
      }

      td {
        height: 59px;
        padding-top: 9px;
        padding-bottom: 9px;
      }

      .gray-cell {
        font-size: 1rem;
        color: $gray;
        font-weight: normal;
      }

      .text-right {
        padding-right: 40px;
        padding-left: 0;
        text-align: right;
      }
    }
  }
</style>