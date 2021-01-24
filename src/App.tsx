import React from 'react';
import { Root, Routes, addPrefetchExcludes } from 'react-static';
import { Link, Router } from '@reach/router';
import FancyDiv from 'components/FancyDiv';
import Dynamic from 'containers/Dynamic';
import { GlobalStyle } from './global-style';
import styled from 'styled-components';

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic']);

const Nav = styled.nav`
    width: 100%;
    background: #108db8;
    & a {
        color: white;
        padding: 1rem;
        display: inline-block;
    }
`;

const Content = styled.div`
    padding: 1rem;
`;

function App() {
    return (
        <Root>
            <GlobalStyle />
            <Nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/dynamic">Dynamic</Link>
            </Nav>
            <Content>
                <FancyDiv>
                    <React.Suspense fallback={<em>Loading...</em>}>
                        <Router>
                            <Dynamic path="dynamic" />
                            <Routes path="*" />
                        </Router>
                    </React.Suspense>
                </FancyDiv>
            </Content>
        </Root>
    );
}

export default App;
