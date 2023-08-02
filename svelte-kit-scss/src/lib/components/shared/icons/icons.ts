import * as Octicons from 'svelte-octicons';
import IconTwitter16 from './IconTwitter16.svelte';

type OcticonsExports = typeof Octicons;
type OcticonsIcons = Pick<OcticonsExports, Exclude<keyof OcticonsExports, 'SvgComponent'>>;
const octicons = Octicons as OcticonsIcons;

export const Icons = {
  ...octicons,
  IconTwitter16,
};

export type IconName = keyof typeof Icons;
