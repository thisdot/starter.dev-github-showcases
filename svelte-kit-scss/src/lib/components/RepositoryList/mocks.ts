import { buildRepositoryCardViewModel, remapRepository } from '$lib/helpers';
import { MOCK_REPOSITORY } from '$lib/helpers/mocks/repository';

export const MOCK_REPOSITORY_CARD_VIEW_MODELS = [MOCK_REPOSITORY, MOCK_REPOSITORY]
  .map(remapRepository)
  .map((x, i) => buildRepositoryCardViewModel(x, () => `/mock_href_${i}`));

export const MOCK_REPOSITORY_CARD_VIEW_MODEL = MOCK_REPOSITORY_CARD_VIEW_MODELS[0];
