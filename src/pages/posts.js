import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { graphql } from 'gatsby'
import Posts from '../components/Posts'
const PostsPage = ({data}) => {
    const {allMdx:{nodes:posts}} = data
return <Layout>
    <Hero />
    <Posts posts={posts} title="all posts" />
</Layout>
}

export const query = graphql`
  {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        id
        frontmatter {
          author
          category
          date(formatString: "MMMM, Do YYYY")
          readTime
          slug
          title
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        excerpt
      }
    }
  }
`


export default PostsPage
