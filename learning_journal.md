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

<h4>October 30th</h4>

<ul>
    <li>
        Data Layer
        <ul>
            <li>
                Created StateProvider.js 
                <ul>
                    <li>Imported 'CreateContext', 'useContext', 'useReducer' from "react"</li>
                    <li>'CreateContext' prepared and created a data layer</li>
                    <li>Wrapped the app with the data layer by using 'useReducer'</li>
                    <li>'useContext' to pull data from the data layer </li>
                </ul>
            </li>
            <li>
                Created reducer.js
                <ul>
                    <li>Stated the initial state of data layer with an array named a basket for the checkout page </li>
                    <li>Created functions to either pull or push items into the basket; data layer </li>
                    <li>Reducer: It takes the state so far and the action, and return the next state. In this way, they accumulate actions over time and update the data.</li>
                </ul>
            </li>
            <li>`const [{basket}, dispatch] = useStateValue();`
                <ul>
                    <li>This code enables you to pull information from the basket in any files of the project</li>
                    <li>The export function, useStateValue, from StateProvider.js using useContext function</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>
        `{basket?.length}`
            <ul>
                <li>We can find out how many items are in the basket; data layer by simple performing `basket.length`</li>
                <li>Having ? before `.length` would help it to return just null or 0 when an error occurs. It helps to retain the page's composure even when there is a problem or an error </li>
            </ul>
    </li>
</ul>

<h4>November 7th</h4>

<ul>
    <li>
        Form Input Type
        <ul>
            <li>If you set form's input type = "password", it sets the user's input in the form to look like *** to provide privacy for the users when typing out their password.</li>
        </ul>
    </li>
    <li>
        Firebase
        <ul>
            <li>Firebase is a platform developed by Google that provides a suite of tools for building, managing, and scaling web and mobile applications. It's particularly popular for real-time databases, authentication, and analytics, making it easier for developers to focus on building features rather than backend infrastructure.</li>
            <li>Globally Installing Firebase Tools Command-line Tool</li>
            <ul>
                >     sudo npm i -g firebase-tools
            </ul>
            <li>Installing Firebase locally with npm </li>
            <ul>
                >     npm i firebase
            </ul>
            <li>Utilized Authentication and Firestore for application's authentication processes and using real-time and scalablen databases </li>
            <li>Imported 'createUserWithEmailAndPassword' and 'signInWithEmailAndPassword' from 'firebase/auth'</li>
            >     signInWithEmailAndPassword(auth, email, password)
            >        .then ((userCredential) => {
            >            navigate('/');
            >        })
            >        .catch((error) => {
            >            alert(error.message);
            >     })
            <li>Deployed the application through firebase: 'firebase deploy'</li>
        </ul>
    </li>
    <li>
        useState('');
        <ul>
            <li>useState allows functional components to store and update values, making it easier to handle data that changes over time within a component</li>
            <li>useState is a hook. In React, a hook is a special function that lets you "hook into" React’s core features (like state and lifecycle methods) within functional components.</li>
            >     const [email, setEmail] = useState('');
            >     <input type='text' value = {email} onChange={e => setEmail(e.target.value)}/>
            <li>The onChange event handler listens for changes to the input field. Every time the user types, this function is called.</li>
            <li>setEmail(e.target.value) updates the email state with this new value.></li>
        </ul>
    </li>
</ul>