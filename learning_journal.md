<h4>July 16th</h4>

<ul>
    <li>
        ES7 Code Snippet VSCode Extension Tool
        <ul>
            <li>The extension provides various shortcuts for generating boilerplate code</li>
            <li> Used a React Component: rfce (React Functional Component with Export)</li>
            <li>rfce generates a basic functional component structure which imports the React library, a function with an assumed name (used in Header.js file then the function name was "Header"), then an export statement exporting the component as the dafault export of the module</li>
        </ul>
    </li>
    <li>
        Google Firebase
        <ul>
            <li>Created a new project on Google Firebase for the first time. </li>
            <li>To host the site on Fireabse hosting, installed Firebase CLI (A Command Line Tool) : sudo npm install -g firebase-tools</li>
            <li>Created "firebase.js" in src folder where I pasted a copy of firebase configuration code snippet from the website </li>
        </ul>
    </li>
    <li>
        npx create-react-app
        <ul>
            <li>This code sets up your development environment with the latest JavaScript features. </li>
            <li>Good for building a new single page application <li>
            <li>Doesn't handle backend logic or databases. Can use it with any backend you want: we used google firebase</li>
            <li>To start the app: npm start </li>
        </ul>
    </li>
    <li>
        BEM
        <ul>
            <li> BEM stands for Block Element Modifier</li>
            <li> A naming convention for organizing CSS class names in a modular and scalable way. </li>
            <li> Block: The main component, a container or a widget</li>
            <li> Element: A part of the block, a button within a form </li>
            <li> Modifier: A variant or state of a block or element, a disabled button</li>
            <li> Block: 'card'</li>
            <li> Elemet: 'card__header'</li>
            <li> Modifier: 'card--highlighted' or 'card__header--large'</li>
        </ul>
    </li>

</ul>

<h4>July 22th</h4>

<ul>
    <li>
        Mateiral-UI Icons
        <ul>
            <li>Installed and Used material-ui icon package (basket & search icon for Home page's header) </li>
            <li>First installed material-ui packages through: npm install @mui/material @emotion/react @emotion/styled </li>
            <li>Then installed icon package with : npm install @mui/icons-material </li>
            <li>How to import and use the icons are all shown on the website where they show a dictionary of icons they provide </li>
        </ul>
    </li>
    <li>
        CSS Styling
        <ul>
            <li> flex: Very easy to design flexible and responsive layout structures. </li>
                <ul>
                    <li> display: flex; defines a flex container </li>
                    <li> flex-direction: column; top to bottom </li>
                    <li> justify-content: center; Items are centered along the line </li>
                </ul>
            <li> z-index: controls the stacking order of elements on a web page </li>
                <ul>
                    <li>Elements with a higher z-index value are displayed in front of elements with a lower z-index value </li>
                    <li>only works on positioned elements but not for 'static' positions </li>
                </ul>
            <li> mask-image: mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)); </li>
                <ul>
                    <li>created this beautiful linear gradient image that faded out to the background colour at the bottom</li>
                </ul>
        </ul>
    </li>
    </li>
        Created Home.js, Home.css, Product.js, and Product.css
    </li>
    <li>
        JS: function props
        <ul>
            <li>function Product({ title, image, price, rating }) {}</li>
            <li>When we call Product function in Home.js, we pass in the properties. (title="The lean startup" and price={29.99})</li>
            <li>After recieving the properties from the function call, we can use them within the function by using them within the curly braces: <strong>{price}</strong> </li>
        </ul>
    </li>
</ul>
