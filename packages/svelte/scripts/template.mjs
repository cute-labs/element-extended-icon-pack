export default ({ componentName = "", iconNode, base64 }) => {
  return `
<script lang="ts">
/**
 * @preview ![img](${base64})
 */

import Icon from '../Icon.svelte';
import type { IconNode, IconProps } from '../types.js';

const props: IconProps = $props(); 

const iconNode: IconNode = ${iconNode};
</script>

<Icon {...props} {iconNode} />
`;
};
