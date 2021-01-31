<script>
export default {
  name: 'VStyle',
  functional: true,
  render(createElement, context) {
    return createElement('style', context.data, context.children)
  },
}
</script>
