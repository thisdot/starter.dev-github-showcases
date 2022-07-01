import styles from 'styled-components';

export const ContainerWrapper = styles.div`
margin-top: 1.25rem;
border-top: 1px solid rgb(229 231 235);
`;

export const Heading = styles.h2`
margin-top: 0.5rem;
margin-bottom: 0.5rem;
padding-top: 0.5rem;
color: rgb(31 41 55);
font-weight: 700;
font-size: inherit;
`;

export const OrgListContainer = styles.div`
display: flex;
flex-wrap: wrap;
&  > :not([hidden]) ~ :not([hidden]) {
  margin-right: 0.5rem;
  margin-left:  0.5rem;
}
`;

export const Organisation = styles.div`
position: relative;
width: 2.25rem;
height: 2.25rem;
border-radius: 0.25rem;
overflow: hidden;
border: 1px solid rgb(209 213 219);
`;

export const OrgImage = styles.img`
width: 100%;
object-fit: fill;
`;
