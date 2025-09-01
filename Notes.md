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
