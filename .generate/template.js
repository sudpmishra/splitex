exports.component = name => `import React from 'react';
import './${name}.scss';

const ${name} = () => {
  return (
    <></>
  );
};
export default ${name};`;


exports.service = () => 'export default {};';