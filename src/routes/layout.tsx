import { component$, Slot } from '@builder.io/qwik';
import { RequestHandler } from '@builder.io/qwik-city';
import { config } from '~/speak-config';

import Nav from '../components/Nav';

export default component$(() => {
  return (
    <main>
      <Nav />
      <section class="pt-16">
        <Slot />
      </section>
    </main>
  );
});

export const onRequest: RequestHandler = ({ request, locale }) => {
  const cookie = request.headers?.get('cookie');
  const acceptLanguage = request.headers?.get('accept-language');

  let lang: string | null = null;
  // Try whether the language is stored in a cookie
  if (cookie) {
    const result = new RegExp('(?:^|; )' + encodeURIComponent('locale') + '=([^;]*)').exec(cookie);
    if (result) {
      lang = JSON.parse(result[1])['lang'];
    }
  }
  // Try to use user language
  if (!lang) {
    if (acceptLanguage) {
      lang = acceptLanguage.split(';')[0]?.split(',')[0];
    }
  }

  // Set Qwik locale
  locale(lang || config.defaultLocale.lang);
};