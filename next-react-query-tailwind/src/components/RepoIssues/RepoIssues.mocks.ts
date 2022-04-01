import { graphql } from 'msw';

export const mockRepoIssuesQuery = graphql.query(
  'RepoIssues',
  (req, res, ctx) => {
    const { filterBy, orderBy, after, before } = req.variables;

    if (filterBy.milestone) {
      return res(ctx.data(noResultsResponse));
    }

    if (orderBy.field === 'CREATED_AT' && orderBy.direction === 'ASC') {
      return res(ctx.data(issuesOldestSortResponse));
    }

    if (after === 'Y3Vyc29yOnYyOpK5MjAyMS0xMS0wNlQwODo0ODoxOC0wNDowMM4-YFxK') {
      return res(ctx.data(issuesPageTwoResponse));
    }

    if (before === 'Y3Vyc29yOnYyOpK5MjAyMS0xMi0wOFQwNzoyNjozOC0wNTowMM5ACV2Q') {
      return res(ctx.data(issuesResponse));
    }

    if (
      Array.isArray(filterBy.labels) &&
      filterBy.labels.includes('React 18')
    ) {
      return res(ctx.data(issuesLabelResponse));
    }

    return res(ctx.data(issuesResponse));
  }
);

//
// Mocked responses
//

const noResultsResponse = {
  repository: {
    milestones: {
      nodes: [
        {
          id: 'MDk6TWlsZXN0b25lMjkzNzc1Ng==',
          closed: false,
          description: '',
          number: 40,
          title: '18.0.0',
        },
      ],
      pageInfo: {
        startCursor: 'Y3Vyc29yOnYyOpHOACzTnA==',
        endCursor: 'Y3Vyc29yOnYyOpHOACzTnA==',
        hasNextPage: false,
        hasPreviousPage: false,
      },
      totalCount: 1,
    },
    closedIssues: {
      pageInfo: {
        hasNextPage: false,
        endCursor: null,
        hasPreviousPage: false,
        startCursor: null,
      },
      totalCount: 0,
      nodes: [],
    },
    openIssues: {
      pageInfo: {
        hasNextPage: false,
        endCursor: null,
        hasPreviousPage: false,
        startCursor: null,
      },
      totalCount: 0,
      nodes: [],
    },
  },
};

