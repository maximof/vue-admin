
export default {

  MAIN_TITLE: 'vue-admin',

  /**
   * UI component
   */
  // The Admin name in the Toolbar
  MAIN_TOOLBAR_TITLE: 'Admin XXX',
  // The user name in the Toolbar
  MAIN_TOOLBAR_USER_AVATAR_NAME: 'Juan',

  /**
   * Shared content inside List, Show, Create, Edit components
   */

  // Any View Title (List, Show, Create, Edit)
  RESOURCE_VIEW_TITLE: {
    with: ({ resourceName, view }) => `${resourceName} resource: ${view} operation`
  },
  // Create action button
  RESOURCE_CREATE_BUTTON: {
    with: ({ resourceName }) => `Create ${resourceName}`
  }
}
