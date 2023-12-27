export default ({ componentName = "", iconNode }) => {
  return `
<script lang="ts">
import Icon from '../Icon.svelte';
import type { IconNode, IconProps } from '../types';

type $$Props = IconProps

const iconNode: IconNode = ${iconNode};
</script>

<Icon {...$$props} {iconNode} />
`;
};
