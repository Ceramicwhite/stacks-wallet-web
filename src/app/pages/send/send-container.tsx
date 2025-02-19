import { Outlet } from 'react-router-dom';

import { Flex } from '@stacks/ui';
import { token } from 'leather-styles/tokens';

import { useRouteHeader } from '@app/common/hooks/use-route-header';
import { whenPageMode } from '@app/common/utils';
import { ModalHeader } from '@app/components/modal-header';

export function SendContainer() {
  useRouteHeader(<ModalHeader hideActions defaultGoBack title="Send" />, true);

  return whenPageMode({
    full: (
      <Flex
        borderRadius={['unset', '16px']}
        height="fit-content"
        maxWidth={['100%', token('sizes.centeredPageFullWidth')]}
        minWidth={['100%', token('sizes.centeredPageFullWidth')]}
        background={token('colors.accent.background-primary')}
      >
        <Outlet />
      </Flex>
    ),
    popup: (
      <Flex background={token('colors.accent.background-primary')} width="100%">
        <Outlet />
      </Flex>
    ),
  });
}
