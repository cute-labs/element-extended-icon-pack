export default ({ componentName, iconNode, base64 }) => {
  return `
/**
 * @preview ![img](${base64})
 */

import createIcon from '../create-icon';

const ${componentName} = createIcon('${componentName}', ${iconNode});

export default ${componentName};
`;
};
