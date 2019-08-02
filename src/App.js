import React from 'react';
import Page from 'wix-style-react/Page';
import './App.scss';

class App extends React.Component {
    render() {
        return (
            <Page upgrade>
                <Page.Header title="Page Header" />
                <Page.Content>Page Content</Page.Content>
            </Page>
        );
    }
}

export default App;
