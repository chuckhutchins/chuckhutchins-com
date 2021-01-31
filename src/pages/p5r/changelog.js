import React from "react";
import Layout from "../../components/persona/layout-p5r";
import SEO from "../../components/seo";

export default function IndexPage() {
    return (
        <Layout>
            <main>
                <SEO override={"Changelog - Persona 5 Royal"}/>
                <div>
                    <div>
                        <h2>Changelog</h2>
                        <ul>
                            <li>2021-01-31 &ndash; Updated layout.</li>
                            <li>2021-01-30 &ndash; Added December, January, and February.</li>
                            <li>2021-01-18 &ndash; Added September, October, and November.</li>
                            <li>2021-01-12 &ndash; Added July and August.</li>
                            <li>2021-01-10 &ndash; Added June. Added Negotiation Guide resource. Switched monthly pages to numbers instead of names.</li>
                            <li>2021-01-09 &ndash; Initialized guide. Added resources. Added April and May.</li>
                        </ul>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
