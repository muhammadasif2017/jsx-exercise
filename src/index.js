import React from 'react';
import ReactDOM from 'react-dom';
// function MyThing() {
//   return (
//     <div className='book'>
//       <div>
//         Newline
//         Test
//       </div>
//       <div>
//         Empty

//         Newlines

//         here
//       </div>
//       <div>
//         &nbsp;Non Breaking
//         &nbsp;Spaces&nbsp;
//       </div>
//       <div>
//         Line1
//         {' '}
//         Line2 
//       </div>
//       <div className='title'>
//         The Title
//       </div>
//       <div className='author'>
//         The Author
//       </div>
//       <ul className='stats'>
//         <li className='rating'>
//           5 stars
//         </li>
//         <li className='isbn'>
//           12-345678-910
//         </li>
//       </ul>
//     </div>
//   )
// }
// function MyThingUsingReact() {
//   return (
//     React.createElement('div', {}, 
//       React.createElement('div', {}, 'The Title'),
//       React.createElement('div', {}, 'The Author'),
//       React.createElement('ul', {}, 
//         React.createElement('li', {}, '5 stars'),
//         React.createElement('li', {}, '12-345678-910')
//       )
//     )
//   )
// }
// React.createElement('div', {},
//     React.createElement('div', {}, 'Child1'),
//     React.createElement('div', {}, 'Child2',
//       React.createElement('div', {}, 'Child2_child')
//     )
// );

// function Greetings() {
//   let username = 'root';

//   return (
//     <>
//       <button onClick={() => alert('Hello from alert')}>Alert Button</button>
//       { username && 'Hello, username' }
//       { !username && 'Not logged in' }
//       {
//         username ? 'hello' : 'not hello'
//       }
//     </>
//   )
// }
function Data() {
  return ( 
    <>
      <tr>
      <td>Name</td>
      <td>Muhammad Asif</td>
      </tr>
      <tr>
        <td>Company</td>
        <td>Qbatch</td>
      </tr>
      <tr>
        <td>Post</td>
        <td>Associate Software Engineer</td>
      </tr>
    </>
  )
}
function Tables() {
  return (
    <table>
      <tbody>
        <Data />
      </tbody>
    </table>
  )
}
ReactDOM.render(
<Tables/>, document.querySelector('#root')
);