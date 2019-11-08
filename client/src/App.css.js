import { css } from '@emotion/core'

export const form = css`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

export const Container = css`
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: #ebebeb;
  scroll: auto;
`

export const Wrapper = css`
  display: flex;
  flex-direction: column;
  background: #fff;
  margin: 20px auto;
  padding: 20px;
  text-align: center;
  padding-bottom: 40px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border: 1px solid #ccc;
  width: 80%;
  border-radius: 0.4em;
  @media (max-width: 420px) {
    width: 95%;
    top: 5px;
  }
  @media (max-width: 320px) {
    width: 100%;
    top: 0px;
  }
`