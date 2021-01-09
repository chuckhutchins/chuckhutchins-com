import React from "react"

import Layout from "../../components/layout-p5r"
import SEO from "../../components/seo"

const IndexPage = () => (
    <Layout>
        <main>
            <SEO title={"Persona 5 Royal"}/>
            <div>
                <h2>Persona 5 Royal Guides</h2>
                <p>Wow this is way more convenient than what I was doing before.</p>
            </div>
            <div className="hr--mini"/>
            <div>
                <h3>Months</h3>
                <ul className="list">
                    <li><a href="april">April</a></li>
                    <li><a href="may">May</a></li>
                </ul>
            </div>
            <div className="hr--mini"/>
            <div>
                <h3>Resources</h3>
                <ul className="list">
                    <li><a href="p5r/changelog">Changelog</a></li>
                    <li><a href="https://aqiu384.github.io/p5r-walkthrough/walkthrough">Data source</a></li>
                    <li><a href="https://aqiu384.github.io/megaten-fusion-tool/p5r/personas">Fusion Guide</a></li>
                </ul>
            </div>
        </main>
    </Layout>
)

export default IndexPage
