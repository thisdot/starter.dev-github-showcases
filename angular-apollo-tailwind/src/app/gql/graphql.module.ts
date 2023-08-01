import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { environment } from 'src/environments/environment';

import { onError } from '@apollo/client/link/error';
import { ToasterService } from '../components/toaster/toaster.service';
import { ToasterType } from '../components/toaster/toaster.model';
import { HttpClientModule } from '@angular/common/http';

const uri = environment.graphApiUrl; // <-- add the URL of the GraphQL server here

export function createApollo(
  httpLink: HttpLink,
  toasterService: ToasterService,
): ApolloClientOptions<any> {
  const http = httpLink.create({ uri });
  const error = onError(({ networkError, graphQLErrors }) => {
    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) => {
        toasterService.showToast({
          type: ToasterType.ERROR,
          title: 'GraphQL error',
          message: `Message: ${message}, 
          Location: ${locations}, Path: ${path}`,
        });
      });

    if (networkError) {
      toasterService.showToast({
        type: ToasterType.ERROR,
        title: 'Network error',
        message: `Name: ${networkError.name}, 
        Message: ${networkError.message}`,
      });
    }
  });

  const link = error.concat(http);

  return {
    link,
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        errorPolicy: 'all',
      },
    },
  };
}

@NgModule({
  imports: [ApolloModule, HttpClientModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink, ToasterService],
    },
  ],
})
export class GraphQLModule {}
