export default ({ componentName, iconNode }) => {
  return `
import crateIcon from '../create-icon';

const ${componentName} = createIcon('${componentName}', ${iconNode});

export default ${componentName};
`;
};
