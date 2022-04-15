import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
    return(
        <ChatEngine 
            height="100vh"
            projectID="3ca70463-7a92-4782-9e4f-adc91b3ea538"
            userName="javascriptmastery"
            userSecret="12341234"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        
        />
    );
}

export default App;