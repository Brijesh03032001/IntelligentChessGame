import { faChessRook } from '@fortawesome/free-solid-svg-icons';
import { ComponentProps, forwardRef } from 'react';
import { Core } from './Core';

type propsT = Omit<ComponentProps<typeof Core>, 'icon'>;

export const SolidRock = forwardRef<SVGSVGElement, propsT>((props, ref) => {
  return <Core icon={faChessRook} ref={ref} {...props} />;
});
