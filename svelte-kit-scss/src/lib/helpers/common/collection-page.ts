import type { GithubCollectionPage } from '$lib/interfaces/data-contract/github';
import type { CollectionPage } from '$lib/interfaces';

export const remapCollectionPage = <TEntity, TModel>(
  collectionPage: GithubCollectionPage<TEntity>,
  mapItem: (e: TEntity) => TModel
): CollectionPage<TModel> => ({
  totalCount: collectionPage.total_count,
  items: collectionPage.items.map(mapItem),
});
