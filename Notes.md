# Lession 1 (React Intro)

**Why React?**

- used to create complex frontend applications ( Ek button click se bahut jagah changes ko reflect karne ke liye)
- Can't JS be used? It can be used but React makes it easy

- ***Ultimately React Ka Code Convert to HTML,CSS aur JS mein hi hoga***

**Is React a library or Framework ( Like Angular\Vue )?**

- A library because wo sirf user interface banane mein kaam ata hai . Framework bahut strict hote hai apne rules ko leke ki ye aise hi hoga wo waise hi hoga, mera hi state mangement , routing use hoga etc etc
- Library mein aisa ni hota
- React tumhe freedom deta hai. Routing ke liye React Router, state ke liye Redus/Zustand, etc. alag se choose kar sakte ho.
- Framework mein sab kuch already fixed hota hai — usi ka routing, usi ka state management use karna padta hai.

**Add On In React**

- State Management ( By default ni tha) ( Redux,Context API)
- Routing ( By default ni hai)

# Lession 2 ( Create React App)

- npx creat-react-app project_name ( bahut zyada cheezein install kardeta hai jo need bhi ni hai) ( Npx - node package executer)
- npm run start se code start
- npm run build se code build hota hai ( HTML,CSS aur JS) mein aur ye folder serve hota hai users ko

```javascript
npm run build kya karta hai?
Ye command ek production-ready build create karta hai tumhare pure React app ka. Ye build:

Optimized hoti hai (chota size, fast loading).

Static files (HTML, CSS, JS) generate karti hai.

"build" naam ka folder banata hai jismein ye saari files hoti hain.
```

- **But we will use vite** 
- Vite is a bundler
- npm create vite@latest


# Lession 3 ( React Flow )

- **Foundation Rule** - JS akela exist karta hai agar use website pe chalana hai to script tag se inject karna hi padega (in normal vanilla applications )

- Folder Structure for npx create-react-app

my-app/
├── node_modules/          # Saare dependencies
├── public/                # Static files
│   ├── index.html         # Main HTML template
│   ├── favicon.ico        # Website icon
│   └── manifest.json      # PWA ke liye
├── src/                   # Source Code (Yahan tum mostly kaam karoge)
│   ├── App.js             # Main App Component
│   ├── App.css            # App ka styling
│   ├── index.js           # Entry point (ReactDOM.render yahan hai)
│   ├── index.css          # Global CSS
│   └── logo.svg           # React logo
├── package.json           # Dependencies & scripts
├── package-lock.json      # Exact versions lock
└── README.md              # Documentation

- Folder structure for npm create vite@latest my-app

my-app/
├── node_modules/          # Saare dependencies
├── public/                # Static assets (images, fonts, etc.)
│   └── vite.svg           # Vite logo
├── src/                   # Source Code
│   ├── App.jsx            # Main App Component (JSX extension)
│   ├── App.css            # App ka styling
│   ├── index.css          # Global CSS
│   ├── main.jsx           # Entry point (ReactDOM.createRoot yahan hai)
│   └── assets/            # Images, icons (e.g., react.svg)
├── index.html             # Main HTML (public nahi, root mein hai!)
├── vite.config.js         # Vite configuration (fast build/dev)
├── package.json           # Dependencies & scripts
├── package-lock.json      # Exact versions lock
└── README.md              # Documentation

**Difference between package.json vs package-lock.json**

Zaroori Baat:
package-lock.json ko kabhi ignore mat karo ya delete mat karo. Isse guarantee hoti hai ki sabke pass same dependencies hain.

Jab bhi npm install chalaoge, ***npm pehle package-lock.json dekhega exact versions ke liye (if available)***. Agar ***nahi*** hai, toh woh ***package.json*** ke range se latest version lega.

package.json → Batata hai kya chahiye
package-lock.json → Batata hai exact kaunsa version install hua hai

