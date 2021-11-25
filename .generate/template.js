exports.component = name => `import React from 'react';
import './${name}.css';

const ${name} = () => {
  return (
    <></>
  );
};
export default ${name};`;


exports.service = () => 'export default {};';