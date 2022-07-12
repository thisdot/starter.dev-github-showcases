import { HttpClient, HttpParams } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { OrganizationReposApiResponse } from './organization.interfaces';
import { OrganizationService } from './organization.service';

const MOCK_REPOS: OrganizationReposApiResponse = [
  {
    name: 'Buddy Cummings',
    private: true,
    description:
      'Dolores non saepe eum qui eius quia cupiditate veritatis nihil. Debitis dignissimos quo fuga maxime. Dolorum exercitationem dolor est magnam nobis nisi et et.\n' +
      ' \rVoluptates eum alias. Et iste aperiam voluptas ullam ullam dolores distinctio aut repellat. Est ea autem velit animi sit laboriosam exercitationem.\n' +
      ' \rFacilis veritatis explicabo modi nam officiis aperiam. Voluptas rerum voluptatem natus rerum delectus consequuntur est. Earum officia expedita at enim facere est.',
    fork: true,
    language:
      'Ad ipsam voluptates aut ut nemo. Magni cumque eos voluptate corrupti qui fuga non ea eos. Laboriosam fugit omnis harum ipsam placeat adipisci officia ratione molestiae. Autem blanditiis doloremque ipsum ut. At quia et quis placeat iusto velit voluptas esse.\n' +
      ' \rAb aspernatur error tempore sit. Magni consequatur adipisci iure culpa tempora omnis quasi est. Expedita nesciunt hic assumenda qui qui. Est qui aut. Dolorem similique eaque ut et et voluptas nesciunt commodi quo. Eaque porro velit mollitia ut.\n' +
      ' \rUnde eos vitae quae doloremque. Molestiae magnam quaerat accusamus tempora. Sapiente exercitationem enim placeat. In nobis veniam omnis sed odit suscipit facilis ipsam nihil. Placeat eos veritatis autem corporis. Est est qui sunt.',
    forks_count: 55143,
    stargazers_count: 28917,
    watchers_count: 59410,
    archived: true,
    disabled: true,
    visibility: 'public',
    updated_at: 'Itaque eveniet dolor quibusdam officia omnis.',
  },
  {
    name: 'Evangeline Gaylord',
    private: false,
    description: 'iusto',
    fork: false,
    language: 'Corporis voluptas quibusdam repellendus rerum soluta.',
    forks_count: 86374,
    stargazers_count: 46229,
    watchers_count: 18935,
    archived: false,
    disabled: true,
    visibility: 'private',
    updated_at: 'Qui sed qui explicabo tenetur id dolorem ad voluptates ex.',
  },
  {
    name: 'Wilma Kiehn',
    private: false,
    description: 'minima',
    fork: true,
    language:
      'Nemo asperiores qui nobis accusantium alias voluptas. Voluptatem nesciunt reprehenderit in dolor voluptas soluta cum. Sint fugit optio aliquid vel.\n' +
      ' \rNumquam minus ut perferendis non. Aut aut nesciunt nam voluptas. Est qui optio beatae quas maiores ad fugiat. Beatae aut excepturi hic aut deleniti nisi eos exercitationem enim. Eum sunt porro vel omnis ex minima aut.\n' +
      ' \rSuscipit autem alias aut sint ut et. Ab est ut magni quia incidunt quis aut blanditiis et. Sint saepe pariatur atque hic sed suscipit.',
    forks_count: 78517,
    stargazers_count: 43790,
    watchers_count: 18914,
    archived: true,
    disabled: true,
    visibility: 'public',
    updated_at:
      'Quod fugit et id. Nobis natus in harum laudantium ex itaque expedita eius et. Maiores similique autem et qui repellat eos ex iure. Harum dolores blanditiis eligendi voluptates molestiae odit doloribus consectetur. Minima optio est.',
  },
];

describe('OrganizationService', () => {
  let service: OrganizationService;
  let httpSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpSpy = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      providers: [
        OrganizationService,
        { provide: HttpClient, useValue: httpSpy },
      ],
    });

    service = TestBed.inject(OrganizationService);
    httpSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should request repos under an organization with default parameters', (done) => {
    httpSpy.get.and.returnValue(of(MOCK_REPOS));

    service.getOrganizationRepos('FakeCo').subscribe({
      next: (repos) => {
        expect(repos).toBe(MOCK_REPOS);

        expect(httpSpy.get).toHaveBeenCalledWith(
          'https://api.github.com/orgs/FakeCo/repos',
          jasmine.objectContaining({
            headers: {
              Accept: 'application/vnd.github.v3+json',
            },
            params: new HttpParams({
              fromObject: {
                type: 'all',
                sort: 'updated',
                direction: 'desc',
                per_page: 30,
                page: 1,
              },
            }),
          }),
        );
      },
      complete: done,
    });
  });

  it('should request repos under an organization with an overridden param', (done) => {
    httpSpy.get.and.returnValue(of(MOCK_REPOS));

    service.getOrganizationRepos('OtherFakeCo', { type: 'public' }).subscribe({
      next: (repos) => {
        expect(repos).toBe(MOCK_REPOS);

        expect(httpSpy.get).toHaveBeenCalledWith(
          'https://api.github.com/orgs/OtherFakeCo/repos',
          jasmine.objectContaining({
            headers: {
              Accept: 'application/vnd.github.v3+json',
            },
            params: new HttpParams({
              fromObject: {
                type: 'public',
                sort: 'updated',
                direction: 'desc',
                per_page: 30,
                page: 1,
              },
            }),
          }),
        );
      },
      complete: done,
    });
  });
});
