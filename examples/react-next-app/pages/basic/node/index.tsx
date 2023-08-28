import { FC, useEffect } from 'react';
import LogicFlow from '@logicflow/core';

const config: Partial<LogicFlow.Options> = {
  isSilentMode: true,
  stopScrollGraph: true,
  stopZoomGraph: true,
  style: {
    rect: {
      width: 100,
      height: 50,
    },
  },
};

const data = {
  nodes: [
    {
      id: '10',
      type: 'rect',
      x: 150,
      y: 70,
      text: '矩形',
    },
  ],
};

const BasicNode = () => {
  useEffect(() => {
    const lf = new LogicFlow({
      ...config,
      container: document.querySelector('#graph'),
    });
    lf.render(data);
  }, []);

  return (
    <>
      <div>Basic Node Demo</div>
      <div id="graph" className="viewport"></div>
    </>
  )
  
}

export default BasicNode;