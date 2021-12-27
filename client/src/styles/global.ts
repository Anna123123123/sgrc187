import { createGlobalStyle } from 'styled-components'

/*
  TODO:
  !
  ?
  //
  * mobileS: '320px',
  * mobileM: '375px',
  * mobileL: '425px',
  * tablet: '768px',
  * laptop: '1024px',
  * laptopL: '1440px',
  * desktop: '2560px'
*/

export default createGlobalStyle`
:root {
  --primary: #337ab7;
  --success: #5cb85c;
  --info: #5bc0de;
  --warning: #f0ad4e;
  --danger: #d9534f;

  --green: #41b883;
  --light-blue: #a2a5b9;

  --white: #fff;
  --gray-most-dark: #1e1e21;
  --gray-darkest2: #232326;
  --gray-darkest: #252529;
  --gray-darker: #2d2d31;
  --gray-dark: #323236;
  --gray: #3b3b41;
  --gray-light: #404040;
  --gray-lighter: #868686;
  --gray-lighter2: #cecece;
  --gray-most-lighter: #999;

  --facebook: #3b5998;
  --google: #ea4335;
  --github: var(--gray-dark);

  --cb-blue: #4285F4;
  --cb-green: #00D490;
  --cb-yellow: #FFCF50;
  --cb-red: #DA5847;
}


  body {
    background: ${(props) => props.theme.colors.background};
    color:${(props) => props.theme.colors.text};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }


    /* @media (min-width: 1200px) {
         max-width: 1140px;
    }

     @media (min-width: 992px) {
       max-width: 960px;
   }

   @media (min-width: 768px) {
         max-width: 720px;
}

 @media (min-width: 576px) {
       max-width: 540px;
} */


button {
  cursor:pointer;
}

img {
  /* vertical-align: middle;
    border-style: none; */
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}


.table {
    border-collapse: collapse;
    color: ${(props) => props.theme.colors.text};

    th {

    }
    th,
    td {
        padding: 6px;
        text-align: left;
    }

    // td:nth-child(1),
    // th:nth-child(1) {
    //     min-width: 200px;
    // }
    // td:nth-child(2),
    // th:nth-child(2) {
    //     min-width: 200px;
    // }
    // td:nth-child(3),
    // th:nth-child(3) {
    //     width: 350px;
    // }

    thead {
        background-color: rgb(65, 65, 65);
        color: #fff;
        tr {
            // display: block;
            // position: relative;
        }
    }
    tbody {
        tr {
            border: 1px solid transparent;
            padding: 1px;
            cursor:pointer;
        }
        tr:hover{
            border: 1px solid rgb(184, 189, 255);
            color: #41b883;
        }
        tr:nth-child(even) {
            background-color: var(--color-2);
        }
        tr:nth-child(even):hover{
            border: 1px solid rgb(184, 189, 255);
            color: #41b883;
        }
    }
}

/* .old_ie_wrapper {
    height: 300px;
    width: 750px;
    overflow-x: hidden;
    overflow-y: auto;
    tbody {
        height: auto;
    }
}

.form-group {
    display:flex;
    width: 400px;
    flex-direction: column;
    margin-bottom: 20px;
} */

/* custom scrollbar */
::-webkit-scrollbar {
    width: 20px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #a8bbbf;
  }


`
