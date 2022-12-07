import NavBar from './NavBar.svelte';
import { tick } from 'svelte';

describe('NavBar', () => {
  it('should render dropdown', async function () {
    const host = document.createElement('div');
    document.body.appendChild(host);
    new NavBar({ target: host });
    const btn = host.getElementsByTagName('button')[0];
    btn.click();
    await tick();
    expect(host.innerHTML).toContain('Profile');
  });
});
