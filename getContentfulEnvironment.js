const contentfulManagement = require("contentful-management")

module.exports = function() {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: 'CFPAT-UjgHZAuijWW5dHrsw_3ayKyqGHtq84ZO7TN_SukpA_4',
  })

  return contentfulClient
    .getSpace('2z2ihhod6j4p')
    .then(space => space.getEnvironment('master '))
}