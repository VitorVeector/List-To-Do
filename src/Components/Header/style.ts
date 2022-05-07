import styled from "styled-components";

export const Container = styled.header`
    background-color: var(--color2);
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1120px;
    margin: 0 auto;
    padding: 2rem 1rem 12rem;

    .logo{
        font-family: 'Roboto Mono', monospace;
        color: var(--color5);
        font-weight: 100;
    }
`
