export default ({ componentName, iconNode, base64 }) => {
  return `
/**
 * @preview ![img](${base64})
 */

import createIcon from '../create-icon';

const ${componentName} = createIcon(${iconNode});

export default ${componentName};
`;
};
