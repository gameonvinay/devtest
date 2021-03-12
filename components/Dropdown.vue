<!-- This is custom and reusable select dropdown which accepts props to display dropdown data -->
<template>
  <div class="custom-select" :tabindex="tabindex" @blur="open = false">
    <div class="selected" :class="{ open: open }" @click="open = !open">
      {{ selected }}
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div
        v-for="(option, i) of options"
        :key="i"
        @click="
          selected = option
          open = false
          $emit('input', option)
        "
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    default: {
      type: String,
      required: false,
      default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      selected: this.default
        ? this.default
        : this.options.length > 0
        ? this.options[0]
        : null,
      open: false,
    }
  },
  mounted() {
    this.$emit('input', this.selected)
  },
}
</script>
<style lang="scss" scoped>
.custom-select {
  position: relative;
  width: 120px;
  text-align: left;
  outline: none;
  height: 32px;
  line-height: 32px;
}

.custom-select .selected {
  background-color: white;
  border-radius: 6px;
  color: #110f24;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .selected.open {
  border: none;
  border-radius: 6px 6px 0px 0px;
}

.custom-select .selected:after {
  position: absolute;
  content: '';
  top: 10px;
  right: 12px;
  width: 0;
  height: 0;
  border: solid #110f2466;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 4px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
.custom-select .items {
  color: #fff;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-radius: 6px 6px 6px 6px;
  overflow: hidden;
  position: absolute;
  background-color: #110f24;
  margin-top: 16px;
  top: 50;
  left: 0;
  right: 0;
  z-index: 1;
}

.custom-select .items div {
  color: #fff;
  padding: 0.5em 1em 0.5em 1em;
  cursor: pointer;
  user-select: none;
  font-size: 14px;
  line-height: 16px;
}

.custom-select .items div:hover {
  background-color: #575bde;
}

.selectHide {
  display: none;
}
</style>
