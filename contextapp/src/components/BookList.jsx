import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { BookContext } from '../context/BookContext';

// class BookList extends Component {
//     static contextType = ThemeContext
//     render() {         
//         const { isLightTheme, light, dark } = this.context
//         const theme = isLightTheme ? light : dark
//         return ( 
//         <div className="book-list" style={{backgroundColor: theme.bg, color: theme.syntax}}>
//             <ul>
//             <li style={{backgroundColor: theme.ui}}>the way of kings</li>
//             <li style={{backgroundColor: theme.ui}}>the name of the wind</li>
//             <li style={{backgroundColor: theme.ui}}>the final empire</li>
//             </ul>
//         </div>
//         );
//     }
// }


const BookList = () => {

    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark
    const { books } = useContext(BookContext)

    return ( 
        <div className="book-list" style={{backgroundColor: theme.bg, color: theme.syntax}}>
            <ul>
                {books.map(book => {
                    return (
                        <li key={book.id} style={{backgroundColor: theme.ui}}>{book.title}</li>
                    )
                })}
                {/* <li style={{backgroundColor: theme.ui}}>the way of kings</li>
                <li style={{backgroundColor: theme.ui}}>the name of the wind</li>
                <li style={{backgroundColor: theme.ui}}>the final empire</li> */}
            </ul>
        </div>
     );
} 
 
export default BookList;