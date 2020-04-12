import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const thumbnailStyles = {
	padding: ".25rem",
	backgroundColor: "#fff",
	border: "1px solid #dee2e6",
	borderRadius: ".25rem",
	maxWidth: "100%",
	height: "auto"
}

const Gallery = ({ data }) => {
	// console.log(data);
	return (<Layout>
		<SEO title="Gallery" />
		<div className="container">
			<div className="row">
				<div className="col-12">
					<h1 className="text-center">Gallery System</h1>
					<hr />
				</div>
			</div>
			<div className="row align-content-center">
				{
					data.galleryImages.nodes.map(image => (
						<div key={image.id} className="col-12 col-sm-6 col-md-4 text-center mb-3" style={{ height: "200px" }}>
							{/* <Img className="img-thumbnail p-2" fixed={image.childImageSharp.fixed} /> */}
							<Img style={{ paddingBottom: "0.25rem" }} imgStyle={thumbnailStyles} fluid={image.childImageSharp.fluid} />
						</div>
					))
				}
			</div>
		</div>
	</Layout>)
}

export default Gallery

export const query = graphql`
	{
		galleryImages: allFile(filter: {relativeDirectory: {eq: "gallery"}}) {
			nodes {
				id
        childImageSharp {
          fixed (width: 200, height: 200) {
            ...GatsbyImageSharpFixed
					}
					fluid{
						...GatsbyImageSharpFluid
					}
        }
      }
    }
	}
`
