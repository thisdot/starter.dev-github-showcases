import { describe, it } from 'vitest';
import { mapLanguageExt } from './file';

describe('.mapLanguageExt', () => {
  describe('returns expected result when called with arguments', () => {
    const MAPPING_CASES: [string, string | undefined][] = [
      ['html', 'markup'],
      ['xhtml', 'markup'],
      ['xml', 'markup'],
      ['sh', 'bash'],
      ['bash', 'bash'],
      ['zsh', 'bash'],
      ['c', 'c'],
      ['cpp', 'cpp'],
      ['cc', 'cpp'],
      ['h', 'cpp'],
      ['css', 'css'],
      ['js', 'javascript'],
      ['jsx', 'jsx'],
      ['coffee', 'coffeescript'],
      ['patch', 'diff'],
      ['diff', 'diff'],
      ['git', 'git'],
      ['go', 'go'],
      ['graphql', 'graphql'],
      ['gql', 'graphql'],
      ['handlebars', 'handlebars'],
      ['hbs', 'handlebars'],
      ['json', 'json'],
      ['less', 'less'],
      ['md', 'markdown'],
      ['m', 'objectivec'],
      ['ocaml', 'ocaml'],
      ['ml', 'ocaml'],
      ['py', 'python'],
      ['py3', 'python'],
      ['pyc', 'python'],
      ['pyo', 'python'],
      ['pyw', 'python'],
      ['pyx', 'python'],
      ['re', 'reason'],
      ['rei', 'reason'],
      ['sass', 'sass'],
      ['scss', 'scss'],
      ['sql', 'sql'],
      ['stylus', 'stylus'],
      ['tsx', 'tsx'],
      ['ts', 'typescript'],
      ['wasm', 'wasm'],
      ['yml', 'yaml'],
      ['yaml', 'yaml'],
      ['any_other_unsupported', undefined],
    ];
    describe.each(MAPPING_CASES)('case %#', (input, expectedOutput) => {
      it('lowercase', () => {
        const output = mapLanguageExt(input);
        expect(output).toStrictEqual(expectedOutput);
      });
      it('uppercase', () => {
        const inputUpperCase = input.toUpperCase();
        const output = mapLanguageExt(inputUpperCase);
        expect(output).toStrictEqual(expectedOutput);
      });
    });
  });
});
