import  React from 'react';
const htmlContent =require("./htmlTemplates/signup.html");
import './styles/myStyle.css'
class App1 extends React.Component {

    render() {
        return (<div>
            <h1>Heading 1</h1>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
        </div>)
    }
}

export default App;