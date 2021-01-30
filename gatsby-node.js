exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;
    const { data } = await graphql(`
        {
            files: allFile(filter: {sourceInstanceName: {in: ["books", "video-games"]}}) {
                edges {
                    node {
                        sourceInstanceName
                        name
                    }
                }
            }
        }
    `);

    data.files.edges.forEach(({ node }) => {
        createPage({
            path: `media-consumption/${node.sourceInstanceName}/${node.name}`,
            component: require.resolve(`./src/templates/media-consumption.js`),
            context: {
                slug: node.name,
            },
        });
    });
}

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions;
    const typeDefs = `
        type MarkdownRemark implements Node {
            frontmatter: Frontmatter
        }
        type Frontmatter {
            season: Int
            finish: Boolean
            love: Boolean
            hate: Boolean
        }
    `;

    createTypes(typeDefs)
}
