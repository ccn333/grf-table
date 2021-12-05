import styled from "styled-components";

export const WindowCSS = styled.div`
  width: 1280px;
  height: 800px;
  background: ${(props) => props.theme.colors.black};
`;

export const GalleryWindowCSS = styled(WindowCSS)`
  display: grid;
  grid-template-rows: auto 1fr;

  //  padding: 2.875em 8.375em 1.12em 8.125em;
  padding: 3.6% 10.5% 4.4% 10.16%;
`;

export const Header = styled.header`
  margin-bottom: 1.25em;

  display: grid;
  grid-template-columns: 0.1fr auto 0.1fr;
  grid-template-rows: 1fr 0.5fr;
  gap: 1em 4em;
  grid-auto-flow: row;
  grid-template-areas:
    "logo title x-button"
    ". subtitle subtitle";

  .logo {
    justify-self: center;
    align-self: center;
    grid-area: logo;

    /* width: 4em;
    height: auto; */
  }

  .title {
    justify-self: start;
    align-self: center;
    grid-area: title;
  }

  .x-button {
    justify-self: end;
    align-self: center;
    grid-area: x-button;
    width: 2em;
    height: 2em;
  }

  .subtitle {
    justify-self: end;
    align-self: center;
    grid-area: subtitle;

    padding-right: 2.5em;
    text-align: right;
    width: 65%;
  }

  .line {
    /* justify-self: end;
    align-self: center;
    grid-area: 2 / 2 / 3 / 4; */
    width: 100%;
    border: 1px solid #000000;
    box-shadow: 0px 4px 2px #ffffff;

    margin-top: 0px;
  }

  .menu {
    justify-self: end;
    align-self: center;
    grid-area: 2 / 2 / 3 / 4;
    width: 100%;

    nav {
      span {
        cursor: pointer;

        padding: 0.1em 0.5em;
        margin-left: 4rem;
      }
    }

    .active {
      font-weight: 800;
      box-shadow: inset 0 -0.05em cyan, inset 0 -0.1em white;

      :after {
      }
    }
  }
`;

export const Content = styled.main`
  width: 90%;
  width: 100%;
  justify-self: end;

  overflow: auto;
  /* scrollbar */
  ::-webkit-scrollbar {
    width: 11px;
    border: 1px solid rgba(255, 255, 255, 0.8);
    box-sizing: border-box;
    border-radius: 8.5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    /* box-shadow: inset 0 0 5px grey;
    border-radius: 10px; */
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.8);
    box-sizing: border-box;
    box-shadow: inset -4px -4px 4px 3px rgba(0, 255, 255, 0.3);
    border-radius: 8.5px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 1);
  }
`;

export const TwoColumns = styled.div`
  display: flex;
  width: 100%;

  div {
    flex-grow: 1;

    margin-right: 2.5em;
    text-align: justify;
  }
`;

export const Footer = styled.footer`
  margin-top: 1.25em;
  margin-bottom: -1em;
  display: grid;
  grid-template-columns: 0.1fr auto 0.5fr;
  //grid-template-rows: 1fr 0.5fr;
  gap: 1em 4em;
  grid-auto-flow: row;
  grid-template-areas: "logo text text2";

  .logo {
    justify-self: center;
    align-self: center;
    grid-area: logo;
  }

  .text {
    justify-self: start;
    align-self: center;
    grid-area: text;
  }

  .text2 {
    justify-self: end;
    align-self: center;
    grid-area: text2;
  }
`;