```javascript

1. package.json (The Manifest File)
Yeh tum manually define karte ho. Isme tum batate ho ki tumhare project ko konsi packages chahiye.

Isme version range hota hai (e.g., ^4.18.2 → means "4.18.2 ya usse upar ka version lelo").

Isme scripts, project name, description, etc. bhi hote hain.

Example:

json
{
  "name": "my-app",
  "dependencies": {
    "react": "^18.2.0",    // 18.2.0 ya uska koi bhi newer minor/patch version
    "react-dom": "^18.2.0"
  }
}

2. package-lock.json (The Lock File)
Yeh automatically generate hoti hai when you install packages (npm install).

Yeh exact versions store karti hai jo tumhare project mein currently installed hain (e.g., 18.2.0 exactly).

Yeh ensure karti hai ki har developer ya production server same exact versions install kare.

Example:

json
{
  "name": "my-app",
  "dependencies": {
    "react": {
      "version": "18.2.0",    // Exact version
      "resolved": "https://registry.npmjs.org/react/-/react-18.2.0.tgz",
    },
    "react-dom": {
      "version": "18.2.0",
      "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-18.2.0.tgz",
    }
  }
}

```

## Why React Is a SPA by default?

- Because ek hi page hota hai index.html

### In the case of npx you dont see any script added in the html? Fir kaise wo inject ho rha

- Answer is npx mein package.json mein you will see react-script karke wo add karta hai script chupke se ( sirf yahi ni balki bahut cheezein jo tumne ni likhi hoti apne code mein)


***React Basically Kahta hai Mujhe functions do jo return kar rha hai HTML main use render kar dunga***

Components ke liye .jsx ( lekin koi mandatory ni hai Vite wali force karegi rakhne ko ) - Lekin Capitalise Naam hona zaruri hai


# Lession 4 ( Personalized React VVV IMPORTANT ) - How React Works Internally


**Dekh bhai seedha seedha react kya karta hai use ek function do jo ki return kar rha hoga html like structure jise wo convert karega in khud ke understandable object form mein ( tree banaega basically ) aur fir use apne render method pe pass karke root mein jod dega**


- Ab ye upar wala scene kaise ho rha iske liye we follow the below steps

- customRender or react 
- how that function and its html is converted into objects
- how to render the objects directly
- evaluated expression


### React Internal Render Function

```javascript

import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => <h1>Hello World</h1>;

// Modern React (v18+)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

### Custom render function


### NOTE CHILDREN HAMESHA PROP KE ANDAR HONGE ( VIRUTAL DOM WALA EXAMPLE MEIN THORE CHANGES KAR DENA)
```javascript
// Simple custom render implementation
function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  
  // Set attributes
  Object.keys(reactElement.props).forEach(prop => {
    if (prop !== 'children') {
      domElement.setAttribute(prop, reactElement.props[prop]);
    }
  });
  
  // Handle children
  reactElement.props.children?.forEach(child => {
    if (typeof child === 'string') {
      domElement.appendChild(document.createTextNode(child));
    } else {

      // Ye dekho recursion ho rha tree ban rha 
      customRender(child, domElement);
    }
  });
  
  container.appendChild(domElement);
}

Ye jo upar likha hai wo convert ismein hoga ( is type ke object mein ) - Is case mein ( ek div hai uska bacha hai h1)
// Usage
const reactElement = {
  type: 'div',
  props: {
    className: 'container',
    children: [
      {
        type: 'h1',
        props: {
          children: ['Hello World']
        }
      }
    ]
  }
};

customRender(reactElement, document.getElementById('root'));
```

### 2. How JSX Gets Converted to Objects

```javascript
const element = <div className="container">Hello {name}</div>;

// same cheez ko react se banana ho to aise banao
const element = React.createElement(
  'div',
  { className: 'container' },
  'Hello ',
  name
);

// Which produces this object:
{
  type: 'div',
  props: {
    className: 'container',
    children: [
      'Hello ',
      { /* evaluated value of name variable */ }
    ]
  }
}
```


### Official Documentation

createElement(type, props, ...children) 

type - string , html tags, components ya function 
props - mein attribute tag ya function ke parameter, style , event handler
children - mein baaki bacha kuch ya fir se , createElement ( )

***Recursively likh sakte isisliye tree banta hai***

Example
```javascript
createElement(
  'somethin',
  {props},
  createElement(
    'something2',
    {props2},
    createElement(
      .. and so on
    )
  )
)