const issuesResponse = {
  repository: {
    milestones: {
      nodes: [
        {
          id: 'MDk6TWlsZXN0b25lMjkzNzc1Ng==',
          closed: false,
          description: '',
          number: 40,
          title: '18.0.0',
        },
      ],
      pageInfo: {
        startCursor: 'Y3Vyc29yOnYyOpHOACzTnA==',
        endCursor: 'Y3Vyc29yOnYyOpHOACzTnA==',
        hasNextPage: false,
        hasPreviousPage: false,
      },
      totalCount: 1,
    },
    closedIssues: {
      pageInfo: {
        hasNextPage: true,
        endCursor: 'Y3Vyc29yOnYyOpK5MjAyMS0xMS0yMlQxNzoxMDo1My0wNTowMM4_OBbp',
        hasPreviousPage: false,
        startCursor: 'Y3Vyc29yOnYyOpK5MjAyMS0xMi0wN1QxNDo1Nzo0MC0wNTowMM4__4LQ',
      },
      totalCount: 10110,
      nodes: [
        {
          id: 'I_kwDOAJy2Ks4__4LQ',
          author: { login: 'killjoy2013' },
          comments: { totalCount: 2 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
            totalCount: 2,
          },
          closed: true,
          closedAt: '2021-12-07T20:48:43Z',
          title: 'React 18 ',
          number: 22877,
          createdAt: '2021-12-07T19:57:40Z',
        },
        {
          id: 'I_kwDOAJy2Ks4_-uq5',
          author: { login: 'zqjimlove' },
          comments: { totalCount: 3 },
          labels: {
            nodes: [{ color: 'd4c5f9', name: 'Status: Unconfirmed' }],
            totalCount: 1,
          },
          closed: true,
          closedAt: '2021-12-07T18:26:09Z',
          title:
            'Bug: Call render if set state value same of default value, and then not update View',
          number: 22875,
          createdAt: '2021-12-07T14:19:48Z',
        },
        {
          id: 'I_kwDOAJy2Ks4_5wla',
          author: { login: 'panta82' },
          comments: { totalCount: 5 },
          labels: {
            nodes: [{ color: 'd4c5f9', name: 'Status: Unconfirmed' }],
            totalCount: 1,
          },
          closed: true,
          closedAt: '2021-12-06T16:54:21Z',
          title:
            'Bug: In strict-mode, useRef gives you a different object each time component is called during the first render',
          number: 22872,
          createdAt: '2021-12-06T12:40:26Z',
        },
        {
          id: 'I_kwDOAJy2Ks4_3neY',
          author: { login: 'djmisterjon' },
          comments: { totalCount: 5 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
            totalCount: 2,
          },
          closed: true,
          closedAt: '2021-12-06T14:01:40Z',
          title: 'Why React change keys with dot dollar ? ".$"',
          number: 22870,
          createdAt: '2021-12-05T20:01:17Z',
        },
        {
          id: 'I_kwDOAJy2Ks4_3Sr1',
          author: { login: 'wangjia0525' },
          comments: { totalCount: 4 },
          labels: {
            nodes: [
              { color: 'd4c5f9', name: 'Status: Unconfirmed' },
              { color: 'fffde7', name: 'Resolution: Needs More Information' },
            ],
            totalCount: 2,
          },
          closed: true,
          closedAt: '2021-12-07T18:32:16Z',
          title: 'Bug:在联通4g或wifi网络环境下,引用在线cdn报错',
          number: 22869,
          createdAt: '2021-12-05T13:24:51Z',
        },
        {
          id: 'I_kwDOAJy2Ks4_1kMH',
          author: { login: 'iburlachenko' },
          comments: { totalCount: 1 },
          labels: {
            nodes: [
              { color: 'b60205', name: 'Type: Bug' },
              { color: 'cccccc', name: 'Resolution: Duplicate' },
              { color: 'd4c5f9', name: 'Status: Unconfirmed' },
              { color: 'fbca04', name: 'Component: Developer Tools' },
            ],
            totalCount: 4,
          },
          closed: true,
          closedAt: '2021-12-04T18:46:11Z',
          title:
            '[DevTools Bug] Cannot add node "1" because a node with that id is already in the Store.',
          number: 22865,
          createdAt: '2021-12-03T22:06:42Z',
        },
        {
          id: 'I_kwDOAJy2Ks4_1f7C',
          author: { login: 'baAlhassane' },
          comments: { totalCount: 1 },
          labels: {
            nodes: [{ color: 'd4c5f9', name: 'Status: Unconfirmed' }],
            totalCount: 1,
          },
          closed: true,
          closedAt: '2021-12-04T07:56:05Z',
          title: 'alhas',
          number: 22864,
          createdAt: '2021-12-03T21:39:00Z',
        },
        {
          id: 'I_kwDOAJy2Ks4_wwW1',
          author: { login: 'Royalchampion' },
          comments: { totalCount: 4 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
            totalCount: 2,
          },
          closed: true,
          closedAt: '2021-12-03T10:50:19Z',
          title: 'req.body is showing me object in reverse order.',
          number: 22861,
          createdAt: '2021-12-02T16:26:47Z',
        },
        {
          id: 'I_kwDOAJy2Ks4_wvDV',
          author: { login: 'jeanali' },
          comments: { totalCount: 2 },
          labels: {
            nodes: [{ color: 'd4c5f9', name: 'Status: Unconfirmed' }],
            totalCount: 1,
          },
          closed: true,
          closedAt: '2021-12-06T18:46:53Z',
          title: 'Bug: Error while runinng react app',
          number: 22860,
          createdAt: '2021-12-02T16:21:42Z',
        },
        {
          id: 'I_kwDOAJy2Ks4_vxpJ',
          author: { login: 'Iipal' },
          comments: { totalCount: 2 },
          labels: {
            nodes: [{ color: 'd4c5f9', name: 'Status: Unconfirmed' }],
            totalCount: 1,
          },
          closed: true,
          closedAt: '2021-12-02T13:38:51Z',
          title: "Bug: `Suspense` doesn't render `fallback` component at all",
          number: 22859,
          createdAt: '2021-12-02T12:23:57Z',
        },
        {
          id: 'I_kwDOAJy2Ks4_trI3',
          author: { login: 'zprjk' },
          comments: { totalCount: 2 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Component: DOM' },
              { color: 'd4c5f9', name: 'Status: Unconfirmed' },
              { color: 'fffde7', name: 'Resolution: Needs More Information' },
            ],
            totalCount: 3,
          },
          closed: true,
          closedAt: '2021-12-06T17:51:08Z',
          title:
            'React does not recognize the `maskType` prop on a DOM element',
          number: 22850,
          createdAt: '2021-12-01T22:36:40Z',
        },
        {
          id: 'I_kwDOAJy2Ks4_tjqi',
          author: { login: 'tamlyn' },
          comments: { totalCount: 9 },
          labels: {
            nodes: [{ color: 'fef2c0', name: 'Component: DOM' }],
            totalCount: 1,
          },
          closed: true,
          closedAt: '2021-12-07T12:45:53Z',
          title: 'Bug: Clicking button type="button" submits form',
          number: 22849,
          createdAt: '2021-12-01T21:56:24Z',
        },
        {
          id: 'I_kwDOAJy2Ks4_iQ9T',
          author: { login: 'Zahraamirii' },
          comments: { totalCount: 2 },
          labels: { nodes: [], totalCount: 0 },
          closed: true,
          closedAt: '2021-12-04T18:49:56Z',
          title: 'Developer Tools issues',
          number: 22845,
          createdAt: '2021-11-29T11:53:28Z',
        },
        {
          id: 'I_kwDOAJy2Ks4_hugY',
          author: { login: 'kasugaicrow' },
          comments: { totalCount: 2 },
          labels: {
            nodes: [{ color: 'd4c5f9', name: 'Status: Unconfirmed' }],
            totalCount: 1,
          },
          closed: true,
          closedAt: '2021-11-29T09:51:53Z',
          title: 'Term "use" in non-hook functions',
          number: 22844,
          createdAt: '2021-11-29T09:32:27Z',
        },
        {
          id: 'I_kwDOAJy2Ks4_haAo',
          author: { login: 'iJynx' },
          comments: { totalCount: 2 },
          labels: {
            nodes: [
              { color: 'cccccc', name: 'Resolution: Duplicate' },
              { color: 'd4c5f9', name: 'Status: Unconfirmed' },
            ],
            totalCount: 2,
          },
          closed: true,
          closedAt: '2021-11-29T15:06:13Z',
          title: '[Suggestion] Throw Circular Reference Error',
          number: 22843,
          createdAt: '2021-11-29T08:02:17Z',
        },
        {
          id: 'I_kwDOAJy2Ks4_f0Tw',
          author: { login: 'The-dev-Sirmed' },
          comments: { totalCount: 2 },
          labels: {
            nodes: [{ color: 'd4c5f9', name: 'Status: Unconfirmed' }],
            totalCount: 1,
          },
          closed: true,
          closedAt: '2021-12-06T18:48:49Z',
          title:
            "Bug: React App refuses to run when changed it's root file from C: drive to D: drive",
          number: 22842,
          createdAt: '2021-11-28T11:23:40Z',
        },
        {
          id: 'I_kwDOAJy2Ks4_ek1f',
          author: { login: 'TkDodo' },
          comments: { totalCount: 4 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
            totalCount: 2,
          },
          closed: true,
          closedAt: '2021-11-27T11:51:26Z',
          title: 'React 18: Unexpected component unmounting in Strict Mode',
          number: 22839,
          createdAt: '2021-11-27T11:05:30Z',
        },
        {
          id: 'I_kwDOAJy2Ks4_co7-',
          author: { login: 'Omprakash76' },
          comments: { totalCount: 2 },
          labels: { nodes: [], totalCount: 0 },
          closed: true,
          closedAt: '2021-12-06T19:30:05Z',
          title:
            "React Hook useCallback has a missing dependency: 'groupInfo'. Either include it or remove the dependency array  react-hooks/exhaustive-deps",
          number: 22835,
          createdAt: '2021-11-26T13:23:35Z',
        },
        {
          id: 'I_kwDOAJy2Ks4_Xsnf',
          author: { login: 'janryWang' },
          comments: { totalCount: 2 },
          labels: {
            nodes: [{ color: 'd4c5f9', name: 'Status: Unconfirmed' }],
            totalCount: 1,
          },
          closed: true,
          closedAt: '2021-11-27T05:16:00Z',
          title:
            'Bug: Parent Component already rendered, But Child Component can not rerender in StrictMode',
          number: 22827,
          createdAt: '2021-11-25T05:35:50Z',
        },
        {
          id: 'I_kwDOAJy2Ks4_XahY',
          author: { login: 'gryhan' },
          comments: { totalCount: 2 },
          labels: {
            nodes: [{ color: 'd4c5f9', name: 'Status: Unconfirmed' }],
            totalCount: 1,
          },
          closed: true,
          closedAt: '2021-11-25T03:14:04Z',
          title:
            'Bug: The results of the useState of the Event parameter are different in react17.0.0 and react16.',
          number: 22826,
          createdAt: '2021-11-25T02:47:49Z',
        },
        {
          id: 'I_kwDOAJy2Ks4_TPEb',
          author: { login: 'azman63' },
          comments: { totalCount: 1 },
          labels: {
            nodes: [{ color: 'fef2c0', name: 'Type: Discussion' }],
            totalCount: 1,
          },
          closed: true,
          closedAt: '2021-11-24T21:43:07Z',
          title:
            "Can't edit a editable div in facebook post field(Keys not working)",
          number: 22823,
          createdAt: '2021-11-24T05:04:55Z',
        },
        {
          id: 'I_kwDOAJy2Ks4_TC_X',
          author: { login: 'yoyogis' },
          comments: { totalCount: 2 },
          labels: {
            nodes: [{ color: 'd4c5f9', name: 'Status: Unconfirmed' }],
            totalCount: 1,
          },
          closed: true,
          closedAt: '2021-11-24T06:37:29Z',
          title:
            'Bug: Save "resolve" and "reject" to useState will let Promise auto resolved.',
          number: 22822,
          createdAt: '2021-11-24T03:27:21Z',
        },
        {
          id: 'I_kwDOAJy2Ks4_PfL5',
          author: { login: 'agmansi970' },
          comments: { totalCount: 1 },
          labels: {
            nodes: [{ color: 'd4c5f9', name: 'Status: Unconfirmed' }],
            totalCount: 1,
          },
          closed: true,
          closedAt: '2021-11-23T13:59:09Z',
          title: 'React CDatatable tableFilter is not working',
          number: 22812,
          createdAt: '2021-11-23T09:42:54Z',
        },
        {
          id: 'I_kwDOAJy2Ks4_OkgP',
          author: { login: 'xiejay97' },
          comments: { totalCount: 6 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
            totalCount: 2,
          },
          closed: true,
          closedAt: '2021-11-23T13:59:25Z',
          title:
            'React 18 It possible that automatic batching work when using await that like `await false`?',
          number: 22811,
          createdAt: '2021-11-23T02:50:59Z',
        },
        {
          id: 'I_kwDOAJy2Ks4_OBbp',
          author: { login: 'ChristopherPAndrews' },
          comments: { totalCount: 1 },
          labels: {
            nodes: [
              { color: 'b60205', name: 'Type: Bug' },
              { color: 'd4c5f9', name: 'Status: Unconfirmed' },
            ],
            totalCount: 2,
          },
          closed: true,
          closedAt: '2021-11-22T22:32:35Z',
          title:
            'Bug: Error checking code is skipped for async useEffect argument',
          number: 22809,
          createdAt: '2021-11-22T22:10:53Z',
        },
      ],
    },
    openIssues: {
      pageInfo: {
        hasNextPage: true,
        endCursor: 'Y3Vyc29yOnYyOpK5MjAyMS0xMS0wNlQwODo0ODoxOC0wNDowMM4-YFxK',
        hasPreviousPage: false,
        startCursor: 'Y3Vyc29yOnYyOpK5MjAyMS0xMi0wOFQwNzoyNjozOC0wNTowMM5ACV2Q',
      },
      totalCount: 660,
      nodes: [
        {
          id: 'I_kwDOAJy2Ks5ACV2Q',
          author: { login: 'lirancr' },
          comments: { totalCount: 0 },
          labels: { nodes: [{ color: 'd4c5f9', name: 'Status: Unconfirmed' }] },
          closed: false,
          title:
            'Bug: onMouse leave triggered on hidden components if hovered over before hidden',
          number: 22883,
          createdAt: '2021-12-08T12:26:38Z',
        },
        {
          id: 'I_kwDOAJy2Ks5AAa9R',
          author: { login: 'zposten' },
          comments: { totalCount: 0 },
          labels: { nodes: [{ color: 'd4c5f9', name: 'Status: Unconfirmed' }] },
          closed: false,
          title:
            'Feature Request: Exclude individual dependencies from exhaustive-deps rule',
          number: 22879,
          createdAt: '2021-12-07T23:52:21Z',
        },
        {
          id: 'I_kwDOAJy2Ks4_3yfR',
          author: { login: 'Mozart409' },
          comments: { totalCount: 2 },
          labels: {
            nodes: [
              { color: 'b60205', name: 'Type: Bug' },
              { color: 'd4c5f9', name: 'Status: Unconfirmed' },
              { color: 'fffde7', name: 'Resolution: Needs More Information' },
              { color: 'fbca04', name: 'Component: Developer Tools' },
            ],
          },
          closed: false,
          title:
            '[DevTools Bug] Could not find node with id "99" in commit tree',
          number: 22871,
          createdAt: '2021-12-05T23:35:15Z',
        },
        {
          id: 'I_kwDOAJy2Ks4_nVz1',
          author: { login: 'emilevirus' },
          comments: { totalCount: 3 },
          labels: {
            nodes: [
              { color: 'b60205', name: 'Type: Bug' },
              { color: 'd4c5f9', name: 'Status: Unconfirmed' },
            ],
          },
          closed: false,
          title:
            'Bug: Rendering content inside an iFrame using createPortal with Firefox is blank',
          number: 22847,
          createdAt: '2021-11-30T14:06:08Z',
        },
        {
          id: 'I_kwDOAJy2Ks4_fCX3',
          author: { login: 'Biki-das' },
          comments: { totalCount: 0 },
          labels: { nodes: [{ color: 'fef2c0', name: 'Type: Discussion' }] },
          closed: false,
          title: '`Object.prototype` builtins should not be used directly',
          number: 22840,
          createdAt: '2021-11-27T18:11:58Z',
        },
        {
          id: 'I_kwDOAJy2Ks4_eNqD',
          author: { login: 'theKashey' },
          comments: { totalCount: 2 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
          },
          closed: false,
          title: 'React 18: How to "wait" for concurrent mode',
          number: 22836,
          createdAt: '2021-11-27T02:32:56Z',
        },
        {
          id: 'I_kwDOAJy2Ks4_a2cJ',
          author: { login: 'ForbiddenEra' },
          comments: { totalCount: 3 },
          labels: {
            nodes: [
              { color: 'b60205', name: 'Type: Bug' },
              { color: 'd4c5f9', name: 'Status: Unconfirmed' },
              { color: 'fffde7', name: 'Resolution: Needs More Information' },
              { color: 'fbca04', name: 'Component: Developer Tools' },
            ],
          },
          closed: false,
          title: '[DevTools Bug]: CDN-based site not working',
          number: 22834,
          createdAt: '2021-11-26T00:52:17Z',
        },
        {
          id: 'I_kwDOAJy2Ks4_asXN',
          author: { login: 'eps1lon' },
          comments: { totalCount: 3 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
          },
          closed: false,
          title:
            'React 18: Non-recoverable hydration mismatch if mismatch occurs in the same boundary as main script',
          number: 22833,
          createdAt: '2021-11-25T23:16:17Z',
        },
        {
          id: 'I_kwDOAJy2Ks4_ain0',
          author: { login: 'gaearon' },
          comments: { totalCount: 0 },
          labels: { nodes: [{ color: 'd4c5f9', name: 'Status: Unconfirmed' }] },
          closed: false,
          title: 'Update Server Components dependencies',
          number: 22832,
          createdAt: '2021-11-25T21:13:58Z',
        },
        {
          id: 'I_kwDOAJy2Ks4_Xwzq',
          author: { login: 'x-yuri' },
          comments: { totalCount: 1 },
          labels: {
            nodes: [
              { color: 'b60205', name: 'Type: Bug' },
              { color: 'fbca04', name: 'Component: Developer Tools' },
            ],
          },
          closed: false,
          title:
            "[DevTools Bug]: They make Firefox's debugger unusable (can't continue or step over)",
          number: 22828,
          createdAt: '2021-11-25T06:10:38Z',
        },
        {
          id: 'I_kwDOAJy2Ks4_ISTn',
          author: { login: 'eps1lon' },
          comments: { totalCount: 0 },
          labels: {
            nodes: [
              { color: 'b60205', name: 'Type: Bug' },
              { color: 'd4c5f9', name: 'Status: Unconfirmed' },
              { color: '26B0E4', name: 'React 18' },
            ],
          },
          closed: false,
          title:
            'React 18 Bug: react-dom/server "Detected multiple renderers..." if preceeded by react-test-renderer',
          number: 22796,
          createdAt: '2021-11-20T12:40:28Z',
        },
        {
          id: 'I_kwDOAJy2Ks4_HAlE',
          author: { login: 'YuriGor' },
          comments: { totalCount: 4 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
          },
          closed: false,
          title: 'React 18 not passive wheel / touch event listeners support',
          number: 22794,
          createdAt: '2021-11-19T18:26:12Z',
        },
        {
          id: 'I_kwDOAJy2Ks4_GRni',
          author: { login: 'blittle' },
          comments: { totalCount: 9 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
          },
          closed: false,
          title: "React 18 doesn't wait for long running suspended promises",
          number: 22791,
          createdAt: '2021-11-19T14:47:07Z',
        },
        {
          id: 'I_kwDOAJy2Ks4-5Mnh',
          author: { login: 'bvaughn' },
          comments: { totalCount: 3 },
          labels: {
            nodes: [{ color: 'fbca04', name: 'Component: Developer Tools' }],
          },
          closed: false,
          title: 'Timeline view search',
          number: 22776,
          createdAt: '2021-11-16T18:16:15Z',
        },
        {
          id: 'I_kwDOAJy2Ks4-1dRj',
          author: { login: 'jplhomer' },
          comments: { totalCount: 2 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
          },
          closed: false,
          title:
            'React 18: "The stream is not in a state that permits close" in `renderToReadableStream`',
          number: 22772,
          createdAt: '2021-11-15T22:45:59Z',
        },
        {
          id: 'I_kwDOAJy2Ks4-xqxg',
          author: { login: 'surajit25' },
          comments: { totalCount: 2 },
          labels: {
            nodes: [
              { color: 'd4c5f9', name: 'Status: Unconfirmed' },
              { color: 'fffde7', name: 'Resolution: Needs More Information' },
              { color: 'fbca04', name: 'Component: Developer Tools' },
            ],
          },
          closed: false,
          title:
            'Some one is changing the state variable from the react devlopment tool in production build?',
          number: 22758,
          createdAt: '2021-11-15T04:37:46Z',
        },
        {
          id: 'I_kwDOAJy2Ks4-ldZQ',
          author: { login: 'bvaughn' },
          comments: { totalCount: 3 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: 'fbca04', name: 'Component: Developer Tools' },
            ],
          },
          closed: false,
          title: 'Consolidate component stack and (DEV only) element __source',
          number: 22738,
          createdAt: '2021-11-10T15:51:30Z',
        },
        {
          id: 'I_kwDOAJy2Ks4-isCf',
          author: { login: 'theKashey' },
          comments: { totalCount: 3 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
          },
          closed: false,
          title: 'React 18 requests similar component trees for the useId',
          number: 22733,
          createdAt: '2021-11-10T00:56:11Z',
        },
        {
          id: 'I_kwDOAJy2Ks4-iBgQ',
          author: { login: 'bvaughn' },
          comments: { totalCount: 3 },
          labels: {
            nodes: [
              { color: 'b60205', name: 'Type: Bug' },
              { color: 'fbca04', name: 'Component: Developer Tools' },
              { color: '1dc3d6', name: 'Component: Scheduling Profiler' },
            ],
          },
          closed: false,
          title: 'Timeline: Nested update warning logic flaw',
          number: 22731,
          createdAt: '2021-11-09T20:45:50Z',
        },
        {
          id: 'I_kwDOAJy2Ks4-eqgV',
          author: { login: 'Guris' },
          comments: { totalCount: 12 },
          labels: {
            nodes: [
              { color: 'b60205', name: 'Type: Bug' },
              { color: 'd4c5f9', name: 'Status: Unconfirmed' },
              { color: 'fffde7', name: 'Resolution: Needs More Information' },
              { color: 'fbca04', name: 'Component: Developer Tools' },
            ],
          },
          closed: false,
          title:
            "[DevTools Bug]: Chrome extension's settings reset after every reload",
          number: 22727,
          createdAt: '2021-11-09T06:08:26Z',
        },
        {
          id: 'I_kwDOAJy2Ks4-aKNA',
          author: { login: 'yg-yash' },
          comments: { totalCount: 1 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
          },
          closed: false,
          title:
            'How to resuse same component without remounting it and access anywhere in dom tree?',
          number: 22721,
          createdAt: '2021-11-08T05:49:03Z',
        },
        {
          id: 'I_kwDOAJy2Ks4-ZWps',
          author: { login: 'jordanbtucker' },
          comments: { totalCount: 3 },
          labels: { nodes: [{ color: 'd4c5f9', name: 'Status: Unconfirmed' }] },
          closed: false,
          title:
            'Bug: Parent <details> onToggle handler called when child <details> onToggle handler is triggered',
          number: 22718,
          createdAt: '2021-11-07T19:48:36Z',
        },
        {
          id: 'I_kwDOAJy2Ks4-Yj-w',
          author: { login: 'CACUser' },
          comments: { totalCount: 1 },
          labels: { nodes: [] },
          closed: false,
          title: 'Safari performance while adding list items',
          number: 22714,
          createdAt: '2021-11-07T00:19:29Z',
        },
        {
          id: 'I_kwDOAJy2Ks4-YRfN',
          author: { login: 'theoavoyne' },
          comments: { totalCount: 1 },
          labels: { nodes: [{ color: 'd4c5f9', name: 'Status: Unconfirmed' }] },
          closed: false,
          title:
            'Bug: when initialArg changes, useReducer should update the state accordingly',
          number: 22712,
          createdAt: '2021-11-06T16:57:08Z',
        },
        {
          id: 'I_kwDOAJy2Ks4-YFxK',
          author: { login: 'ineffablep' },
          comments: { totalCount: 2 },
          labels: { nodes: [{ color: 'd4c5f9', name: 'Status: Unconfirmed' }] },
          closed: false,
          title: 'SetState in useCallback or without useCallback',
          number: 22709,
          createdAt: '2021-11-06T12:48:18Z',
        },
      ],
    },
  },
};

