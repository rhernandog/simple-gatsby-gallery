import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center">Simple Gallery Sample</h1>
          <p className="lead">A simple example of using Gatsby Image to set up a simple gallery system</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
