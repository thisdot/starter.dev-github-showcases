import { render } from 'solid-testing-library';
import { beforeEach, describe, expect, it } from 'vitest';
import TwitterIcon from './TwitterIcon';
import CaretIcon from './caret';
import CloseIcon from './close';
import CorrectIcon from './correct';
import RepoBookIcon from './repo-book';
import RepoIcon from './repo.icon';
import LinkIcon from './LinkIcon';
import OfficeBuildingIcon from './OfficeBuildingIcon';
import StarIcon from './StarIcon';
import LocationMarkerIcon from './LocationMarkerIcon';
import UsersIcon from './UsersIcon';
import TOCIcon from './TocIcon';
import BookOpenIcon from './BookOpenIcon';
import GitBranchIcon from './GitBranchIcon';

describe('Twitter Icon', () => {
  let wrapper;
  beforeEach(async () => {
    wrapper = await render(() => <TwitterIcon />);
  });

  it('should mount', () => {
    expect(wrapper).toBeTruthy();
  });
});

describe('Caret Icon', () => {
  let wrapper;
  beforeEach(async () => {
    wrapper = await render(() => <CaretIcon />);
  });

  it('should mount', () => {
    expect(wrapper).toBeTruthy();
  });
});

describe('Close Icon', () => {
  let wrapper;
  beforeEach(async () => {
    wrapper = await render(() => <CloseIcon />);
  });

  it('should mount', () => {
    expect(wrapper).toBeTruthy();
  });
});

describe('Correct Icon', () => {
  let wrapper;
  beforeEach(async () => {
    wrapper = await render(() => <CorrectIcon />);
  });

  it('should mount', () => {
    expect(wrapper).toBeTruthy();
  });
});

describe('RepoBook Icon', () => {
  let wrapper;
  beforeEach(async () => {
    wrapper = await render(() => <RepoBookIcon />);
  });

  it('should mount', () => {
    expect(wrapper).toBeTruthy();
  });
});

describe('Repo Icon', () => {
  let wrapper;
  beforeEach(async () => {
    wrapper = await render(() => <RepoIcon />);
  });

  it('should mount', () => {
    expect(wrapper).toBeTruthy();
  });
});

describe('Link Icon', () => {
  let wrapper;
  beforeEach(async () => {
    wrapper = await render(() => <LinkIcon />);
  });

  it('should mount', () => {
    expect(wrapper).toBeTruthy();
  });
});

describe('OfficeBuilding Icon', () => {
  let wrapper;
  beforeEach(async () => {
    wrapper = await render(() => <OfficeBuildingIcon />);
  });

  it('should mount', () => {
    expect(wrapper).toBeTruthy();
  });
});

describe('Star Icon', () => {
  let wrapper;
  beforeEach(async () => {
    wrapper = await render(() => <StarIcon />);
  });

  it('should mount', () => {
    expect(wrapper).toBeTruthy();
  });
});

describe('LocationMarker Icon', () => {
  let wrapper;
  beforeEach(async () => {
    wrapper = await render(() => <LocationMarkerIcon />);
  });

  it('should mount', () => {
    expect(wrapper).toBeTruthy();
  });
});

describe('Users Icon', () => {
  let wrapper;
  beforeEach(async () => {
    wrapper = await render(() => <UsersIcon />);
  });

  it('should mount', () => {
    expect(wrapper).toBeTruthy();
  });
});

describe('TOC Icon', () => {
  let wrapper;
  beforeEach(async () => {
    wrapper = await render(() => <TOCIcon />);
  });

  it('should mount', () => {
    expect(wrapper).toBeTruthy();
  });
});

describe('BookOpen Icon', () => {
  let wrapper;
  beforeEach(async () => {
    wrapper = await render(() => <BookOpenIcon />);
  });

  it('should mount', () => {
    expect(wrapper).toBeTruthy();
  });
});

describe('GitBranch Icon', () => {
  let wrapper;
  beforeEach(async () => {
    wrapper = await render(() => <GitBranchIcon />);
  });

  it('should mount', () => {
    expect(wrapper).toBeTruthy();
  });
});
