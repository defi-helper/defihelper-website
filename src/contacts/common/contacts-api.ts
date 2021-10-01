import { unisenderQueryString } from 'src/common/unisender-query-string';
import { config } from 'src/config';

export const contactsApi = {
  sendForm: <T>(listId: string, formValues: T) => {
    const query = unisenderQueryString(formValues);

    return fetch(
      `${config.UNISENDER_API}&list_ids=${listId}&${query}&double_optin=3`,
      {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'content-type': 'text/plain'
        }
      }
    );
  }
};
