import { FiCheck } from 'react-icons/fi';
import { color, Box, Stack } from '@stacks/ui';

import { BaseDrawer } from '@app/components/drawer';
import { Caption, Title } from '@app/components/typography';
import ConnectLedgerSuccess from '@assets/images/onboarding/ledger/connect-ledger-success.png';

interface ConnectLedgerSuccessLayoutProps {
  onCancelConnectLedger(): void;
}
export function ConnectLedgerSuccessLayout(props: ConnectLedgerSuccessLayoutProps) {
  const { onCancelConnectLedger } = props;

  return (
    <BaseDrawer title={<Box />} isShowing onClose={onCancelConnectLedger}>
      <Stack alignItems="center" pb="loose" px="loose" spacing="loose" textAlign="center">
        <Box width="267px">
          <img src={ConnectLedgerSuccess} />
        </Box>
        <Title fontSize={3} lineHeight="1.4" mt="base" width="290px">
          Plug in your Ledger, open the Stacks app and click connect
        </Title>
        <Stack alignItems="center" color={color('feedback-success')} isInline mb="base">
          <FiCheck />
          <Caption color="inherited">Connected!</Caption>
        </Stack>
      </Stack>
    </BaseDrawer>
  );
}
