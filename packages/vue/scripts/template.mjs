export default ({ componentName, iconNode }) => {
  return `
import createIcon from '../create-icon';

const ${componentName} = createIcon(${iconNode});

export default ${componentName};
`;
};
