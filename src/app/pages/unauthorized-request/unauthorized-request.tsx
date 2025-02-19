import { Box } from '@stacks/ui';

import { GenericError } from '@app/components/generic-error/generic-error';

const body = `The transaction request was not properly authorized by any of your Leather accounts. This typically happens if you've logged into this app before using another account.`;
const helpTextList = [
  <Box as="li" mt="base" key={1}>
    Sign out of the app and sign back in to re-authenticate into the application. This should help
    you successfully sign your transaction with the Leather.
  </Box>,
];
const title = 'Unauthorized request';

export function UnauthorizedRequest() {
  return <GenericError body={body} helpTextList={helpTextList} title={title} />;
}
