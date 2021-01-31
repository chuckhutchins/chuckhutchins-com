import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/persona/layout-p5r"
import SEO from "../../components/seo"

const IndexPage = () => (
    <Layout>
        <main>
            <SEO override={"Persona 5 Royal"}/>
            <div>
                <div>
                    <h2>Persona 5 Royal Guides</h2>
                    <p>Wow this is way more convenient than what I was doing before.</p>
                </div>
                <div className="hr--mini"/>
                <div>
                    <h3>Months</h3>
                    <ul>
                        <li><Link to="/p5r/04">April</Link></li>
                        <li><Link to="/p5r/05">May</Link></li>
                        <li><Link to="/p5r/06">June</Link></li>
                        <li><Link to="/p5r/07">July</Link></li>
                        <li><Link to="/p5r/08">August</Link></li>
                        <li><Link to="/p5r/09">September</Link></li>
                        <li><Link to="/p5r/10">October</Link></li>
                        <li><Link to="/p5r/11">November</Link></li>
                        <li><Link to="/p5r/12">December</Link></li>
                        <li><Link to="/p5r/01">January</Link></li>
                        <li><Link to="/p5r/02">February</Link></li>
                    </ul>
                </div>
                <div className="hr--mini"/>
                <div>
                    <h3>Resources</h3>
                    <ul>
                        <li><Link to="/p5r/changelog">Changelog</Link></li>
                        <li><a href="https://joyceychen.com/persona5-negotiation/royal">Negotiation Guide</a></li>
                        <li><a href="https://aqiu384.github.io/p5r-walkthrough/walkthrough">Data Source</a></li>
                        <li><a href="https://aqiu384.github.io/megaten-fusion-tool/p5r/personas">Fusion Guide</a></li>
                    </ul>
                </div>
            </div>
        </main>
    </Layout>
)

export default IndexPage
