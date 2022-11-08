# @CodesaursX/shadeswind

A tailwind plugin to generate color shades.

## Installation

```zsh
npm install @CodesaursX/shadeswind --save
# or
yarn add @CodesaursX/shadeswind
```

## Usage

Go to your `tailwind.config.js` file and add the following.

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {}
  },
  plugins: [
    require('@CodesaursX/shadeswind')({
      primary: '#7f5af0'
    })
  ]
};
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
