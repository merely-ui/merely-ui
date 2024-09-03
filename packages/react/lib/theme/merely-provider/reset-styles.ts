export const resetStyles = `
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  -moz-text-size-adjust: none;
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
}

body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

ul,
ol {
  list-style: none;
}

li {
  list-style-type: none;
}

h1,
h2,
h3,
h4 {
  text-wrap: balance;
}

img,
picture {
  max-width: 100%;
  display: block;
}

input,
button,
textarea,
select {
  border: none;
  outline: none;
  font: inherit;
}`