// Aapka example perfect hai:
React.createElement(
  'div', 
  {className: 'container'},
  React.createElement(
    'h1',
    {style: {color: 'red'}},
    React.createElement(
      'span',
      {onClick: handleClick},
      'Click me!'
    )
  )
)

// Final tree structure:
{
  type: 'div',
  props: {
    className: 'container',
    children: {
      type: 'h1',
      props: {
        style: {color: 'red'},
        children: {
          type: 'span',
          props: {
            onClick: handleClick,
            children: 'Click me!'
          }
        }
      }
    }
  }
}

![alt text](images/image-1.png)
```

#### Recursive createElement calls hi pure UI ka tree structure banati hain, jisse React efficiently update aur render kar pata hai! 🌳✨
#### Isi recursive nature ki wajah se React itna powerful aur flexible hai! 🚀


// type do , fir props in {} fir children jitne bhi ho

```javascript

import { createElement } from 'react';

function Greeting({ name }) {
  return createElement(
    'h1',
    { className: 'greeting' },
    'Hello ',
    createElement('i', null, name),
    '. Welcome!'
  );
}

export default function App() {
  return createElement(
    Greeting,
    { name: 'Taylor' }
  );
}

Ao samjhthe hai 


```
- React ne kaha mujhe tum Greeting naam ka function do mein use render kardunga
- Thik bhai maine greeting naam ka function bana liya
- jo ki leta hai ek parameter name naam ka
- ok thik hai ab kya krna hai mujhe ek object banana hai jismein ek h1 hoga aur uske andar ek i naam ka child hoga
- thik hai bhai to simple object apne tareeqe se to work karega ni react specific object banana padega thik bhai banate hai
- createElement se banega object , wo kya leta hai as input ( type of tag ( h1,h2,....), properties like className , style etc,...childred)
- bas ye teen chezein hi leta hai
- Hamre case mein parent h1 hua jiski class greeting hai aur fir uske 3 child ( hello -> text node , fir ek child (i wala tag jiska sirf naam hai) aur akhiri welcome-> text node)
- Thik bhai maine greeting to bana diya ab
- thik bhai to main app bana deta hun
- app kya leta hai Greeting type aur property hai name naam ki
- bas yahin return kardeta hun aur main file mujhe root mein jod degi

### Ek question {} iske andar ham sirf evaluated expression hi kyun de sakte ? ( log to kahte hai iske andar js likh sakte ho )
### Answer - Dekho bhai ultimately createElement hi to run ho rha hai?? aur wo kya expect karta hai object na , kya tumne dekha hai kahin object mein if else noob



### Why react is so fast aur wo sirf changes ko hi render kyun karta naaki poore html ko lets see

```javascript

Pehla Render (Initial State - count = 0):
jsx
function Counter() {
  const [count, setCount] = React.useState(0);
  
  return React.createElement('div', {className: 'counter'},
    React.createElement('h1', null, `Count: ${count}`),
    React.createElement('button', 
      { onClick: () => setCount(count + 1) },
      'Increment'
    )
  );
}

// Virtual DOM Structure (Pehle render pe):
{
  type: 'div',
  props: { className: 'counter',
  children: [
    {
      type: 'h1',
      props: {children: ['Count: 0']}  // 📌 Initial value
    },
    {
      type: 'button',
      props: 
      { onClick: function, // 📌 Click handler
        children: ['Increment']
      } 
    }
  ]
  }
}
🎯 Button Click ke Baad (count = 1):
Naya Virtual DOM:
jsx
// setCount(count + 1) call ke baad
{
  type: 'div',
  props: { className: 'counter',
  children: [
    {
      type: 'h1',
      props: {children: ['Count: 1']}  // ✅ YAHAN CHANGE HUA
    },
    {
      type: 'button',
      props: 
      { onClick: function ,  // ✅ Same function (but different reference)
        children: ['Increment']  
           // ✅ Same text
      }
    }
  ]
  }
}
🔍 React Ka Comparison:
```
### Step-by-Step Diffing Algo:

### YAAR YE CHILDREN PROPS KE ANDAR HONGE BAHAR NI DHYAN RAKHNA

```javascript
// React compare karega:

// OLD Virtual DOM:          NEW Virtual DOM:
// {                         {
//   type: 'div',            type: 'div',           ✅ SAME
//   props: {                props: {               ✅ SAME
//     className: 'counter',    className: 'counter',
//                         
//   children: [             children: [            ✅ SAME Array
//     {                       {
//       type: 'h1',            type: 'h1',         ✅ SAME
//       props: null,           props: null,        ✅ SAME  
//       children: [            children: [         ❌ DIFFERENT!
//         'Count: 0'             'Count: 1'        📌 TEXT CHANGE
//       ]                      ]
//     },                     },
//     {                       {
//       type: 'button',        type: 'button',     ✅ SAME
//       props: {               props: {            ⚠️ COMPARE DEEPER
//         onClick: fn1           onClick: fn2      ❌ Different function reference
//       },                      },
//       children: [            children: [         ✅ SAME
//         'Increment'            'Increment'
//       ]                      ]
//     }                     }
//   ]                      ]
// }                         }
⚡ Efficient Update Kaise Hota Hai:
React Sirf YEHI Changes Karega:
javascript
// Real DOM mein:
const h1Element = document.querySelector('.counter h1');
h1Element.textContent = 'Count: 1';  // ✅ Sirf text change

// Button element same hi rahega
// Div element same hi rahega
// Class same hi rahegi
Event Handler Optimization:
javascript
// React samajhta hai ki:
// onClick function ka REFERENCE alag hai but
// FUNCTIONALITY same hai isliye
// ❌ Naya event listener add karne ki jarurat nahi
// ✅ Purana event listener kaam karta rahega
🎯 Final DOM Update:
Before Click:

html
<div class="counter">
  <h1>Count: 0</h1>
  <button>Increment</button>
</div>
After Click:

html
<div class="counter">
  <h1>Count: 1</h1>     <!-- ONLY THIS TEXT CHANGED! -->
  <button>Increment</button>
</div>
✅ Why This is Efficient:
✅ No element replacement - same <h1> and <button> elements

✅ No re-rendering of entire component

✅ Only text content update in the h1 element

✅ No style recalculations

✅ No layout shifts

❌ Without React (Inefficient Way):
javascript
// Pure JavaScript mein aisa karna padta:
button.addEventListener('click', () => {
  // Poora h1 element replace karna padta
  const oldH1 = document.querySelector('.counter h1');
  const newH1 = document.createElement('h1');
  newH1.textContent = `Count: ${count + 1}`;
  oldH1.parentNode.replaceChild(newH1, oldH1);
  
  // 👎 Inefficient: Element recreation, style recalculation, etc.
});
React isliye fast hai kyunki woh sirf minimum necessary changes karta hai! 🚀
```

### How JSX is Different from JS


- JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It's primarily used with React to describe what the UI should look like.

```javascript

// Pure JavaScript DOM creation
const element = document.createElement('h1');
element.className = 'title';
element.textContent = 'Hello, World!';

// JSX equivalent
const element = <h1 className="title">Hello, World!</h1>;
```

**JSX gets compiled to regular JavaScript:**

```javascript
// Input JSX
const greeting = <div className="welcome">Hello {name}!</div>;

// Compiled JavaScript output
const greeting = React.createElement(
  'div',
  { className: 'welcome' },
  'Hello ',
  name,
  '!'
);


![alt text](images/image.png)
```


### What does Babel do?

***Babel React ke JSX code ko regular JavaScript mein convert karta hai jo har browser samajh sakta hai!***

1. JSX → JavaScript Conversion

```jsx
// Aapka React code:
function App() {
  return (
    <div className="container">
      <h1>Hello World</h1>
      <button onClick={() => console.log('Clicked')}>
        Click me
      </button>
    </div>
  );
}
```

After babel

```javascript
function App(){
  return React.createElement(
  'div',
  {className:'container'},
  React.createElement('h1',null,'Hello World'),
  React.createElement(
    'button',{
    onClick : () => console.log('Clicked')}, 'Click Me')
    )
}

```

Babel React Developer ke liye yeh kaam karta hai:

✅ JSX → JavaScript convert karta hai

✅ Naye features purane browsers mein chalata hai

✅ Code optimize karta hai

✅ Import/Export handle karta hai

✅ Error checking karta hai


### Babel ke bina react ka code browser mein chalega hi ni ( khud se ) Of course ap babel converted code bana sakte ho

