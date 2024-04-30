import { CSSProperties, useLayoutEffect } from 'react';

const useBodyBackgroundColor = (color: CSSProperties['backgroundColor']) => {
  useLayoutEffect(() => {
    document.body.style.backgroundColor = color?.toString() ?? 'white';
  });
};

export default useBodyBackgroundColor;
