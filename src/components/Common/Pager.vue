<template>
	<div>
		<div class="block">
		  <el-pagination
		  	@current-change="handleCurrentChange"
		    layout="total, prev, pager, next, jumper"
		    :page-size="size"
		    :total="total">
		  </el-pagination>
		</div>
		<!-- <div class="block">
    <span class="demonstration">显示总数</span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"

      :page-size="100"
      layout="total, prev, pager, next"
      :total="1000">
    </el-pagination>
  </div> -->
	</div>
</template>

<script>
	export default {
		props: ['total', 'size'],
		data () {
			return {
				// total: 423,
			}
		},
		methods: {
      handleCurrentChange(val) {
        // console.log(`当前页: ${val}`)
        this.$emit('pageNumber', val)
      }
    },
	}
</script>