// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
// Step 2: Define your component
const AboutPage = () => {
    return (
        <main>
            <title>About Me</title>
            <Layout pageTitle={'about'}>
                <h1>Hello</h1>
            </Layout>
        </main >
    )
}

// Step 3: Export your component
export default AboutPage