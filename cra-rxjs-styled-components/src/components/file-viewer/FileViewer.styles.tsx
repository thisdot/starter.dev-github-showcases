import styled from 'styled-components';

export const FileViewContainer = styled.div`
  border: 1px solid rgb(209 213 219);
  border-radius: 0.5rem;
  overflow: hidden;
`;

export const FileHeader = styled.div`
  padding: 0.75rem 1rem;
  background-color: rgb(243 244 246);
  border-bottom: 1px solid rgb(209 213 219);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    'Liberation Mono', 'Courier New', monospace;
  font-size: 0.75rem;
  line-height: 1rem;
  color: rgb(31 41 55);
`;

export const FileHeaderLines = styled.span`
  padding: 0 0.5rem;
`;

export const FileHeaderBytes = styled.span`
  padding: 0 0.5rem;
  border-left: 1px solid rgb(209 213 219);
`;

export const TableRow = styled.div`
  display: table-row;
`;

export const CodeBlock = styled.pre`
  border-spacing: 5px;
  background-color: #ffffff !important;
  text-align: left;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    'Liberation Mono', 'Courier New', monospace;
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0.25rem 2rem;
  overflow: auto;
`;

export const LineNumber = styled.span`
  display: table-cell;
  text-align: right;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    'Liberation Mono', 'Courier New', monospace;
  padding-right: 1rem;
  user-select: none;
  color: rgb(107 114 128);
`;

export const LineText = styled.span`
  display: table-cell;
`;
