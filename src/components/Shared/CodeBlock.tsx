import { useEffect } from 'react';

import Prism from 'prismjs';
import 'prismjs/components/prism-bash'
import 'prismjs/themes/prism-twilight.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

const CodeBlock = ({ code, language }: {code: any, language: any}) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [code, language]);

  return (
    <pre className='line-numbers'>
      <code className={`language-${language}`}>
        {code}
      </code>
    </pre>
  );
};


export default CodeBlock;