export default ({ componentName, iconNode }) => {
  return `
import Icon from '../Icon'
import type { IconProps, IconNode } from '../Icon'

const iconNode: IconNode = ${iconNode}

const ${componentName} = (props: IconProps) => (
  <Icon {...props} iconNode={iconNode} />
)

export default ${componentName};
  `;
};
