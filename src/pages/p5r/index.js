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
                    <li><a href="04">April</a></li>
                    <li><a href="05">May</a></li>
                    <li><a href="06">June</a></li>
                    <li><a href="07">July</a></li>
                    <li><a href="08">August</a></li>
                    <li>September</li>
                    <li>October</li>
                    <li>November</li>
                    <li>December</li>
                    <li>January</li>
                    <li>February</li>
                </ul>
            </div>
            <div className="hr--mini"/>
            <div>
                <h3>Resources</h3>
                <ul className="list">
                    <li><a href="changelog">Changelog</a></li>
                    <li><a href="https://joyceychen.com/persona5-negotiation/royal">Negotiation Guide</a></li>
                    <li><a href="https://aqiu384.github.io/p5r-walkthrough/walkthrough">Data Source</a></li>
                    <li><a href="https://aqiu384.github.io/megaten-fusion-tool/p5r/personas">Fusion Guide</a></li>
                </ul>
            </div>
        </main>
    </Layout>
)

export default IndexPage