const issuesPageTwoResponse = {
  repository: {
    milestones: {
      nodes: [
        {
          id: 'MDk6TWlsZXN0b25lMjkzNzc1Ng==',
          closed: false,
          description: '',
          number: 40,
          title: '18.0.0',
        },
      ],
      pageInfo: {
        startCursor: 'Y3Vyc29yOnYyOpHOACzTnA==',
        endCursor: 'Y3Vyc29yOnYyOpHOACzTnA==',
        hasNextPage: false,
        hasPreviousPage: false,
      },
      totalCount: 1,
    },
    closedIssues: {
      pageInfo: {
        hasNextPage: true,
        endCursor: 'Y3Vyc29yOnYyOpK5MjAyMS0xMC0yMFQxNjoyNzoxNC0wNDowMM49gAvc',
        hasPreviousPage: true,
        startCursor: 'Y3Vyc29yOnYyOpK5MjAyMS0xMS0wNVQxMTo1OTo0OS0wNDowMM4-WMKd',
      },
      totalCount: 10110,
      nodes: [
        {
          id: 'I_kwDOAJy2Ks4-WMKd',
          author: { login: 'bvaughn' },
          comments: { totalCount: 0 },
          labels: {
            nodes: [{ color: 'fbca04', name: 'Component: Developer Tools' }],
            totalCount: 1,
          },
          closed: true,
          closedAt: '2021-11-08T17:28:34Z',
          title:
            'Timeline screenshots are sometimes way too small (depending on aspect ratio)',
          number: 22705,
          createdAt: '2021-11-05T15:59:49Z',
        },
        {
          id: 'I_kwDOAJy2Ks4-V-NF',
          author: { login: 'JamesGelok' },
          comments: { totalCount: 5 },
          labels: { nodes: [], totalCount: 0 },
          closed: true,
          closedAt: '2021-11-05T18:33:12Z',
          title: '[ESLint Bug]: Rules of Hooks breaks with IIFEs',
          number: 22704,
          createdAt: '2021-11-05T15:01:38Z',
        },
        {
          id: 'I_kwDOAJy2Ks4-NnBo',
          author: { login: 'bvaughn' },
          comments: { totalCount: 1 },
          labels: {
            nodes: [
              { color: 'b60205', name: 'Type: Bug' },
              { color: 'fbca04', name: 'Component: Developer Tools' },
            ],
            totalCount: 2,
          },
          closed: true,
          closedAt: '2021-11-04T14:22:26Z',
          title: 'Named hooks parsing fails for certain Code Sandbox examples',
          number: 22686,
          createdAt: '2021-11-03T15:37:15Z',
        },
        {
          id: 'I_kwDOAJy2Ks4-Kh8U',
          author: { login: 'Sarkar44' },
          comments: { totalCount: 1 },
          labels: {
            nodes: [{ color: 'd4c5f9', name: 'Status: Unconfirmed' }],
            totalCount: 1,
          },
          closed: true,
          closedAt: '2021-11-03T06:44:12Z',
          title: 'Bug:',
          number: 22682,
          createdAt: '2021-11-02T23:55:13Z',
        },
        {
          id: 'I_kwDOAJy2Ks4-IeGl',
          author: { login: 'bvaughn' },
          comments: { totalCount: 4 },
          labels: {
            nodes: [{ color: 'fbca04', name: 'Component: Developer Tools' }],
            totalCount: 1,
          },
          closed: true,
          closedAt: '2021-11-08T20:17:22Z',
          title: 'Improve DevTools CSS variables situation',
          number: 22678,
          createdAt: '2021-11-02T14:03:53Z',
        },
        {
          id: 'I_kwDOAJy2Ks4-HF7i',
          author: { login: 'Deribolot' },
          comments: { totalCount: 2 },
          labels: {
            nodes: [
              { color: 'fffde7', name: 'Resolution: Needs More Information' },
              { color: 'fbca04', name: 'Component: Developer Tools' },
            ],
            totalCount: 2,
          },
          closed: true,
          closedAt: '2021-11-03T19:55:32Z',
          title: "Profiler doesn't work ",
          number: 22677,
          createdAt: '2021-11-02T09:04:15Z',
        },
        {
          id: 'I_kwDOAJy2Ks4-FqWu',
          author: { login: 'bvaughn' },
          comments: { totalCount: 0 },
          labels: {
            nodes: [
              { color: 'f9d0c4', name: 'Component: Build Infrastructure' },
            ],
            totalCount: 1,
          },
          closed: true,
          closedAt: '2021-11-04T14:40:35Z',
          title: 'Avoid duplicate boilerplate header',
          number: 22673,
          createdAt: '2021-11-01T21:47:08Z',
        },
        {
          id: 'I_kwDOAJy2Ks4-FPTD',
          author: { login: 'BiancaArtola' },
          comments: { totalCount: 1 },
          labels: {
            nodes: [
              { color: 'cccccc', name: 'Resolution: Duplicate' },
              { color: 'd4c5f9', name: 'Status: Unconfirmed' },
            ],
            totalCount: 2,
          },
          closed: true,
          closedAt: '2021-11-13T21:12:44Z',
          title: 'Many errors in console even using Error Boundary',
          number: 22671,
          createdAt: '2021-11-01T20:08:03Z',
        },
        {
          id: 'I_kwDOAJy2Ks4-D7u2',
          author: { login: 'Biki-das' },
          comments: { totalCount: 1 },
          labels: {
            nodes: [{ color: 'd4c5f9', name: 'Status: Unconfirmed' }],
            totalCount: 1,
          },
          closed: true,
          closedAt: '2021-11-01T14:24:41Z',
          title: 'Bug: Variables should not be initialized to `undefined`',
          number: 22666,
          createdAt: '2021-11-01T14:10:42Z',
        },
        {
          id: 'I_kwDOAJy2Ks49_kjF',
          author: { login: 'rayanfer32' },
          comments: { totalCount: 3 },
          labels: {
            nodes: [{ color: 'd4c5f9', name: 'Status: Unconfirmed' }],
            totalCount: 1,
          },
          closed: true,
          closedAt: '2021-10-30T16:34:51Z',
          title:
            'Bug: State getting reset / (items getting removed) when adding new element to Array',
          number: 22658,
          createdAt: '2021-10-30T07:16:32Z',
        },
        {
          id: 'I_kwDOAJy2Ks49_Qsj',
          author: { login: 'cikay' },
          comments: { totalCount: 2 },
          labels: {
            nodes: [{ color: 'd4c5f9', name: 'Status: Unconfirmed' }],
            totalCount: 1,
          },
          closed: true,
          closedAt: '2021-11-03T17:46:12Z',
          title: 'Bug: ',
          number: 22655,
          createdAt: '2021-10-29T23:50:11Z',
        },
        {
          id: 'I_kwDOAJy2Ks499zn2',
          author: { login: 'Andarist' },
          comments: { totalCount: 2 },
          labels: {
            nodes: [{ color: 'd4c5f9', name: 'Status: Unconfirmed' }],
            totalCount: 1,
          },
          closed: true,
          closedAt: '2021-10-29T14:43:00Z',
          title:
            "Bug: setState bail out doesn't work sometimes when updating from an effect",
          number: 22654,
          createdAt: '2021-10-29T14:12:55Z',
        },
        {
          id: 'I_kwDOAJy2Ks499cy0',
          author: { login: '44Chann' },
          comments: { totalCount: 0 },
          labels: {
            nodes: [{ color: 'd4c5f9', name: 'Status: Unconfirmed' }],
            totalCount: 1,
          },
          closed: true,
          closedAt: '2021-10-29T14:35:00Z',
          title: 'Bug: spread should be sported in jsx',
          number: 22653,
          createdAt: '2021-10-29T12:31:54Z',
        },
        {
          id: 'I_kwDOAJy2Ks498qAZ',
          author: { login: 'Nwawfbgmc34-358' },
          comments: { totalCount: 0 },
          labels: {
            nodes: [{ color: 'd4c5f9', name: 'Status: Unconfirmed' }],
            totalCount: 1,
          },
          closed: true,
          closedAt: '2021-10-29T08:29:03Z',
          title: 'Bug: ',
          number: 22652,
          createdAt: '2021-10-29T08:28:41Z',
        },
        {
          id: 'I_kwDOAJy2Ks498Nb7',
          author: { login: 'chahakshah111' },
          comments: { totalCount: 2 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
            totalCount: 2,
          },
          closed: true,
          closedAt: '2021-10-29T06:26:59Z',
          title: 'removeEventListner is not working in useEffect return.',
          number: 22651,
          createdAt: '2021-10-29T05:51:44Z',
        },
        {
          id: 'I_kwDOAJy2Ks49yFUG',
          author: { login: 'yifanwww' },
          comments: { totalCount: 5 },
          labels: {
            nodes: [
              { color: 'b60205', name: 'Type: Bug' },
              { color: 'd4c5f9', name: 'Status: Unconfirmed' },
              { color: 'fbca04', name: 'Component: Developer Tools' },
            ],
            totalCount: 3,
          },
          closed: true,
          closedAt: '2021-10-27T17:14:04Z',
          title:
            '[DevTools Bug]: "Reload and start profiling" button is missing on Microsoft Edge',
          number: 22630,
          createdAt: '2021-10-26T16:59:53Z',
        },
        {
          id: 'I_kwDOAJy2Ks49vLiE',
          author: { login: 'aooy' },
          comments: { totalCount: 4 },
          labels: {
            nodes: [{ color: 'd4c5f9', name: 'Status: Unconfirmed' }],
            totalCount: 1,
          },
          closed: true,
          closedAt: '2021-11-01T08:28:42Z',
          title:
            'Bug: Hook setState uses functional update, there is a counter in the function, the display will be incorrect',
          number: 22627,
          createdAt: '2021-10-26T03:13:54Z',
        },
        {
          id: 'I_kwDOAJy2Ks49rwYx',
          author: { login: 'Royalchampion' },
          comments: { totalCount: 3 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
            totalCount: 2,
          },
          closed: true,
          closedAt: '2021-10-26T06:27:32Z',
          title:
            "I have been learning react for quite some time and I just recently came across the term React.memo() that helps us to optimize our functional components thus increase our application's performance. I understood what's it for but one thing I don't understand is that when to use it? does it make sense to use it in our every primary child components besides App.js?",
          number: 22623,
          createdAt: '2021-10-25T09:13:58Z',
        },
        {
          id: 'I_kwDOAJy2Ks49qPDG',
          author: { login: 'Attrash-Islam' },
          comments: { totalCount: 3 },
          labels: {
            nodes: [{ color: 'd4c5f9', name: 'Status: Unconfirmed' }],
            totalCount: 1,
          },
          closed: true,
          closedAt: '2021-10-24T18:33:25Z',
          title:
            'Bug: Installing latest use-sync-external-store output empty bundle',
          number: 22619,
          createdAt: '2021-10-24T18:22:40Z',
        },
        {
          id: 'I_kwDOAJy2Ks49pmmL',
          author: { login: 'carlos0406' },
          comments: { totalCount: 0 },
          labels: {
            nodes: [{ color: 'd4c5f9', name: 'Status: Unconfirmed' }],
            totalCount: 1,
          },
          closed: true,
          closedAt: '2021-10-24T03:56:17Z',
          title:
            'onchange on select with options in um map return the value into the option no value props from option',
          number: 22618,
          createdAt: '2021-10-24T03:47:18Z',
        },
        {
          id: 'I_kwDOAJy2Ks49jrLh',
          author: { login: 'bvaughn' },
          comments: { totalCount: 0 },
          labels: {
            nodes: [
              { color: 'fbca04', name: 'Component: Developer Tools' },
              { color: '1dc3d6', name: 'Component: Scheduling Profiler' },
            ],
            totalCount: 2,
          },
          closed: true,
          closedAt: '2021-10-21T19:16:26Z',
          title:
            'Scheduling Profiler flags useDeferredValue / useTransition updates as expensive',
          number: 22613,
          createdAt: '2021-10-21T17:44:39Z',
        },
        {
          id: 'I_kwDOAJy2Ks49jaB4',
          author: { login: 'Krishnag09' },
          comments: { totalCount: 1 },
          labels: {
            nodes: [
              { color: 'b60205', name: 'Type: Bug' },
              { color: 'cccccc', name: 'Resolution: Duplicate' },
              { color: 'd4c5f9', name: 'Status: Unconfirmed' },
              { color: 'fbca04', name: 'Component: Developer Tools' },
            ],
            totalCount: 4,
          },
          closed: true,
          closedAt: '2021-10-21T19:10:52Z',
          title:
            '[DevTools Bug] Cannot add node "1" because a node with that id is already in the Store.',
          number: 22612,
          createdAt: '2021-10-21T16:24:25Z',
        },
        {
          id: 'I_kwDOAJy2Ks49gsv7',
          author: { login: 'huyprowow' },
          comments: { totalCount: 3 },
          labels: {
            nodes: [
              { color: 'b60205', name: 'Type: Bug' },
              { color: 'd4c5f9', name: 'Status: Unconfirmed' },
              { color: 'fbca04', name: 'Component: Developer Tools' },
            ],
            totalCount: 3,
          },
          closed: true,
          closedAt: '2021-11-04T13:40:13Z',
          title:
            '[DevTools Bug] Cannot remove node "264" because no matching node was found in the Store.',
          number: 22611,
          createdAt: '2021-10-21T02:09:18Z',
        },
        {
          id: 'I_kwDOAJy2Ks49gePt',
          author: { login: 'lakshy-gupta' },
          comments: { totalCount: 3 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
            totalCount: 2,
          },
          closed: true,
          closedAt: '2021-10-21T19:13:33Z',
          title:
            "Importing from one's own file results in localhost not loading and eventually crashing tab",
          number: 22610,
          createdAt: '2021-10-20T23:56:50Z',
        },
        {
          id: 'I_kwDOAJy2Ks49gAvc',
          author: { login: 'kanto2113' },
          comments: { totalCount: 1 },
          labels: {
            nodes: [{ color: 'd4c5f9', name: 'Status: Unconfirmed' }],
            totalCount: 1,
          },
          closed: true,
          closedAt: '2021-10-20T20:56:05Z',
          title: "Builds Don't Work with PostCSS After Update.",
          number: 22606,
          createdAt: '2021-10-20T20:27:14Z',
        },
      ],
    },
    openIssues: {
      pageInfo: {
        hasNextPage: true,
        endCursor: 'Y3Vyc29yOnYyOpK5MjAyMS0xMC0xMFQxMTowOToyMC0wNDowMM486qGh',
        hasPreviousPage: true,
        startCursor: 'Y3Vyc29yOnYyOpK5MjAyMS0xMS0wNVQwNzoxNjo1OC0wNDowMM4-VG_1',
      },
      totalCount: 660,
      nodes: [
        {
          id: 'I_kwDOAJy2Ks4-VG_1',
          author: { login: 'Andarist' },
          comments: { totalCount: 3 },
          labels: {
            nodes: [
              { color: 'b60205', name: 'Type: Bug' },
              { color: 'd4c5f9', name: 'Status: Unconfirmed' },
              { color: 'fbca04', name: 'Component: Developer Tools' },
            ],
          },
          closed: false,
          title:
            '[DevTools Bug]: Components without own dimensions not highlighted at all',
          number: 22703,
          createdAt: '2021-11-05T11:16:58Z',
        },
        {
          id: 'I_kwDOAJy2Ks4-UYob',
          author: { login: '1291669609' },
          comments: { totalCount: 2 },
          labels: {
            nodes: [
              { color: 'b60205', name: 'Type: Bug' },
              { color: 'cccccc', name: 'Resolution: Duplicate' },
              { color: 'd4c5f9', name: 'Status: Unconfirmed' },
            ],
          },
          closed: false,
          title:
            "Bug: Failed to execute 'insertBefore' on 'Node' And Failed to execute 'removeChild' on 'Node' with Chrome translate",
          number: 22702,
          createdAt: '2021-11-05T07:42:28Z',
        },
        {
          id: 'I_kwDOAJy2Ks4-SmZM',
          author: { login: 'dilumst' },
          comments: { totalCount: 0 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
          },
          closed: false,
          title: 'Use html native event handler <img> with React SSR.',
          number: 22700,
          createdAt: '2021-11-04T18:21:57Z',
        },
        {
          id: 'I_kwDOAJy2Ks4-P_x8',
          author: { login: 'maraisr' },
          comments: { totalCount: 19 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
          },
          closed: false,
          title:
            '[React 18] Selective Hydration fails hydration when using context api',
          number: 22692,
          createdAt: '2021-11-04T05:34:09Z',
        },
        {
          id: 'I_kwDOAJy2Ks4-OUHo',
          author: { login: 'eps1lon' },
          comments: { totalCount: 2 },
          labels: {
            nodes: [
              { color: 'b60205', name: 'Type: Bug' },
              { color: 'd4c5f9', name: 'Status: Unconfirmed' },
              { color: 'fbca04', name: 'Component: Developer Tools' },
            ],
          },
          closed: false,
          title: '[DevTools Bug] dispatcher.useId is not a function',
          number: 22689,
          createdAt: '2021-11-03T18:31:39Z',
        },
        {
          id: 'I_kwDOAJy2Ks4-NLo3',
          author: { login: 'lilactown' },
          comments: { totalCount: 0 },
          labels: { nodes: [{ color: 'd4c5f9', name: 'Status: Unconfirmed' }] },
          closed: false,
          title: 'Bug: use-sync-external-store fails to install via npm',
          number: 22685,
          createdAt: '2021-11-03T14:06:08Z',
        },
        {
          id: 'I_kwDOAJy2Ks4-Mg_d',
          author: { login: 'simonjohansson' },
          comments: { totalCount: 1 },
          labels: { nodes: [{ color: 'd4c5f9', name: 'Status: Unconfirmed' }] },
          closed: false,
          title:
            'Bug: <picture> fetches both <source> and <img> image in Safari on macOS and iOS',
          number: 22684,
          createdAt: '2021-11-03T11:59:30Z',
        },
        {
          id: 'I_kwDOAJy2Ks4-BhD5',
          author: { login: 'jstejada' },
          comments: { totalCount: 3 },
          labels: {
            nodes: [{ color: 'fbca04', name: 'Component: Developer Tools' }],
          },
          closed: false,
          title:
            'Navigating to a new tab with DevTools open does not load Components tree',
          number: 22663,
          createdAt: '2021-10-31T21:21:16Z',
        },
        {
          id: 'I_kwDOAJy2Ks49_dhW',
          author: { login: 'sophiebits' },
          comments: { totalCount: 2 },
          labels: { nodes: [{ color: 'd4c5f9', name: 'Status: Unconfirmed' }] },
          closed: false,
          title:
            'Bug: "The above error…" should appear after the error message but appears before (for some errors)',
          number: 22656,
          createdAt: '2021-10-30T04:24:28Z',
        },
        {
          id: 'I_kwDOAJy2Ks497mrr',
          author: { login: 'andrew-w-ross' },
          comments: { totalCount: 1 },
          labels: { nodes: [{ color: 'b60205', name: 'Type: Bug' }] },
          closed: false,
          title:
            'React 18 - Internal React error if throwing on hook cleanup function.',
          number: 22650,
          createdAt: '2021-10-28T23:37:02Z',
        },
        {
          id: 'I_kwDOAJy2Ks496MA2',
          author: { login: 'bvaughn' },
          comments: { totalCount: 37 },
          labels: {
            nodes: [
              { color: 'f9d0c4', name: 'Component: Build Infrastructure' },
              { color: 'fbca04', name: 'Component: Developer Tools' },
            ],
          },
          closed: false,
          title: 'Add e2e tests for inline package',
          number: 22646,
          createdAt: '2021-10-28T15:38:19Z',
        },
        {
          id: 'I_kwDOAJy2Ks495yh0',
          author: { login: 'eps1lon' },
          comments: { totalCount: 0 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
          },
          closed: false,
          title:
            'React 18: hydrateRoot does not issue hydration warnings if initial children is missing',
          number: 22643,
          createdAt: '2021-10-28T14:03:30Z',
        },
        {
          id: 'I_kwDOAJy2Ks494Fgv',
          author: { login: 'RajrupDasid' },
          comments: { totalCount: 0 },
          labels: { nodes: [{ color: 'd4c5f9', name: 'Status: Unconfirmed' }] },
          closed: false,
          title:
            "Bug: Errno:-2; code:'ENOENT', why FF stable is set to detect first ? why not a choice?",
          number: 22641,
          createdAt: '2021-10-28T05:58:34Z',
        },
        {
          id: 'I_kwDOAJy2Ks493r0K',
          author: { login: 'ashidaharo' },
          comments: { totalCount: 5 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
          },
          closed: false,
          title:
            '[react-is] The major versions of react and react-is must be peerDependencies related.',
          number: 22640,
          createdAt: '2021-10-28T02:05:16Z',
        },
        {
          id: 'I_kwDOAJy2Ks492SSJ',
          author: { login: 'jstejada' },
          comments: { totalCount: 9 },
          labels: {
            nodes: [
              { color: 'b60205', name: 'Type: Bug' },
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: 'fbca04', name: 'Component: Developer Tools' },
            ],
          },
          closed: false,
          title: "DevTools can't load Components tree in Components Tab",
          number: 22636,
          createdAt: '2021-10-27T16:49:04Z',
        },
        {
          id: 'I_kwDOAJy2Ks491u27',
          author: { login: 'getsaf' },
          comments: { totalCount: 1 },
          labels: { nodes: [] },
          closed: false,
          title: 'Await detection in act() is not compatible with react-native',
          number: 22634,
          createdAt: '2021-10-27T14:29:46Z',
        },
        {
          id: 'I_kwDOAJy2Ks490vLc',
          author: { login: 'alicerocheman' },
          comments: { totalCount: 2 },
          labels: { nodes: [{ color: 'd4c5f9', name: 'Status: Unconfirmed' }] },
          closed: false,
          title:
            'Bug: `Cannot update a component (xxx) while rendering a different component (yyy)` on user click',
          number: 22633,
          createdAt: '2021-10-27T10:15:00Z',
        },
        {
          id: 'I_kwDOAJy2Ks49vGn7',
          author: { login: 'arackaf' },
          comments: { totalCount: 16 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
          },
          closed: false,
          title:
            'React 18 - waterfall suspensions re-trigger the Suspense boundary ',
          number: 22626,
          createdAt: '2021-10-26T02:36:18Z',
        },
        {
          id: 'I_kwDOAJy2Ks49fp8g',
          author: { login: 'ryandagg' },
          comments: { totalCount: 0 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
          },
          closed: false,
          title:
            'Feature request: react-hooks/exhaustive-deps option to require deps arg.',
          number: 22604,
          createdAt: '2021-10-20T18:25:42Z',
        },
        {
          id: 'I_kwDOAJy2Ks49fi-k',
          author: { login: 'eps1lon' },
          comments: { totalCount: 0 },
          labels: {
            nodes: [
              { color: 'd4c5f9', name: 'Status: Unconfirmed' },
              { color: 'fbca04', name: 'Component: Developer Tools' },
            ],
          },
          closed: false,
          title:
            'devtools: "What caused this update?" when a lazy component resolves',
          number: 22603,
          createdAt: '2021-10-20T17:56:50Z',
        },
        {
          id: 'I_kwDOAJy2Ks49Xydm',
          author: { login: 'jaymzh' },
          comments: { totalCount: 1 },
          labels: { nodes: [] },
          closed: false,
          title: '[ESLint]: react-hooks/exhaustive-deps feedback/bug?',
          number: 22581,
          createdAt: '2021-10-18T22:08:39Z',
        },
        {
          id: 'I_kwDOAJy2Ks49IXEd',
          author: { login: 'jstejada' },
          comments: { totalCount: 0 },
          labels: {
            nodes: [{ color: 'fbca04', name: 'Component: Developer Tools' }],
          },
          closed: false,
          title: 'Handle duplicate extensions in Firefox and Edge',
          number: 22552,
          createdAt: '2021-10-13T19:08:19Z',
        },
        {
          id: 'I_kwDOAJy2Ks48-8hW',
          author: { login: 'bvaughn' },
          comments: { totalCount: 3 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: 'fbca04', name: 'Component: Developer Tools' },
              { color: 'DAFA60', name: 'Size: Large' },
            ],
          },
          closed: false,
          title: 'Custom React-specific metadata format',
          number: 22540,
          createdAt: '2021-10-11T21:33:40Z',
        },
        {
          id: 'I_kwDOAJy2Ks489W2z',
          author: { login: 'FezVrasta' },
          comments: { totalCount: 0 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: 'f7afdb', name: 'Component: ESLint Rules' },
            ],
          },
          closed: false,
          title: 'Allow custom hooks to return stable results',
          number: 22539,
          createdAt: '2021-10-11T13:35:54Z',
        },
        {
          id: 'I_kwDOAJy2Ks486qGh',
          author: { login: 'pedro-gilmora' },
          comments: { totalCount: 2 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
          },
          closed: false,
          title: 'React 18 - `useState` invisible for end users',
          number: 22535,
          createdAt: '2021-10-10T15:09:20Z',
        },
      ],
    },
  },
};

