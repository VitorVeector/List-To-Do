import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #f0f2f5;
        --color1: #000000;
        --color2: #16243f;
        --color3: #41568c;
        --color4: #768fe4;
        --color5: #b5cdff;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box
    }

    html{
        @media(max-width: 1080px){
            font-size: 93.75%
        }
        @media(max-width: 720px){
            font-size: 87.5%
        }
    }

    body{
        background-color: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, button, text-area, input{
        font-family: 'Roboto', Arial, Helvetica, sans-serif
    }

    button{
        cursor: pointer
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed
    }

    .react-modal-content{
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }
    .react-modal-overlay{
        width: 100%;
        background: rgba(0,0,0,0.5);
        
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        
        display: flex;
        align-items: center;
        justify-content: center;
    }
`