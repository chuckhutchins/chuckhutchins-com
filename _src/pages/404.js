import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

export default function NotFoundPage() {
    return (
        <Layout>
            <SEO title="404" />
            <main className="not-found">
                <div>
                    <h1>Not Found</h1>
                    <p>It looks like this page doesn't exist. Go back <Link to={'/'}>home</Link>.</p>
                </div>
            </main>
        </Layout>
    );
}