const issuesOldestSortResponse = {
  repository: {
    milestones: {
      nodes: [
        {
          id: 'MDk6TWlsZXN0b25lMjkzNzc1Ng==',
          closed: false,
          description: '',
          number: 40,
          title: '18.0.0',
        },
      ],
      pageInfo: {
        startCursor: 'Y3Vyc29yOnYyOpHOACzTnA==',
        endCursor: 'Y3Vyc29yOnYyOpHOACzTnA==',
        hasNextPage: false,
        hasPreviousPage: false,
      },
      totalCount: 1,
    },
    closedIssues: {
      pageInfo: {
        hasNextPage: true,
        endCursor: 'Y3Vyc29yOnYyOpK5MjAxMy0wNi0xM1QyMTozNzowMy0wNDowMM4A7Rrg',
        hasPreviousPage: false,
        startCursor: 'Y3Vyc29yOnYyOpK5MjAxMy0wNS0yOVQyMzo0NjowMi0wNDowMM4A47jA',
      },
      totalCount: 10110,
      nodes: [
        {
          id: 'MDU6SXNzdWUxNDkyMzk2OA==',
          author: { login: 'jriecken' },
          comments: { totalCount: 3 },
          labels: { nodes: [], totalCount: 0 },
          closed: true,
          closedAt: '2013-05-30T12:14:18Z',
          title: "Can't require() react-tools module",
          number: 10,
          createdAt: '2013-05-30T03:46:02Z',
        },
        {
          id: 'MDU6SXNzdWUxNDkyNDc4Mw==',
          author: { login: 'zpao' },
          comments: { totalCount: 0 },
          labels: { nodes: [], totalCount: 0 },
          closed: true,
          closedAt: '2013-05-31T14:39:43Z',
          title: 'Write tests for react-tools module',
          number: 12,
          createdAt: '2013-05-30T04:32:10Z',
        },
        {
          id: 'MDU6SXNzdWUxNDkzODQ5Mg==',
          author: { login: 'mz121star' },
          comments: { totalCount: 4 },
          labels: { nodes: [], totalCount: 0 },
          closed: true,
          closedAt: '2013-07-21T17:08:03Z',
          title: 'must adding comments for JSX?',
          number: 16,
          createdAt: '2013-05-30T12:46:11Z',
        },
        {
          id: 'MDU6SXNzdWUxNDk0ODE5MA==',
          author: { login: 'necolas' },
          comments: { totalCount: 1 },
          labels: { nodes: [], totalCount: 0 },
          closed: true,
          closedAt: '2013-05-30T18:54:41Z',
          title: 'Small update to Bower command',
          number: 21,
          createdAt: '2013-05-30T16:01:55Z',
        },
        {
          id: 'MDU6SXNzdWUxNDk1MzcyNw==',
          author: { login: 'zpao' },
          comments: { totalCount: 1 },
          labels: { nodes: [], totalCount: 0 },
          closed: true,
          closedAt: '2013-07-21T17:08:47Z',
          title:
            'Fix docs Rake "update_version" command to strip trailing spaces',
          number: 24,
          createdAt: '2013-05-30T18:09:21Z',
        },
        {
          id: 'MDU6SXNzdWUxNDk1NjA0MA==',
          author: { login: 'andreypopp' },
          comments: { totalCount: 1 },
          labels: { nodes: [], totalCount: 0 },
          closed: true,
          closedAt: '2013-05-30T19:23:46Z',
          title: 'Make valid npm release',
          number: 26,
          createdAt: '2013-05-30T18:55:49Z',
        },
        {
          id: 'MDU6SXNzdWUxNDk2MTI3Mg==',
          author: { login: 'alvaromuir' },
          comments: { totalCount: 9 },
          labels: { nodes: [], totalCount: 0 },
          closed: true,
          closedAt: '2014-01-06T21:20:52Z',
          title: 'React in RequireJS ?',
          number: 28,
          createdAt: '2013-05-30T20:51:32Z',
        },
        {
          id: 'MDU6SXNzdWUxNTAzMTg1Mg==',
          author: { login: 'petehunt' },
          comments: { totalCount: 5 },
          labels: { nodes: [], totalCount: 0 },
          closed: true,
          closedAt: '2013-07-21T17:05:49Z',
          title: "Docs don't even mention reconciliation!",
          number: 37,
          createdAt: '2013-06-01T20:01:11Z',
        },
        {
          id: 'MDU6SXNzdWUxNTAzODExNQ==',
          author: { login: 'sophiebits' },
          comments: { totalCount: 8 },
          labels: { nodes: [], totalCount: 0 },
          closed: true,
          closedAt: '2013-07-24T20:12:30Z',
          title: 'Is es5-sham required for IE8?',
          number: 39,
          createdAt: '2013-06-02T09:08:10Z',
        },
        {
          id: 'MDU6SXNzdWUxNTA0MDQxNg==',
          author: { login: 'rtpdevelopers' },
          comments: { totalCount: 9 },
          labels: { nodes: [], totalCount: 0 },
          closed: true,
          closedAt: '2013-06-03T14:05:11Z',
          title: 'Uncaught SyntaxError: Unexpected token < ',
          number: 40,
          createdAt: '2013-06-02T13:27:44Z',
        },
        {
          id: 'MDU6SXNzdWUxNTA3ODMzMQ==',
          author: { login: 'edc' },
          comments: { totalCount: 33 },
          labels: {
            nodes: [{ color: '84b6eb', name: 'Type: Enhancement' }],
            totalCount: 1,
          },
          closed: true,
          closedAt: '2014-05-05T21:41:40Z',
          title: 'Work with compile-to-JS languages (like CoffeeScript)',
          number: 47,
          createdAt: '2013-06-03T17:27:33Z',
        },
        {
          id: 'MDU6SXNzdWUxNTA4MzU1Ng==',
          author: { login: 'subtleGradient' },
          comments: { totalCount: 2 },
          labels: { nodes: [], totalCount: 0 },
          closed: true,
          closedAt: '2013-07-21T17:11:24Z',
          title: 'The name "JSX" is already taken, use "XJS" instead?',
          number: 50,
          createdAt: '2013-06-03T19:14:14Z',
        },
        {
          id: 'MDU6SXNzdWUxNTE0OTU1Nw==',
          author: { login: 'hojberg' },
          comments: { totalCount: 12 },
          labels: { nodes: [], totalCount: 0 },
          closed: true,
          closedAt: '2013-07-03T00:21:41Z',
          title: 'jsx not able to watch subdirs',
          number: 60,
          createdAt: '2013-06-05T01:15:21Z',
        },
        {
          id: 'MDU6SXNzdWUxNTE4MTMxMw==',
          author: { login: 'amanjeev' },
          comments: { totalCount: 1 },
          labels: { nodes: [], totalCount: 0 },
          closed: true,
          closedAt: '2013-06-05T17:04:29Z',
          title: 'JSX page gives 404 - linked from "Why React" blog post',
          number: 64,
          createdAt: '2013-06-05T16:53:52Z',
        },
        {
          id: 'MDU6SXNzdWUxNTE4NTkzMQ==',
          author: { login: 'plecong' },
          comments: { totalCount: 12 },
          labels: { nodes: [], totalCount: 0 },
          closed: true,
          closedAt: '2014-02-13T09:37:53Z',
          title: 'JSX whitespace coalescing should work like regular HTML',
          number: 65,
          createdAt: '2013-06-05T18:34:52Z',
        },
        {
          id: 'MDU6SXNzdWUxNTI0MzY4Nw==',
          author: { login: 'jordwalke' },
          comments: { totalCount: 3 },
          labels: { nodes: [], totalCount: 0 },
          closed: true,
          closedAt: '2013-07-01T05:53:36Z',
          title: 'Automatically bind scope of all user provided methods.',
          number: 70,
          createdAt: '2013-06-06T20:31:47Z',
        },
        {
          id: 'MDU6SXNzdWUxNTI4MjMxNw==',
          author: { login: 'akrieger' },
          comments: { totalCount: 28 },
          labels: { nodes: [], totalCount: 0 },
          closed: true,
          closedAt: '2013-07-03T00:21:41Z',
          title:
            'jsx offline transform exits with error code 1 on any change (Ubuntu 12.10)',
          number: 71,
          createdAt: '2013-06-07T17:13:45Z',
        },
        {
          id: 'MDU6SXNzdWUxNTI5NTgwNA==',
          author: { login: 'sophiebits' },
          comments: { totalCount: 9 },
          labels: {
            nodes: [{ color: '84b6eb', name: 'Type: Enhancement' }],
            totalCount: 1,
          },
          closed: true,
          closedAt: '2014-05-22T22:51:49Z',
          title: 'Allow namespacing in component names in JSX',
          number: 74,
          createdAt: '2013-06-07T23:09:22Z',
        },
        {
          id: 'MDU6SXNzdWUxNTMyNzE4Nw==',
          author: { login: 'sophiebits' },
          comments: { totalCount: 2 },
          labels: { nodes: [], totalCount: 0 },
          closed: true,
          closedAt: '2013-06-11T20:10:06Z',
          title: 'Ordering of componentDidMount events',
          number: 76,
          createdAt: '2013-06-09T22:45:11Z',
        },
        {
          id: 'MDU6SXNzdWUxNTM2NjI1MA==',
          author: { login: 'jordwalke' },
          comments: { totalCount: 3 },
          labels: { nodes: [], totalCount: 0 },
          closed: true,
          closedAt: '2013-07-22T17:06:48Z',
          title: 'Preserve line numbers in "grunt test"',
          number: 78,
          createdAt: '2013-06-10T20:11:18Z',
        },
        {
          id: 'MDU6SXNzdWUxNTM4Nzk5NA==',
          author: { login: 'jordwalke' },
          comments: { totalCount: 6 },
          labels: { nodes: [], totalCount: 0 },
          closed: true,
          closedAt: '2013-07-01T06:05:50Z',
          title: 'grunt test just hangs',
          number: 79,
          createdAt: '2013-06-11T08:27:38Z',
        },
        {
          id: 'MDU6SXNzdWUxNTQwNzQ1Mw==',
          author: { login: 'benjamn' },
          comments: { totalCount: 2 },
          labels: {
            nodes: [{ color: '84b6eb', name: 'Type: Enhancement' }],
            totalCount: 1,
          },
          closed: true,
          closedAt: '2013-06-11T23:22:18Z',
          title:
            'bin/jsx should not relativize required module IDs unless --relativize is passed',
          number: 80,
          createdAt: '2013-06-11T16:17:39Z',
        },
        {
          id: 'MDU6SXNzdWUxNTQyMTAwNQ==',
          author: { login: 'zpao' },
          comments: { totalCount: 2 },
          labels: { nodes: [], totalCount: 0 },
          closed: true,
          closedAt: '2013-06-28T21:41:18Z',
          title: 'Support comments in JSX',
          number: 82,
          createdAt: '2013-06-11T20:35:31Z',
        },
        {
          id: 'MDU6SXNzdWUxNTQyNjYyMw==',
          author: { login: 'benjamn' },
          comments: { totalCount: 3 },
          labels: {
            nodes: [{ color: '84b6eb', name: 'Type: Enhancement' }],
            totalCount: 1,
          },
          closed: true,
          closedAt: '2013-11-06T21:19:34Z',
          title:
            'Add a demo using .coffee files to implement a React component',
          number: 83,
          createdAt: '2013-06-11T22:45:50Z',
        },
        {
          id: 'MDU6SXNzdWUxNTUzODkxMg==',
          author: { login: 'zpao' },
          comments: { totalCount: 1 },
          labels: { nodes: [], totalCount: 0 },
          closed: true,
          closedAt: '2013-06-14T21:39:10Z',
          title: 'Mocking not working with EventPluginRegistry',
          number: 90,
          createdAt: '2013-06-14T01:37:03Z',
        },
      ],
    },
    openIssues: {
      pageInfo: {
        hasNextPage: true,
        endCursor: 'Y3Vyc29yOnYyOpK5MjAxNi0wNS0zMVQwMjo0MDoxMy0wNDowMM4JZMlF',
        hasPreviousPage: false,
        startCursor: 'Y3Vyc29yOnYyOpK5MjAxMy0wOC0yMVQxNzo0MToyNi0wNDowMM4BGH3U',
      },
      totalCount: 660,
      nodes: [
        {
          id: 'MDU6SXNzdWUxODM4MjI5Mg==',
          author: { login: 'sophiebits' },
          comments: { totalCount: 59 },
          labels: {
            nodes: [
              { color: 'c7def8', name: 'Type: Feature Request' },
              { color: 'fef2c0', name: 'Component: DOM' },
              { color: '9dd1e8', name: 'Resolution: Backlog' },
              { color: 'e4bef7', name: 'Partner' },
            ],
          },
          closed: false,
          title: 'Declarative API for installing global DOM event handlers',
          number: 285,
          createdAt: '2013-08-21T21:41:26Z',
        },
        {
          id: 'MDU6SXNzdWUyODA4NjgwOA==',
          author: { login: 'ericflo' },
          comments: { totalCount: 81 },
          labels: {
            nodes: [
              { color: 'b60205', name: 'Type: Bug' },
              { color: 'fef2c0', name: 'Component: DOM' },
            ],
          },
          closed: false,
          title:
            'Provide a way to handle browser-autocompleted form values on controlled components',
          number: 1159,
          createdAt: '2014-02-22T02:05:11Z',
        },
        {
          id: 'MDU6SXNzdWUyOTMwNTIwNA==',
          author: { login: 'matthewwithanm' },
          comments: { totalCount: 8 },
          labels: {
            nodes: [
              { color: 'b60205', name: 'Type: Bug' },
              { color: 'fef2c0', name: 'Component: DOM' },
            ],
          },
          closed: false,
          title: 'iframe contents cause invariant violation',
          number: 1253,
          createdAt: '2014-03-12T21:35:00Z',
        },
        {
          id: 'MDU6SXNzdWUyOTQ2NzcxMA==',
          author: { login: 'zpao' },
          comments: { totalCount: 27 },
          labels: {
            nodes: [
              { color: 'c7def8', name: 'Type: Feature Request' },
              { color: 'fef2c0', name: 'Component: DOM' },
              { color: '9dd1e8', name: 'Resolution: Backlog' },
              { color: 'e4bef7', name: 'Partner' },
            ],
          },
          closed: false,
          title: 'Stop doing data-*, aria-*, start using dataSet',
          number: 1259,
          createdAt: '2014-03-14T20:30:18Z',
        },
        {
          id: 'MDU6SXNzdWUzMDkwMDAwNw==',
          author: { login: 'sophiebits' },
          comments: { totalCount: 12 },
          labels: {
            nodes: [
              { color: '84b6eb', name: 'Type: Enhancement' },
              { color: 'fef2c0', name: 'Component: DOM' },
              { color: 'e4bef7', name: 'Partner' },
            ],
          },
          closed: false,
          title: "touchmove doesn't fire on removed element",
          number: 1355,
          createdAt: '2014-04-04T22:32:30Z',
        },
        {
          id: 'MDU6SXNzdWUzNjM3OTQwNA==',
          author: { login: 'fdecampredon' },
          comments: { totalCount: 144 },
          labels: {
            nodes: [
              { color: 'c7def8', name: 'Type: Feature Request' },
              { color: 'd4c5f9', name: 'Component: Server Rendering' },
              { color: 'd4c5f9', name: 'Component: Component API' },
              { color: '9dd1e8', name: 'Resolution: Backlog' },
            ],
          },
          closed: false,
          title:
            'Support asynchronous server rendering (waiting for data before rendering)',
          number: 1739,
          createdAt: '2014-06-24T12:36:38Z',
        },
        {
          id: 'MDU6SXNzdWUzNzIwMTM3NA==',
          author: { login: 'bmeck' },
          comments: { totalCount: 12 },
          labels: {
            nodes: [
              { color: 'c7def8', name: 'Type: Feature Request' },
              { color: 'fef2c0', name: 'Component: DOM' },
              { color: '9dd1e8', name: 'Resolution: Backlog' },
            ],
          },
          closed: false,
          title: 'Add api for focus management',
          number: 1791,
          createdAt: '2014-07-05T16:05:32Z',
        },
        {
          id: 'MDU6SXNzdWU0Mjc0MTA2OQ==',
          author: { login: 'Daniel15' },
          comments: { totalCount: 6 },
          labels: {
            nodes: [
              { color: 'b60205', name: 'Type: Bug' },
              { color: 'fef2c0', name: 'Component: DOM' },
            ],
          },
          closed: false,
          title:
            'getEventKey implementation inconsistent with DOM3 spec / Firefox implementation',
          number: 2193,
          createdAt: '2014-09-15T04:41:21Z',
        },
        {
          id: 'MDU6SXNzdWU1ODQ4ODMzOQ==',
          author: { login: 'sebmarkbage' },
          comments: { totalCount: 6 },
          labels: {
            nodes: [
              { color: 'bfdadc', name: 'Component: Optimizing Compiler' },
              { color: '9dd1e8', name: 'Resolution: Backlog' },
              { color: '9149d1', name: 'React Core Team' },
            ],
          },
          closed: false,
          title: 'Optimizing Compiler: Tagging ReactElements',
          number: 3227,
          createdAt: '2015-02-22T03:21:18Z',
        },
        {
          id: 'MDU6SXNzdWU3ODg1NDU5MQ==',
          author: { login: 'chenxsan' },
          comments: { totalCount: 49 },
          labels: {
            nodes: [
              { color: 'b60205', name: 'Type: Bug' },
              { color: 'fef2c0', name: 'Component: DOM' },
            ],
          },
          closed: false,
          title: 'Change event fires extra times before IME composition ends',
          number: 3926,
          createdAt: '2015-05-21T06:30:30Z',
        },
        {
          id: 'MDU6SXNzdWU4MTQyNDA0Mw==',
          author: { login: 'dantman' },
          comments: { totalCount: 39 },
          labels: {
            nodes: [
              { color: 'c7def8', name: 'Type: Feature Request' },
              { color: 'd4c5f9', name: 'Component: Component API' },
              { color: '9dd1e8', name: 'Resolution: Backlog' },
            ],
          },
          closed: false,
          title: 'Support for reparenting',
          number: 3965,
          createdAt: '2015-05-27T12:14:07Z',
        },
        {
          id: 'MDU6SXNzdWU4OTE5OTgyNg==',
          author: { login: 'sebmarkbage' },
          comments: { totalCount: 0 },
          labels: {
            nodes: [
              { color: '84b6eb', name: 'Type: Enhancement' },
              { color: 'fef2c0', name: 'Component: DOM' },
              { color: '9149d1', name: 'React Core Team' },
            ],
          },
          closed: false,
          title:
            'Use Inline Event Handlers for trapBubbledEventsLocal and the iOS Safari Click Hack',
          number: 4166,
          createdAt: '2015-06-18T05:00:09Z',
        },
        {
          id: 'MDU6SXNzdWUxMDAxNDUzNTk=',
          author: { login: 'sebmarkbage' },
          comments: { totalCount: 5 },
          labels: {
            nodes: [
              { color: '61dafb', name: 'Type: Big Picture' },
              { color: '9149d1', name: 'React Core Team' },
            ],
          },
          closed: false,
          title: 'Include DevTools as Public API',
          number: 4593,
          createdAt: '2015-08-10T19:13:05Z',
        },
        {
          id: 'MDU6SXNzdWUxMDAxNTgwMzE=',
          author: { login: 'sebmarkbage' },
          comments: { totalCount: 2 },
          labels: {
            nodes: [
              { color: '61dafb', name: 'Type: Big Picture' },
              { color: '9149d1', name: 'React Core Team' },
            ],
          },
          closed: false,
          title: 'Hibernating State (Not Necessarily Serialized)',
          number: 4594,
          createdAt: '2015-08-10T20:09:41Z',
        },
        {
          id: 'MDU6SXNzdWUxMDAxNjI0Nzk=',
          author: { login: 'sebmarkbage' },
          comments: { totalCount: 40 },
          labels: {
            nodes: [
              { color: '61dafb', name: 'Type: Big Picture' },
              { color: '9149d1', name: 'React Core Team' },
            ],
          },
          closed: false,
          title: 'Externalize the State Tree (or alternatives)',
          number: 4595,
          createdAt: '2015-08-10T20:32:19Z',
        },
        {
          id: 'MDU6SXNzdWUxMDQxNzExNTc=',
          author: { login: 'sebmarkbage' },
          comments: { totalCount: 11 },
          labels: {
            nodes: [
              { color: '61dafb', name: 'Type: Big Picture' },
              { color: '9149d1', name: 'React Core Team' },
            ],
          },
          closed: false,
          title:
            "Play Nicely with The DOM Event System (because it's legacy anyway)",
          number: 4751,
          createdAt: '2015-09-01T02:25:32Z',
        },
        {
          id: 'MDU6SXNzdWUxMjMzMTExNTA=',
          author: { login: 'srayuws' },
          comments: { totalCount: 6 },
          labels: {
            nodes: [
              { color: 'b60205', name: 'Type: Bug' },
              { color: 'c7def8', name: 'Browser: IE' },
            ],
          },
          closed: false,
          title:
            "DataTransfer's dropEffect not working on IE/Edge with not minified version react.js",
          number: 5700,
          createdAt: '2015-12-21T16:28:31Z',
        },
        {
          id: 'MDU6SXNzdWUxMzkzNTk5ODg=',
          author: { login: 'aleclarson' },
          comments: { totalCount: 18 },
          labels: {
            nodes: [
              { color: 'b60205', name: 'Type: Bug' },
              { color: 'fef2c0', name: 'Component: DOM' },
            ],
          },
          closed: false,
          title: 'onResponderGrant called before onResponderTerminate',
          number: 6217,
          createdAt: '2016-03-08T18:46:34Z',
        },
        {
          id: 'MDU6SXNzdWUxNDE1NzYzNjI=',
          author: { login: 'insonifi' },
          comments: { totalCount: 9 },
          labels: {
            nodes: [
              { color: 'b60205', name: 'Type: Bug' },
              { color: 'fef2c0', name: 'Component: DOM' },
            ],
          },
          closed: false,
          title: "Form input name='nodeName' breaks onSubmit event handling",
          number: 6284,
          createdAt: '2016-03-17T12:58:47Z',
        },
        {
          id: 'MDU6SXNzdWUxNDMwODkxMzQ=',
          author: { login: 'sebmarkbage' },
          comments: { totalCount: 0 },
          labels: {
            nodes: [
              { color: 'c7def8', name: 'Type: Feature Request' },
              { color: 'fef2c0', name: 'Component: DOM' },
              { color: '9149d1', name: 'React Core Team' },
            ],
          },
          closed: false,
          title:
            'Consider Special Casing Certain DOM Attributes to Accept Elements',
          number: 6325,
          createdAt: '2016-03-23T21:52:14Z',
        },
        {
          id: 'MDU6SXNzdWUxNDY3MTA2OTM=',
          author: { login: 'sebmarkbage' },
          comments: { totalCount: 62 },
          labels: {
            nodes: [
              { color: 'c7def8', name: 'Type: Feature Request' },
              { color: 'fef2c0', name: 'Component: DOM' },
              { color: '61dafb', name: 'Type: Big Picture' },
              { color: '9149d1', name: 'React Core Team' },
            ],
          },
          closed: false,
          title: 'Support Passive Event Listeners',
          number: 6436,
          createdAt: '2016-04-07T18:42:47Z',
        },
        {
          id: 'MDU6SXNzdWUxNDkxNjg5NjA=',
          author: { login: 'pirelenito' },
          comments: { totalCount: 7 },
          labels: {
            nodes: [
              { color: 'b60205', name: 'Type: Bug' },
              { color: 'fef2c0', name: 'Component: DOM' },
            ],
          },
          closed: false,
          title:
            "Iframe load event not firing in Chrome and Safari when src is 'about:blank'",
          number: 6541,
          createdAt: '2016-04-18T14:35:13Z',
        },
        {
          id: 'MDU6SXNzdWUxNTI2NjcxMzg=',
          author: { login: 'sebmarkbage' },
          comments: { totalCount: 1 },
          labels: {
            nodes: [
              { color: '84b6eb', name: 'Type: Enhancement' },
              { color: '9149d1', name: 'React Core Team' },
            ],
          },
          closed: false,
          title: 'RFC: Configure Warning Levels Using ENV Variable',
          number: 6683,
          createdAt: '2016-05-02T23:17:24Z',
        },
        {
          id: 'MDU6SXNzdWUxNTU3NzYyMzE=',
          author: null,
          comments: { totalCount: 17 },
          labels: {
            nodes: [
              { color: 'cc317c', name: 'Type: Question' },
              { color: 'fef2c0', name: 'Component: DOM' },
            ],
          },
          closed: false,
          title: "onMouseLeave doesn't work if the node gets detached",
          number: 6807,
          createdAt: '2016-05-19T16:10:59Z',
        },
        {
          id: 'MDU6SXNzdWUxNTc2MDAwNjk=',
          author: { login: 'suhaotian' },
          comments: { totalCount: 0 },
          labels: {
            nodes: [
              { color: 'b60205', name: 'Type: Bug' },
              { color: 'c7def8', name: 'Browser: IE' },
              { color: 'fef2c0', name: 'Component: DOM' },
            ],
          },
          closed: false,
          title:
            'Change event fires too many times when inputing Chinese characters in IE 9',
          number: 6927,
          createdAt: '2016-05-31T06:40:13Z',
        },
      ],
    },
  },
};

