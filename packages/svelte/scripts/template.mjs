export default ({ componentName = "", iconNode }) => {
  return `
<script lang="ts">
import Icon from '../Icon.svelte';
import type { IconNode, IconProps } from '../types';

const props: IconProps = $props(); 

const iconNode: IconNode = ${iconNode};
</script>

<Icon {...props} {iconNode} />
`;
};
