/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import HeaderSection from 'components/HeaderSection';
import PageWrapper from 'components/PageWrapper';

import messages from './messages';

export default function NotFound() {
  return (
    <PageWrapper>
      <HeaderSection />
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
    </PageWrapper>
  );
}
