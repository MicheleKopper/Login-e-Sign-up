import { CssBaseline, GlobalStyles } from "@mui/material";

const styles = {
  "*": {
    margin: 0,
    padding: 0,
  },
};

export function GlobalStyled() {
  return (
    <>
      <CssBaseline />
      <GlobalStyles styles={styles} />;
    </>
  );
}
