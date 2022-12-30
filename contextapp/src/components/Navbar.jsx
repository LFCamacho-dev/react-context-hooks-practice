import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { AuthContext } from '../context/AuthContext';

// class Navbar extends Component {
//     // static contextType = ThemeContext
//     render() {
//         // console.log(this.context);
//         // const { isLightTheme, light, dark } = this.context
//         // const theme = isLightTheme ? light : dark
//         return (
//             <AuthContext.Consumer>{(authContext) => (                
//                 <ThemeContext.Consumer>{(themeContext) => {                   
//                     const { isAuthenticated, toggleAuth } = authContext
//                     const { isLightTheme, light, dark } = themeContext
//                     const theme = isLightTheme ? light : dark
//                     return( 
//                         <nav style={{backgroundColor: theme.ui, color: theme.syntax}}>
//                         <h1>Context App</h1>
//                         <div onClick={toggleAuth} style={{cursor: 'pointer'}}>
//                             {isAuthenticated ? "Logged in" : "Logged out"}
//                         </div>
//                         <ul>
//                             <li>Home</li>
//                             <li>About</li>
//                             <li>Contact</li>
//                         </ul>
//                     </nav>
//                     )
//                 }}
//                 </ThemeContext.Consumer>
//             )}
//             </AuthContext.Consumer>
//         );
//     }
// }


const Navbar = () => {
    
    const { isAuthenticated, toggleAuth } = useContext(AuthContext)    
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark

    return (

        <nav style={{backgroundColor: theme.ui, color: theme.syntax}}>
            <h1>Context App</h1>
            <div onClick={toggleAuth} style={{cursor: 'pointer'}}>
                {isAuthenticated ? "Logged in" : "Logged out"}
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>

  )
}
 
export default Navbar;