export default ({ componentName, iconNode }) => {
  return `
import createIcon from '../create-icon';

const ${componentName} = createIcon('${componentName}', ${iconNode});

export default ${componentName};
`;
};