const issuesLabelResponse = {
  repository: {
    milestones: {
      nodes: [
        {
          id: 'MDk6TWlsZXN0b25lMjkzNzc1Ng==',
          closed: false,
          description: '',
          number: 40,
          title: '18.0.0',
        },
      ],
      pageInfo: {
        startCursor: 'Y3Vyc29yOnYyOpHOACzTnA==',
        endCursor: 'Y3Vyc29yOnYyOpHOACzTnA==',
        hasNextPage: false,
        hasPreviousPage: false,
      },
      totalCount: 1,
    },
    closedIssues: {
      pageInfo: {
        hasNextPage: true,
        endCursor: 'Y3Vyc29yOnYyOpK5MjAyMS0wOC0yMlQwMzowNzo1OC0wNDowMM46MTz7',
        hasPreviousPage: false,
        startCursor: 'Y3Vyc29yOnYyOpK5MjAyMS0xMi0wN1QxNDo1Nzo0MC0wNTowMM4__4LQ',
      },
      totalCount: 42,
      nodes: [
        {
          id: 'I_kwDOAJy2Ks4__4LQ',
          author: { login: 'killjoy2013' },
          comments: { totalCount: 2 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
            totalCount: 2,
          },
          closed: true,
          closedAt: '2021-12-07T20:48:43Z',
          title: 'React 18 ',
          number: 22877,
          createdAt: '2021-12-07T19:57:40Z',
        },
        {
          id: 'I_kwDOAJy2Ks4_3neY',
          author: { login: 'djmisterjon' },
          comments: { totalCount: 5 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
            totalCount: 2,
          },
          closed: true,
          closedAt: '2021-12-06T14:01:40Z',
          title: 'Why React change keys with dot dollar ? ".$"',
          number: 22870,
          createdAt: '2021-12-05T20:01:17Z',
        },
        {
          id: 'I_kwDOAJy2Ks4_wwW1',
          author: { login: 'Royalchampion' },
          comments: { totalCount: 4 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
            totalCount: 2,
          },
          closed: true,
          closedAt: '2021-12-03T10:50:19Z',
          title: 'req.body is showing me object in reverse order.',
          number: 22861,
          createdAt: '2021-12-02T16:26:47Z',
        },
        {
          id: 'I_kwDOAJy2Ks4_ek1f',
          author: { login: 'TkDodo' },
          comments: { totalCount: 4 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
            totalCount: 2,
          },
          closed: true,
          closedAt: '2021-11-27T11:51:26Z',
          title: 'React 18: Unexpected component unmounting in Strict Mode',
          number: 22839,
          createdAt: '2021-11-27T11:05:30Z',
        },
        {
          id: 'I_kwDOAJy2Ks4_OkgP',
          author: { login: 'xiejay97' },
          comments: { totalCount: 6 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
            totalCount: 2,
          },
          closed: true,
          closedAt: '2021-11-23T13:59:25Z',
          title:
            'React 18 It possible that automatic batching work when using await that like `await false`?',
          number: 22811,
          createdAt: '2021-11-23T02:50:59Z',
        },
        {
          id: 'I_kwDOAJy2Ks4_H1ra',
          author: { login: 'franciscop' },
          comments: { totalCount: 8 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
            totalCount: 2,
          },
          closed: true,
          closedAt: '2021-11-22T15:17:40Z',
          title:
            'Library compatible since hooks, should it be `"^16.8.0 || ^17.0.0 || ^18.0.0"` or `">=16.8"`?',
          number: 22795,
          createdAt: '2021-11-20T00:54:02Z',
        },
        {
          id: 'I_kwDOAJy2Ks4-8MbN',
          author: { login: 'eps1lon' },
          comments: { totalCount: 2 },
          labels: {
            nodes: [
              { color: 'b60205', name: 'Type: Bug' },
              { color: 'd4c5f9', name: 'Status: Unconfirmed' },
              { color: '26B0E4', name: 'React 18' },
            ],
            totalCount: 3,
          },
          closed: true,
          closedAt: '2021-11-23T23:45:35Z',
          title: 'React 18 Bug: Hydration mismatch if empty string is rendered',
          number: 22784,
          createdAt: '2021-11-17T10:35:28Z',
        },
        {
          id: 'I_kwDOAJy2Ks4-5KZd',
          author: { login: 'rattleSSnake' },
          comments: { totalCount: 1 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
            totalCount: 2,
          },
          closed: true,
          closedAt: '2021-11-22T14:32:12Z',
          title: 'Suggestion for React',
          number: 22775,
          createdAt: '2021-11-16T18:04:53Z',
        },
        {
          id: 'I_kwDOAJy2Ks4-1dQs',
          author: { login: 'ljosberinn' },
          comments: { totalCount: 1 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
            totalCount: 2,
          },
          closed: true,
          closedAt: '2021-11-15T23:50:17Z',
          title:
            'React 18 - SuspenseList no longer exported in latest @next version (`18.0.0-beta-96ca8d915-20211115`)',
          number: 22771,
          createdAt: '2021-11-15T22:45:56Z',
        },
        {
          id: 'I_kwDOAJy2Ks498Nb7',
          author: { login: 'chahakshah111' },
          comments: { totalCount: 2 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
            totalCount: 2,
          },
          closed: true,
          closedAt: '2021-10-29T06:26:59Z',
          title: 'removeEventListner is not working in useEffect return.',
          number: 22651,
          createdAt: '2021-10-29T05:51:44Z',
        },
        {
          id: 'I_kwDOAJy2Ks49rwYx',
          author: { login: 'Royalchampion' },
          comments: { totalCount: 3 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
            totalCount: 2,
          },
          closed: true,
          closedAt: '2021-10-26T06:27:32Z',
          title:
            "I have been learning react for quite some time and I just recently came across the term React.memo() that helps us to optimize our functional components thus increase our application's performance. I understood what's it for but one thing I don't understand is that when to use it? does it make sense to use it in our every primary child components besides App.js?",
          number: 22623,
          createdAt: '2021-10-25T09:13:58Z',
        },
        {
          id: 'I_kwDOAJy2Ks49gePt',
          author: { login: 'lakshy-gupta' },
          comments: { totalCount: 3 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
            totalCount: 2,
          },
          closed: true,
          closedAt: '2021-10-21T19:13:33Z',
          title:
            "Importing from one's own file results in localhost not loading and eventually crashing tab",
          number: 22610,
          createdAt: '2021-10-20T23:56:50Z',
        },
        {
          id: 'I_kwDOAJy2Ks48NjKU',
          author: { login: 'crodriguez-plitzi' },
          comments: { totalCount: 1 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
            totalCount: 2,
          },
          closed: true,
          closedAt: '2021-09-29T13:47:20Z',
          title: '[Proposal] useState Get Callback',
          number: 22454,
          createdAt: '2021-09-28T20:36:39Z',
        },
        {
          id: 'I_kwDOAJy2Ks48Dyib',
          author: { login: 'MaxmaxmaximusAWS' },
          comments: { totalCount: 6 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
            totalCount: 2,
          },
          closed: true,
          closedAt: '2021-09-27T17:42:33Z',
          title: 'React 18  lets React.memo save displayName?',
          number: 22436,
          createdAt: '2021-09-27T02:48:14Z',
        },
        {
          id: 'I_kwDOAJy2Ks48BxGR',
          author: { login: 'artem-malko' },
          comments: { totalCount: 2 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
            totalCount: 2,
          },
          closed: true,
          closedAt: '2021-09-27T09:53:20Z',
          title: 'React 18 and headers changing during streaming',
          number: 22427,
          createdAt: '2021-09-25T14:09:31Z',
        },
        {
          id: 'I_kwDOAJy2Ks476mWR',
          author: { login: 'VincentLebrun' },
          comments: { totalCount: 1 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
            totalCount: 2,
          },
          closed: true,
          closedAt: '2021-09-23T16:13:37Z',
          title: 'React 18  context',
          number: 22406,
          createdAt: '2021-09-23T09:39:10Z',
        },
        {
          id: 'I_kwDOAJy2Ks47pZT9',
          author: { login: 'eps1lon' },
          comments: { totalCount: 7 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
            totalCount: 2,
          },
          closed: true,
          closedAt: '2021-09-20T16:32:33Z',
          title:
            'React 18: hydration mismatch when an external store is updated in an effect',
          number: 22361,
          createdAt: '2021-09-20T08:35:04Z',
        },
        {
          id: 'MDU6SXNzdWU5OTUwOTUxMzE=',
          author: { login: 'aman-ragh' },
          comments: { totalCount: 1 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
            totalCount: 2,
          },
          closed: true,
          closedAt: '2021-09-13T17:05:29Z',
          title: 'React 18 ',
          number: 22304,
          createdAt: '2021-09-13T16:32:44Z',
        },
        {
          id: 'MDU6SXNzdWU5OTA3OTgwNjQ=',
          author: { login: 'scarqin' },
          comments: { totalCount: 1 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
            totalCount: 2,
          },
          closed: true,
          closedAt: '2021-09-08T07:16:24Z',
          title: 'React 18 test',
          number: 22268,
          createdAt: '2021-09-08T07:15:57Z',
        },
        {
          id: 'MDU6SXNzdWU5ODk2NTU5NTQ=',
          author: { login: 'QJerryxjh' },
          comments: { totalCount: 32 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: 'fbca04', name: 'Component: Developer Tools' },
              { color: '26B0E4', name: 'React 18' },
            ],
            totalCount: 3,
          },
          closed: true,
          closedAt: '2021-09-30T14:02:40Z',
          title: 'Console log shows the wrong destination file ',
          number: 22257,
          createdAt: '2021-09-07T06:55:50Z',
        },
        {
          id: 'MDU6SXNzdWU5ODc5MjAwNjM=',
          author: { login: 'jacobp100' },
          comments: { totalCount: 3 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
            totalCount: 2,
          },
          closed: true,
          closedAt: '2021-09-06T20:41:01Z',
          title:
            'React 18 Fallback not showing with useTransition after delay exceeds timeoutMs',
          number: 22242,
          createdAt: '2021-09-03T16:08:30Z',
        },
        {
          id: 'MDU6SXNzdWU5ODM4MjU5Nzc=',
          author: { login: 'Shyam268' },
          comments: { totalCount: 1 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
            totalCount: 2,
          },
          closed: true,
          closedAt: '2021-08-31T21:28:48Z',
          title:
            'React 17 npm run build does not copy the assets folder to dist',
          number: 22222,
          createdAt: '2021-08-31T12:51:37Z',
        },
        {
          id: 'MDU6SXNzdWU5ODI0MTkxNDM=',
          author: { login: 'zdu-strong' },
          comments: { totalCount: 1 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
            totalCount: 2,
          },
          closed: true,
          closedAt: '2021-08-30T14:32:38Z',
          title: 'Suggestion: React 18 (PureComponent)',
          number: 22209,
          createdAt: '2021-08-30T05:59:36Z',
        },
        {
          id: 'MDU6SXNzdWU5ODEzNTk1NTc=',
          author: { login: 'tejadasari985' },
          comments: { totalCount: 1 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
            totalCount: 2,
          },
          closed: true,
          closedAt: '2021-08-27T17:17:15Z',
          title: 'React 18 ',
          number: 22189,
          createdAt: '2021-08-27T15:27:34Z',
        },
        {
          id: 'MDU6SXNzdWU5NzYzMDU0MDM=',
          author: { login: 'Padmanabh82' },
          comments: { totalCount: 5 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
            totalCount: 2,
          },
          closed: true,
          closedAt: '2021-08-23T18:34:56Z',
          title: 'React 18 and next.js',
          number: 22153,
          createdAt: '2021-08-22T07:07:58Z',
        },
      ],
    },
    openIssues: {
      pageInfo: {
        hasNextPage: true,
        endCursor: 'Y3Vyc29yOnYyOpK5MjAyMS0wNi0xM1QyMzo0MzowNy0wNDowMM421Z_v',
        hasPreviousPage: false,
        startCursor: 'Y3Vyc29yOnYyOpK5MjAyMS0xMS0yNlQyMTozMjo1Ni0wNTowMM4_eNqD',
      },
      totalCount: 28,
      nodes: [
        {
          id: 'I_kwDOAJy2Ks4_eNqD',
          author: { login: 'theKashey' },
          comments: { totalCount: 2 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
          },
          closed: false,
          title: 'React 18: How to "wait" for concurrent mode',
          number: 22836,
          createdAt: '2021-11-27T02:32:56Z',
        },
        {
          id: 'I_kwDOAJy2Ks4_asXN',
          author: { login: 'eps1lon' },
          comments: { totalCount: 3 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
          },
          closed: false,
          title:
            'React 18: Non-recoverable hydration mismatch if mismatch occurs in the same boundary as main script',
          number: 22833,
          createdAt: '2021-11-25T23:16:17Z',
        },
        {
          id: 'I_kwDOAJy2Ks4_ISTn',
          author: { login: 'eps1lon' },
          comments: { totalCount: 0 },
          labels: {
            nodes: [
              { color: 'b60205', name: 'Type: Bug' },
              { color: 'd4c5f9', name: 'Status: Unconfirmed' },
              { color: '26B0E4', name: 'React 18' },
            ],
          },
          closed: false,
          title:
            'React 18 Bug: react-dom/server "Detected multiple renderers..." if preceeded by react-test-renderer',
          number: 22796,
          createdAt: '2021-11-20T12:40:28Z',
        },
        {
          id: 'I_kwDOAJy2Ks4_HAlE',
          author: { login: 'YuriGor' },
          comments: { totalCount: 4 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
          },
          closed: false,
          title: 'React 18 not passive wheel / touch event listeners support',
          number: 22794,
          createdAt: '2021-11-19T18:26:12Z',
        },
        {
          id: 'I_kwDOAJy2Ks4_GRni',
          author: { login: 'blittle' },
          comments: { totalCount: 9 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
          },
          closed: false,
          title: "React 18 doesn't wait for long running suspended promises",
          number: 22791,
          createdAt: '2021-11-19T14:47:07Z',
        },
        {
          id: 'I_kwDOAJy2Ks4-1dRj',
          author: { login: 'jplhomer' },
          comments: { totalCount: 2 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
          },
          closed: false,
          title:
            'React 18: "The stream is not in a state that permits close" in `renderToReadableStream`',
          number: 22772,
          createdAt: '2021-11-15T22:45:59Z',
        },
        {
          id: 'I_kwDOAJy2Ks4-isCf',
          author: { login: 'theKashey' },
          comments: { totalCount: 3 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
          },
          closed: false,
          title: 'React 18 requests similar component trees for the useId',
          number: 22733,
          createdAt: '2021-11-10T00:56:11Z',
        },
        {
          id: 'I_kwDOAJy2Ks4-aKNA',
          author: { login: 'yg-yash' },
          comments: { totalCount: 1 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
          },
          closed: false,
          title:
            'How to resuse same component without remounting it and access anywhere in dom tree?',
          number: 22721,
          createdAt: '2021-11-08T05:49:03Z',
        },
        {
          id: 'I_kwDOAJy2Ks4-SmZM',
          author: { login: 'dilumst' },
          comments: { totalCount: 0 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
          },
          closed: false,
          title: 'Use html native event handler <img> with React SSR.',
          number: 22700,
          createdAt: '2021-11-04T18:21:57Z',
        },
        {
          id: 'I_kwDOAJy2Ks4-P_x8',
          author: { login: 'maraisr' },
          comments: { totalCount: 19 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
          },
          closed: false,
          title:
            '[React 18] Selective Hydration fails hydration when using context api',
          number: 22692,
          createdAt: '2021-11-04T05:34:09Z',
        },
        {
          id: 'I_kwDOAJy2Ks495yh0',
          author: { login: 'eps1lon' },
          comments: { totalCount: 0 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
          },
          closed: false,
          title:
            'React 18: hydrateRoot does not issue hydration warnings if initial children is missing',
          number: 22643,
          createdAt: '2021-10-28T14:03:30Z',
        },
        {
          id: 'I_kwDOAJy2Ks493r0K',
          author: { login: 'ashidaharo' },
          comments: { totalCount: 5 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
          },
          closed: false,
          title:
            '[react-is] The major versions of react and react-is must be peerDependencies related.',
          number: 22640,
          createdAt: '2021-10-28T02:05:16Z',
        },
        {
          id: 'I_kwDOAJy2Ks49vGn7',
          author: { login: 'arackaf' },
          comments: { totalCount: 16 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
          },
          closed: false,
          title:
            'React 18 - waterfall suspensions re-trigger the Suspense boundary ',
          number: 22626,
          createdAt: '2021-10-26T02:36:18Z',
        },
        {
          id: 'I_kwDOAJy2Ks49fp8g',
          author: { login: 'ryandagg' },
          comments: { totalCount: 0 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
          },
          closed: false,
          title:
            'Feature request: react-hooks/exhaustive-deps option to require deps arg.',
          number: 22604,
          createdAt: '2021-10-20T18:25:42Z',
        },
        {
          id: 'I_kwDOAJy2Ks486qGh',
          author: { login: 'pedro-gilmora' },
          comments: { totalCount: 2 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
          },
          closed: false,
          title: 'React 18 - `useState` invisible for end users',
          number: 22535,
          createdAt: '2021-10-10T15:09:20Z',
        },
        {
          id: 'I_kwDOAJy2Ks48PZTz',
          author: { login: 'jamesknelson' },
          comments: { totalCount: 3 },
          labels: {
            nodes: [
              { color: 'c7def8', name: 'Browser: Safari' },
              { color: 'd4c5f9', name: 'Status: Unconfirmed' },
              { color: '26B0E4', name: 'React 18' },
            ],
          },
          closed: false,
          title:
            'Bug: setState updater called but not rendered, in Safari, in concurrent mode',
          number: 22459,
          createdAt: '2021-09-29T08:43:19Z',
        },
        {
          id: 'I_kwDOAJy2Ks47YQ5M',
          author: { login: 'michenly' },
          comments: { totalCount: 0 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
          },
          closed: false,
          title:
            "[React 18] Optimized React Server Components's webpack bundling",
          number: 22314,
          createdAt: '2021-09-14T16:34:46Z',
        },
        {
          id: 'MDU6SXNzdWU5NzU5NjMwNjE=',
          author: { login: 'Ontopic' },
          comments: { totalCount: 1 },
          labels: {
            nodes: [
              { color: 'fffde7', name: 'Resolution: Needs More Information' },
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
          },
          closed: false,
          title: 'Expecting hasShadowRoot from global scope',
          number: 22149,
          createdAt: '2021-08-20T22:40:21Z',
        },
        {
          id: 'MDU6SXNzdWU5NTkwOTIwNDE=',
          author: { login: '7kms' },
          comments: { totalCount: 1 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
          },
          closed: false,
          title:
            'Question: Why `propagateContextChanges` not restore the `workInProgress.child.return` pointer?',
          number: 22012,
          createdAt: '2021-08-03T13:00:15Z',
        },
        {
          id: 'MDU6SXNzdWU5NTU0NTU4MzM=',
          author: { login: 'maraisr' },
          comments: { totalCount: 12 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
          },
          closed: false,
          title: 'React CM Mode (18) stacking app during hydrateRoot',
          number: 21985,
          createdAt: '2021-07-29T04:52:59Z',
        },
        {
          id: 'MDU6SXNzdWU5NDY4MzY2MTk=',
          author: { login: 'MaxmaxmaximusAWS' },
          comments: { totalCount: 9 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
          },
          closed: false,
          title: "React 18 let's make ref.currant to be reactive value",
          number: 21903,
          createdAt: '2021-07-17T14:39:21Z',
        },
        {
          id: 'MDU6SXNzdWU5MzgyNTU1MDk=',
          author: { login: 'lifeiscontent' },
          comments: { totalCount: 0 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
          },
          closed: false,
          title: 'React 17/18 custom Synthetic Events',
          number: 21806,
          createdAt: '2021-07-06T20:59:28Z',
        },
        {
          id: 'MDU6SXNzdWU5MjQ3NTA5MTY=',
          author: { login: 'rybon' },
          comments: { totalCount: 2 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
          },
          closed: false,
          title: 'React 18 data fetching network call cancellation',
          number: 21701,
          createdAt: '2021-06-18T10:05:49Z',
        },
        {
          id: 'MDU6SXNzdWU5MjE2MTY4NzQ=',
          author: { login: 'gaearon' },
          comments: { totalCount: 0 },
          labels: {
            nodes: [
              { color: 'b60205', name: 'Type: Bug' },
              { color: 'ffccd3', name: 'Component: Concurrent Features' },
              { color: '26B0E4', name: 'React 18' },
            ],
          },
          closed: false,
          title:
            'Bug: Webpack process and setImmediate polyfill interferes with time slicing',
          number: 21685,
          createdAt: '2021-06-15T17:07:37Z',
        },
        {
          id: 'MDU6SXNzdWU5MTk5Njk3NzU=',
          author: { login: 'Jack-Works' },
          comments: { totalCount: 6 },
          labels: {
            nodes: [
              { color: 'fef2c0', name: 'Type: Discussion' },
              { color: '26B0E4', name: 'React 18' },
            ],
          },
          closed: false,
          title:
            'React 18: react-router@v5 is breaking in the Strict Mode (strict effects)',
          number: 21674,
          createdAt: '2021-06-14T03:43:07Z',
        },
      ],
    },
  },
};
